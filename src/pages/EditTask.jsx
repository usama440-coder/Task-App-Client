import "../App.css";

const EditTask = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="addTaskContainer">
      <h2>Edit Task</h2>
      <br />
      <form>
        <div>
          <label htmlFor="title">
            <b>Title</b>
          </label>
          <input type="text" id="title" name="title" className="addTaskInput" />
        </div>
        <div>
          <label htmlFor="desc">
            <b>Description</b>
          </label>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            className="addTaskInput"
          ></textarea>
        </div>
        <div className="radioItems">
          <b>Status</b>
          <div>
            <input type="radio" id="pending" name="status" />
            <label htmlFor="status">Pending</label>
          </div>
          <div>
            <input type="radio" id="completed" name="status" />
            <label htmlFor="status">Completed</label>
          </div>
        </div>
        <button type="submit" className="submitBtn" onClick={handleSubmit}>
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditTask;
