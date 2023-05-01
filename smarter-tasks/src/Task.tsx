import React from "react";
import './TaskCard.css';
interface TaskProp {
  title: string;
  todoDescription:string;
  dueDate:string;
}
class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem">{this.props.title}
      <div className="TaskItem">
      {this.props.todoDescription}
      </div>
      <div className="TaskItem">
      {this.props.dueDate}
      </div>
      </div>
      
    )
  }
}
export default Task;