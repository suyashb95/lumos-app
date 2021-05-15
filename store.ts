import { configureStore } from '@reduxjs/toolkit';
import patternReducer from './reducers/PatternReducer';
import bluetoothReducer from './reducers/BLEDeviceReducer';

export default configureStore({
    reducer: {
        pattern: patternReducer,
        bluetooth: bluetoothReducer
    }
});
