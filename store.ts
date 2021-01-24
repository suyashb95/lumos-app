import { configureStore } from '@reduxjs/toolkit';
import patternReducer from './reducers/PatternReducer';

export default configureStore({
    reducer: {
        pattern: patternReducer,
    }
});
