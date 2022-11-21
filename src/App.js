import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TasksList from "./pages/TasksLists";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Task from "./pages/Task";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protected from "./components/Protected";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Toaster />
        <Routes>
          <Route
            path="/"
            element={
              <Protected redirectedPath="/login">
                <TasksList />
              </Protected>
            }
          ></Route>
          <Route
            path="/add"
            element={
              <Protected redirectedPath="/login">
                <AddTask />
              </Protected>
            }
          ></Route>
          <Route
            path="/edit/:id"
            element={
              <Protected redirectedPath="/login">
                <EditTask />
              </Protected>
            }
          ></Route>
          <Route
            path="/task/:id"
            element={
              <Protected redirectedPath="/login">
                <Task />
              </Protected>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
