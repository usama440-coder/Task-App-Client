import "../App.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../slices/task.slice";
import { deleteTask } from "../slices/task.slice";
import toast from "react-hot-toast";

const Task = () => {
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, task, error } = useSelector((state) => state.task);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTask(id));
  }, [dispatch, id]);

  const handleDelete = (e) => {
    dispatch(deleteTask(id))
      .unwrap()
      .then((data) => {
        toast.success("Task Deleted Successfully");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
    setOpenModal(false);
  };

  const handleEdit = (e) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="taskContainer">
      {openModal ? (
        <div className="modal">
          <p style={{ fontSize: 20 }}>Are your sure you want to delete?</p>
          <div>
            <button
              className="modalBtn close"
              onClick={() => setOpenModal(false)}
            >
              Close
            </button>
            <button className="modalBtn delete" onClick={() => handleDelete()}>
              Delete
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {loading ? (
        <h2>Loading</h2>
      ) : error !== "" ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="taskTitleContainer">
            <h2>{task.title}</h2>
            <p>{new Date(task.createdAt).toDateString()}</p>
          </div>
          <br />
          <div>
            <p>{task.description}</p>
          </div>
          <br />
          <div>
            <b>Status</b>
            <p>{task.status}</p>
          </div>
          <br />
          <button className="editTaskBtn edit" onClick={() => handleEdit()}>
            Edit
          </button>
          <button
            className="editTaskBtn del"
            onClick={() => setOpenModal(true)}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
