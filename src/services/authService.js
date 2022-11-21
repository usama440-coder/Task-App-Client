import http from "../http-common";

const register = (data) => {
  return http.post("/user/register", data);
};

const login = (data) => {
  return http.post("/user/login", data);
};

const authService = {
  register,
  login,
};

export default authService;
