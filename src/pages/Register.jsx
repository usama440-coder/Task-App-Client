import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../slices/auth.slice";
import toast from "react-hot-toast";

const Register = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(inputs))
      .unwrap()
      .then((data) => {
        toast.success(`User registered successfully!`);
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="addTaskContainer">
      <h2>Register</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <b>Name</b>
          </label>
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            id="name"
            onChange={handleChange}
            className="addTaskInput"
          />
        </div>
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
        Already have an account? <Link to="/login">login</Link> instead
      </span>
    </div>
  );
};

export default Register;
