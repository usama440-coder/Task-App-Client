import "../App.css";
import { useState } from "react";

const Task = () => {
  const [openModal, setOpenModal] = useState(false);

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
            <button className="modalBtn delete">Delete</button>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="taskTitleContainer">
        <h2>Taks Title</h2>
        <p>March 02, 2022</p>
      </div>
      <br />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          dolore, illo deleniti tenetur reiciendis magnam itaque labore vel
          officiis quam consectetur optio tempore ducimus omnis doloremque,
          impedit dolores delectus! Maiores ipsa quaerat cumque ipsum ipsam
          quibusdam? Inventore eum, quod assumenda magnam placeat dicta sapiente
          perspiciatis. Soluta assumenda dolorum odio exercitationem!
        </p>
      </div>
      <br />
      <div>
        <b>Status</b>
        <p>Pending</p>
      </div>
      <br />
      <button className="editTaskBtn edit">Edit</button>
      <button className="editTaskBtn del" onClick={() => setOpenModal(true)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
