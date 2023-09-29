import React, { useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "./DashboardLayoutStyles.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../redux/taskSlice";
import { getAllNotes } from "../../redux/noteSlice";

const Dashboard = () => {
  const tasklist = useSelector((state) => state.task);
  const { AllTasks } = tasklist;
  const user = useSelector((state) => state.auth);
  const { currentUser } = user;

  let completedTask = [];
  let ongoingTask = [];
  let pendingTask = [];

  for (let i = 0; i < AllTasks.length; i++) {
    if (AllTasks[i].Status === 1) {
      completedTask.push(AllTasks[i]);
    } else if (AllTasks[i].Status === 2) {
      ongoingTask.push(AllTasks[i]);
    } else if (AllTasks[i].Status === 3) {
      pendingTask.push(AllTasks[i]);
    }
  }

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getAllNotes(currentUser.Token, currentUser.UserId));
    },
    [currentUser.Token, currentUser.UserId, dispatch],
    currentUser.Token,
    currentUser.UserId
  );

  useEffect(
    () => {
      dispatch(getAllTasks(currentUser.Token, currentUser.UserId));
    },
    [
      currentUser.Token,
      currentUser.UseId,
      currentUser.UserId,
      currentUser.id,
      dispatch,
    ],
    currentUser.Token,
    currentUser.UseId
  );

  return (
    <div className="dashboard-container">
      <div className="custom-container">
        <div className="dashboard-card">
          <Link to={`/completed`}>
            <h2>Completed Tasks</h2>
            <p>{completedTask.length} Tasks</p>
          </Link>
        </div>

        <div className="dashboard-card">
          <Link to={`/ongoing`}>
            <h2>Ongoing Tasks</h2>
            <p>{ongoingTask.length} Tasks</p>
          </Link>
        </div>

        <div className="dashboard-card">
          <Link to={`/upcoming`}>
            <h2>Upcoming Tasks</h2>
            <p>{pendingTask.length} Tasks</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
