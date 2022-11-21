import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import taskReducer from "./slices/task.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    task: taskReducer,
  },
});

export default store;
