import { createSlice } from '@reduxjs/toolkit'
import { Behavior } from '../constants/Behavior'

const patternSlice = createSlice({
    name: 'pattern',
    initialState: {
        colors: [0x0000FF, 0xFF0000],
        anchorPoints: [],
        motionRate: 20,
        brightness: 65,
        behavior: Behavior.WAVE
    },
    reducers: {
        setBrightness: (state, action) => {
            state.brightness = action.payload;
        },
        setSpeed: (state, action) => {
            state.motionRate = action.payload;
        },
        setPalette: (state, action) => {
            let { colors, anchorPoints } = action.payload;
            state.colors = colors;
            state.anchorPoints = anchorPoints;
        },
        setBehavior: (state, action) => {
            state.behavior = action.payload;
        },
    }
})

export const getBehavior = (state: any) => state.pattern.behavior;
export const getBrightness = (state: any) => state.pattern.brightness;
export const getSpeed = (state: any) => state.pattern.motionRate;
export const getPatternConfiguration = (state: any) => state.pattern;

export const {
    setBrightness,
    setSpeed,
    setPalette,
    setBehavior
} = patternSlice.actions;

export default patternSlice.reducer;