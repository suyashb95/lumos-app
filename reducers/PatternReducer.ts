import { createSlice } from '@reduxjs/toolkit'
import { Behavior } from '../constants/Behavior'

const patternSlice = createSlice({
    name: 'pattern',
    initialState: {
        colors: [],
        anchorPoints: [],
        speed: 50,
        brightness: 50,
        behavior: Behavior.NONE
    },
    reducers: {
        setBrightness: (state, action) => {
            state.brightness = action.payload;
        },
        setSpeed: (state, action) => {
            state.speed = action.payload;
        },
        setPalette: (state, action) => {
            let { colors, anchorPoints } = action.payload;
            state.colors = colors;
            state.anchorPoints = anchorPoints;
        },
        setBehavior: (state, action) => {
            state.behavior = action.payload;
        }
    }
})

export const getBehavior = (state: any) => state.pattern.behavior;
export const getBrightness = (state: any) => state.pattern.brightness;
export const getSpeed = (state: any) => state.pattern.speed;

export const {
    setBrightness,
    setSpeed,
    setPalette,
    setBehavior
} = patternSlice.actions;

export default patternSlice.reducer;