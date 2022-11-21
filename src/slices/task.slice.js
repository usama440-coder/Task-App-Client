import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import taskService from "../services/taskService";

const initialState = {
  loading: false,
  tasks: [],
  task: {},
  error: "",
};

export const addTask = createAsyncThunk("task/add", async (data, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const res = await taskService.addTask(data, token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getTasks = createAsyncThunk("tasks/get", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const res = await taskService.getTasks(token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getTask = createAsyncThunk("task/get", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const res = await taskService.getTask(id, token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const deleteTask = createAsyncThunk(
  "task/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const res = await taskService.deleteTask(id, token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const editTask = createAsyncThunk(
  "task/edit",
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const res = await taskService.editTask(id, data, token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addTask.pending, (state, action) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload.task);
        state.error = "";
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(getTasks.pending, (state, action) => {
        state.loading = true;
        state.tasks = [];
        state.error = "";
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload.tasks;
        state.error = "";
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
        state.tasks = [];
        state.error = action.payload.message;
      })
      .addCase(getTask.pending, (state, action) => {
        state.loading = true;
        state.task = {};
        state.error = "";
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.loading = false;
        state.task = action.payload.task;
        state.error = "";
      })
      .addCase(getTask.rejected, (state, action) => {
        state.loading = false;
        state.task = {};
        state.error = action.payload.message;
      })
      .addCase(deleteTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(editTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(editTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

const { reducer } = taskSlice;
export default reducer;
