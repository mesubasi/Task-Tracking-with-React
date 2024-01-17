import React, { useEffect, useState } from "react";
import TaskListItem from "./TaskListItem";

function TaskList({ tasks, removeTask, editTask, doneTask }) {
  const [priority, setPriority] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  function handlePriorityFilter() {
    setPriority((prev) => !prev);
  }

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    setFilteredTasks(priority ? tasks.filter((item) => item.priority) : tasks);
  }, [priority, tasks]);

  return (
    <>
      <div className="p-4 bg-light mb-5 border rounded">
        <p
          className="mb-3"
          style={{
            display: "inline-block",
            width: "max-content",
            margin: "0",
          }}
        >
          Tasks
        </p>
        <span
          onClick={handlePriorityFilter}
          className={`btn btn-sm ${
            !priority ? "btn-info" : "btn-primary"
          } float-end ms-3`}
        >
          {!priority ? "Show Priority Areas" : "Show All"}
        </span>
        <ul className="list-group my-3">
          {filteredTasks.map((item, index) => (
            <TaskListItem
              key={index}
              item={item}
              editTask={editTask}
              removeTask={removeTask}
              doneTask={doneTask}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
