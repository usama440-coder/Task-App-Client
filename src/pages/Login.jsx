import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../slices/auth.slice";
import toast from "react-hot-toast";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(inputs))
      .unwrap()
      .then((data) => {
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="addTaskContainer">
      <h2>Login</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            value={inputs.email || ""}
            id="email"
            onChange={handleChange}
            className="addTaskInput"
          />
        </div>
        <div>
          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            id="password"
            onChange={handleChange}
            className="addTaskInput"
          />
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
      <br />
      <span>
        Do not have an account? <Link to="/register">register</Link> instead
      </span>
    </div>
  );
};

export default Login;
