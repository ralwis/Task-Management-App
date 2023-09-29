import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./EditTaskStyles.css";
import { useDispatch, useSelector } from "react-redux";
import { createTask, deleteTask, updateTask } from "../../redux/taskSlice";

const EditTask = (prop) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pageTitle = id === "new" ? "New Task" : "Edit Task";

  const user = useSelector((state) => state.auth);
  const { currentUser } = user;

  const [formData, setFormData] = useState({
    taskname: "",
    priority: "low",
    description: "",
    startDate: "",
    dueDate: "",
    status: "todo",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (id === "new") {
      dispatch(
        createTask(
          {
            name: formData.taskname,
            priority: formData.priority,
            description: formData.description,
            startDate: formData.startDate,
            endDate: formData.dueDate,
            status: formData.status,
          },
          currentUser.Token
        )
      );
    } else {
      dispatch(
        updateTask(
          {
            name: formData.taskname,
            priority: formData.priority,
            Description: formData.description,
            startDate: formData.startDate,
            endDate: formData.endDate,
            status: formData.status,
          },
          currentUser.UserId,
          13,
          currentUser.Token
        )
      );
    }
  };

  const handleDeleteTask = () => {
    if (id !== "new") {
      dispatch(deleteTask(currentUser.UserId, id, currentUser.Token));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="editCard">
      <h1>{pageTitle}</h1>
      <div className="card-edit">
        <form onSubmit={handleFormSubmit}>
          <div className="form-row">
            <label>
              Task:
              <input
                type="text"
                name="taskname"
                value={formData.taskname}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Priority:
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
          <div className="form-row">
            <label>
              Start Date:
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </label>
            <label>
              Due Date:
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Status:
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="todo">To Do</option>
                <option value="inProgress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </label>
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">
              Save
            </button>
            <button
              type="button"
              className="delete-button"
              onClick={handleDeleteTask}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
