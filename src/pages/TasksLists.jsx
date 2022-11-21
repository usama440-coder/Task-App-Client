import "../App.css";
import { AiOutlineEye } from "react-icons/ai";
import { getTasks } from "../slices/task.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TasksList = () => {
  const dispatch = useDispatch();
  const { loading, tasks, error } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <div className="taskListContainer">
      <br />
      <h3>Tasks List</h3>
      <br />
      {loading ? (
        <h2>Loading....</h2>
      ) : error !== "" ? (
        <p>{error}</p>
      ) : (
        <>
          {tasks.length === 0 ? (
            <p>
              <br />
              You have not currently added any task
            </p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>{new Date(task.createdAt).toDateString()}</td>
                    <td>{task.status}</td>
                    <td>
                      <Link to={`/task/${task._id}`}>
                        <AiOutlineEye className="eyeIcon" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
      <br />
    </div>
  );
};

export default TasksList;
