import { createSlice } from '@reduxjs/toolkit'

const bluetoothState = createSlice({
    name: 'bluetooth',
    initialState: {
        selectedDeviceId: null,
        isConnected: false
    },
    reducers: {
        setSelectedDevice: (state, action) => {
            console.log(action);
            state.selectedDeviceId = action.payload;
        },
        clearSelectedDevice: (state, action) => {
            state.selectedDeviceId = null;
        },
        connect: (state) => {
            state.isConnected = true;
        },
        disconnect: (state) => {
            state.isConnected = false;
        }
    }
});

export const getSelectedDeviceId = (state: any) => state.bluetooth.selectedDeviceId;
export const isConnected = (state: any) => state.bluetooth.isConnected;

export const {
    setSelectedDevice,
    clearSelectedDevice,
    connect,
    disconnect
} = bluetoothState.actions;

export default bluetoothState.reducer;    