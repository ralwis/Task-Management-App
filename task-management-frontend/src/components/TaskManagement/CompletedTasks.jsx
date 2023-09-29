import React, { useEffect } from "react";
import "./OngoingTasksStyles.css";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasksForStatus } from "../../redux/taskSlice";

const CompletedTasks = () => {
  const tasklist = useSelector((state) => state.task);
  const { AllTasks } = tasklist;
  const user = useSelector((state) => state.auth);
  const { currentUser } = user;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasksForStatus(currentUser.Token, currentUser.UserId, 1));
  }, [currentUser.Token, currentUser.UserId, dispatch]);

  return (
    <div className="tasks">
      <h1>Completed Tasks</h1>

      <div className="taskcard">
        {Object.values(AllTasks).map((task) => {
          return (
            <Task
              key={task.Id}
              id={task.Id}
              heading={task.Name}
              text={task.Description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CompletedTasks;
