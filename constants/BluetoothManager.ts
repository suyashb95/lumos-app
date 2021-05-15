import { BleManager } from "react-native-ble-plx";

let bleManager = new BleManager();

const BluetoothManager = {
    setBluetoothManager: (newBleManager: BleManager) => bleManager = newBleManager,
    getBluetoothManager: () => bleManager
}

Object.freeze(BluetoothManager);

export default BluetoothManager;