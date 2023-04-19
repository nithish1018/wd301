import "./TaskCard.css";
import React from 'react';
interface TaskCardInterface {
  title: string;
  completedAtDate?: string;
  dueDate?: string;
  assigneeName: string;
  description?:string;
}
class TaskCard extends React.Component<TaskCardInterface> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        <p className="text-sm text-slate-500">{this.props.dueDate}</p>
        <p className="text-sm text-slate-500">
          Description: {this.props.description}
        </p>
      </div>
    );
  }
}

export default TaskCard;