import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TasksList from "./pages/TasksLists";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Task from "./pages/Task";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TasksList />}></Route>
          <Route path="/add" element={<AddTask />}></Route>
          <Route path="/edit/:id" element={<EditTask />}></Route>
          <Route path="/task/:id" element={<Task />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
