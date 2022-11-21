import "../App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../slices/task.slice";
import { toast } from "react-hot-toast";

const AddTask = () => {
  const [inputs, setInputs] = useState({
    status: "Pending",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(inputs))
      .unwrap()
      .then((data) => {
        toast.success("Task added successfully!");
        setInputs(() => {
          return {};
        });
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
      <h2>Add Task</h2>
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
              checked
              onChange={handleChange}
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
            />
            <label htmlFor="status">Completed</label>
          </div>
        </div>
        <button type="submit" className="submitBtn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
