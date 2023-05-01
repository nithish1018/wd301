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
      <div className="TaskItem" >
        <h1> {this.props.title}</h1>
     
        <h1> {this.props.todoDescription} </h1>
      
        <h1> {this.props.dueDate} </h1>
   
      </div>
      
    )
  }
}
export default Task;