import { createSlice } from '@reduxjs/toolkit'

const bluetoothState = createSlice({
    name: 'bluetooth',
    initialState: {
        devices: [],
        connectedDevice: null,
        isScanning: false,
    },
    reducers: {}
})

export const getBehavior = (state: any) => state.bluetooth.behavior;
export const getBrightness = (state: any) => state.bluetooth.brightness;
export const getSpeed = (state: any) => state.bluetooth.speed;

export const {
    setBrightness,
    setSpeed,
    setPalette,
    setBehavior
} = bluetoothState.actions;

export default bluetoothState.reducer;    