import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import SERVICE_API from "../api";

const initalTask = localStorage.getItem("task")
  ? JSON.parse(localStorage.getItem("task"))
  : null;

const initialState = {
  TaskData: initalTask,
  AllTasks: {},
};

export const taskSlice = createSlice({
  name: "Task",
  initialState,

  reducers: {
    getAllTaskSuccess: (state, action) => {
      state.AllTasks = action.payload;
    },
    getAllTaskFailure: (state) => {
      return state;
    },
    getAllTasksForStatusSuccess: (state, action) => {
      state.AllTasks = action.payload;
    },
    getAllTasksForStatusFailure: (state) => {
      return state;
    },
    createTaskSuccess: (state, action) => {
      state.AllTasks = action.payload;
    },
    createTaskFailure: (state) => {
      return state;
    },
    updateTaskSuccess: (state, action) => {
      state.AllTasks = action.payload;
    },
    updateTaskFailure: (state) => {
      return state;
    },
    deleteSuccess: (state, action) => {
      state.AllTasks = action.payload;
    },
    deleteFail: (state) => {
      return state;
    },
  },
});

export const {
  getAllTaskSuccess,
  getAllTaskFailure,
  getAllTasksForStatusSuccess,
  getAllTasksForStatusFailure,
  createTaskSuccess,
  createTaskFailure,
  updateTaskSuccess,
  updateTaskFailure,
  deleteSuccess,
  deleteFail,
} = taskSlice.actions;

export default taskSlice.reducer;

export const getAllTasks = (token, id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .get(`${SERVICE_API}/job/get/${id}`, config)
    .then((res) => {
      debugger;
      dispatch(getAllTaskSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getAllTaskFailure());
      toast.error("Failed to fetch tasks");
    });
};

export const getAllTasksForStatus = (token, id, status) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .get(`${SERVICE_API}/job/get/status/${id}/${status}`, config)
    .then((res) => {
      debugger;
      dispatch(getAllTasksForStatusSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getAllTasksForStatusFailure());
      toast.error("Failed to fetch tasks by Status");
    });
};

export const createTask = (task, token) => async (dispatch) => {
  debugger;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      name: task.name,
      priority: task.priority,
      Description: task.description,
      startDate: task.startDate,
      endDate: task.endDate,
      status: task.status,
    },
  };

  await axios
    .post("https://localhost:7150/api/Job/post", config)
    .then((res) => {
      debugger;
      dispatch(createTaskSuccess(res.data));
    })
    .catch((err) => {
      dispatch(createTaskFailure());
      toast.error("Failed to add task");
    });
};

export const updateTask = (task, id, taskId, token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      name: task.name,
      priority: 1,
      Description: task.Description,
      startDate: "2023-09-23T04:48:33.428Z",
      endDate: "2023-09-27T04:48:33.428Z",
      status: 3,
    },
  };

  axios
    .put(`https://localhost:7150/api/Job/update/${id}/${taskId}`, config)
    .then((res) => {
      dispatch(updateTaskSuccess(res.data));
    })
    .catch((err) => {
      dispatch(updateTaskFailure());
      toast.error("Failed to update tasks");
    });
};

export const deleteTask = (id, taskId, token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .put(`https://localhost:7150/api/job/delete/${id}/${taskId}`, config)
    .then((res) => {
      dispatch(deleteSuccess());
      toast.success("Successfully deleted");
    })
    .catch((err) => {
      dispatch(deleteFail());
    });
};
