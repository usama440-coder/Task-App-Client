import http from "../http-common";

const addTask = (data, token) => {
  return http.post("/task", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getTasks = (token) => {
  return http.get("/task", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getTask = (id, token) => {
  return http.get(`/task/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const deleteTask = (id, token) => {
  return http.delete(`/task/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const editTask = (id, data, token) => {
  return http.put(`/task/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const taskService = {
  addTask,
  getTasks,
  getTask,
  deleteTask,
  editTask,
};

export default taskService;
