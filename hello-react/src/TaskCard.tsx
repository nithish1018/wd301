import React from "react";
import "./TaskCard.css";
interface TaskCardInterface {
      title: string,
      completedAtDate?: string,
      dueDate?: string,
      assigneeName: string
  }
const TaskCard = (props:TaskCardInterface) => {
  console.log(props)
  return (
    <div className='TaskItem border-black'>
      <h3 className="text-xl font-semibold border-black">{props.title}</h3>
     {props.dueDate &&<p> Due on:{props.dueDate}</p>}
      {props.completedAtDate && <p> Completed On:{props.completedAtDate}</p>}

      <p>Assignee: {props.assigneeName}</p>
    </div>
  )
}

export default TaskCard