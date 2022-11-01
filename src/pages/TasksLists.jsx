import "../App.css";
import { AiOutlineEye } from "react-icons/ai";

const TasksList = () => {
  return (
    <div className="taskListContainer">
      <div className="searchBar">
        <input type="text" placeholder="Search Task" className="searchInput" />
        <button className="searchBtn">Search</button>
      </div>
      <br />
      <h3>Tasks List</h3>
      <br />
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
          <tr>
            <td>Some title</td>
            <td>March 02, 2022</td>
            <td>Pending</td>
            <td>
              <AiOutlineEye className="eyeIcon" />
            </td>
          </tr>
          <tr>
            <td>Some title</td>
            <td>March 02, 2022</td>
            <td>Pending</td>
            <td>
              <AiOutlineEye className="eyeIcon" />
            </td>
          </tr>
          <tr>
            <td>Some title</td>
            <td>March 02, 2022</td>
            <td>Pending</td>
            <td>
              <AiOutlineEye className="eyeIcon" />
            </td>
          </tr>
          <tr>
            <td>Some title</td>
            <td>March 02, 2022</td>
            <td>Pending</td>
            <td>
              <AiOutlineEye className="eyeIcon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TasksList;
