import { configureStore } from "@reduxjs/toolkit";

import authReducer from './authSlice';
import taskReducer from './taskSlice';
import noteReducer from './noteSlice';

export const store = configureStore({
    reducer: {auth: authReducer, task: taskReducer, note: noteReducer}
})