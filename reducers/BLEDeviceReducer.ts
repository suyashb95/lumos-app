import { createSlice } from '@reduxjs/toolkit'

const bluetoothState = createSlice({
    name: 'bluetooth',
    initialState: {
        connectedDeviceId: null
    },
    reducers: {
        setConnectedDevice: (state, action) => {
            console.log(action);
            state.connectedDeviceId = action.payload;
        },
        clearConnectedDevice: (state, action) => {
            state.connectedDeviceId = null;
        },
    }
});

export const getConnectedDevice = (state: any) => state.bluetooth.connectedDeviceId;

export const {
    setConnectedDevice,
    clearConnectedDevice,
} = bluetoothState.actions;

export default bluetoothState.reducer;    