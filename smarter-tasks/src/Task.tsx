import React from "react";
import './TaskCard.css';
import { Link } from "react-router-dom";
interface TaskItem {
  id: number;
  title: string;
  todoDescription:string;
  dueDate:string;
}
const Task= (props: TaskItem) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <Link to={`/tasks/${props.id}`}>
  <h2 className="text-base font-bold my-1">{props.title}</h2>
</Link>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm font-bold text-blue-500">
        Description: {props.todoDescription}
      </p>
    </div>
  );
};
export default Task;