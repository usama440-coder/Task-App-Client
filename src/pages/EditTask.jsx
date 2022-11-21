import "../App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../slices/task.slice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const EditTask = () => {
  const { task } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputs, setInputs] = useState({
    title: task.title || "",
    description: task.description || "",
    status: "Pending",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id, data: inputs }))
      .unwrap()
      .then((data) => {
        toast.success("Task updated successfully!");
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
      <h2>Edit Task</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            <b>Title</b>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={inputs.title || ""}
            onChange={handleChange}
            className="addTaskInput"
          />
        </div>
        <div>
          <label htmlFor="desc">
            <b>Description</b>
          </label>
          <textarea
            rows={10}
            name="description"
            value={inputs.description || ""}
            id="desc"
            onChange={handleChange}
            className="addTaskInput"
          ></textarea>
        </div>
        <div className="radioItems">
          <b>Status</b>
          <div>
            <input
              type="radio"
              id="pending"
              name="status"
              value="Pending"
              onChange={handleChange}
              checked={inputs.status === "Pending"}
            />
            <label htmlFor="status">Pending</label>
          </div>
          <div>
            <input
              type="radio"
              id="completed"
              name="status"
              value="Completed"
              onChange={handleChange}
              checked={inputs.status === "Completed"}
            />
            <label htmlFor="status">Completed</label>
          </div>
        </div>
        <button type="submit" className="submitBtn">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditTask;
