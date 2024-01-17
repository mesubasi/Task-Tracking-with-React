import React from "react";

function TaskListItem({ item, editTask, removeTask, doneTask }) {
  return (
    <li
      className={`list-group-item ${item.isDone && "bg-success bg-gradients"}`}
      key={item.uuid}
    >
      {item.priority && (
        <span className="badge text-bg-secondary me-2">Priority</span>
      )}
      {item.task}
      <div className="btn-group float-end" role="group">
        <button
          onClick={() => doneTask(item.uuid)}
          className="btn btn-sm btn-success float-end"
        >
          Done
        </button>
        <button
          onClick={() => editTask(item.uuid)}
          className="btn btn-sm btn-info float-end"
        >
          Update
        </button>
        <button
          onClick={() => removeTask(item.uuid)}
          className="btn btn-sm btn-danger float-end"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskListItem;
