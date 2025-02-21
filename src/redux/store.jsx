import { configureStore } from '@reduxjs/toolkit';
import instructorReducer from './slices/instructorSlice';
import courseReducer from './slices/couresSlice';
import lectureReducer from './slices/lectureSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    instructors: instructorReducer,
    courses: courseReducer,
    lectures: lectureReducer,
    auth: authReducer,
  },
});

export default store;
