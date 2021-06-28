package com.appdeixanoazul;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import android.app.Activity;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class BluetoothModule extends ReactContextBaseJavaModule {

    private static final int REQUEST_ENABLE_BT = 0;
    private static final int REQUEST_DISCOVER_BT = 1;

    private static ReactApplicationContext reactContext;
    private BluetoothAdapter bluetoothAdapter;
    private List<BluetoothDevice> listaDispostivo = new ArrayList<>();

    private static final long SCAN_PERIOD = 10000;

    BluetoothModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
        bluetoothAdapter=BluetoothAdapter.getDefaultAdapter();

        reactContext.addActivityEventListener(mActivityEventListener);
    }

    @ReactMethod
    public void turnOn() {
        Activity currentActivity = getCurrentActivity();

        if (!bluetoothAdapter.isEnabled()) {
            showToast("Ativando Bluetooth...");
            Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
            currentActivity.startActivityForResult(enableBtIntent, REQUEST_ENABLE_BT);
            // bluetoothAdapter.enable();
        } else {
            showToast("Bluetooth já está ativado");
        }
    }

    @ReactMethod
    public void turnOff() {
        if (bluetoothAdapter.isEnabled()) {
            showToast("Desativando Bluetooth..");
            bluetoothAdapter.disable();
        } else {
            showToast("Bluetooth já está desativado");
        }
    }

    @ReactMethod
    public void discoverable() {
        Activity currentActivity = getCurrentActivity();

        if (bluetoothAdapter.isEnabled()) {
            showToast("Tornando seu dispositivo detectável");
            Intent intent = new Intent(BluetoothAdapter.ACTION_REQUEST_DISCOVERABLE);
            currentActivity.startActivityForResult(intent, REQUEST_DISCOVER_BT);
            // bluetoothAdapter.startDiscovery();
        } else {
            showToast("Ligue o seu bluetooth");
        }
    }

    @ReactMethod
    public void getPairedDevices(Promise promise) {
        if (bluetoothAdapter.isEnabled()) {
            Set<BluetoothDevice> pairedDevices = bluetoothAdapter.getBondedDevices();
            // JSONArray array = new JSONArray();
            WritableArray myDevices = new WritableNativeArray();

            showToast("Buscando dispositivos..");
            if (pairedDevices.size() > 0) {

                showToast("Buscando dispositivos..");

                for (BluetoothDevice device : pairedDevices) {
                    String deviceName = device.getName();
                    String deviceHardwareAddress = device.getAddress(); // MAC

                    myDevices.pushString(deviceName);
                }

                promise.resolve(myDevices);
                return;

            } else if (pairedDevices.size() == 0) {
                showToast("Não há dispositivos pareados..");
            }

            // bluetoothAdapter.getBondedDevices();
        } else {
            showToast("Ative o bluetooth para acessar os dispositivos pareados.");
        }
    }

    private final BroadcastReceiver receiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {

            String action = intent.getAction();
            showToast("333");

            if (BluetoothDevice.ACTION_FOUND.equals(action)) {
                // Discovery has found a device. Get the BluetoothDevice
                // object and its info from the Intent.
                BluetoothDevice device = intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE);
                String deviceName = device.getName();
                String deviceHardwareAddress = device.getAddress(); // MAC address
                showToast("444");

                listaDispostivo.add(device);
            }

        }
    };

    private void registerBroadcastReceiver() {
        IntentFilter filter = new IntentFilter(BluetoothDevice.ACTION_FOUND);
        reactContext.registerReceiver(receiver, filter);
    }




    @NonNull
    @Override
    public String getName() {
        return "BluetoothModule";
    }

    private void showToast(String msg) {
        Toast.makeText(reactContext, msg, Toast.LENGTH_SHORT).show();
    }

    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, @Nullable Intent intent) {

            switch (requestCode) {
                case REQUEST_ENABLE_BT:
                    if (resultCode == Activity.RESULT_OK) {
                        showToast("Bluetooth is On");
                    } else {
                        showToast("Bluetooth is Off");
                    }
                    break;
            }
            // super.onActivityResult(requestCode, resultCode, intent);
        }

    };

}
