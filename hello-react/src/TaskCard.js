import './TaskCard.css'

const TaskCard = (props) => {
  console.log(props)
  return (
    <div className='TaskItem border-black'>
      <h3 className="text-xl font-semibold border-black">{props.title}</h3>
     {props.dueDate &&<p> Due on:{props.dueDate}</p>}
      {props.completedon && <p> Completed On:{props.completedon}</p>}

      <p>Assignee: {props.assignee}</p>
    </div>
  )
}

export default TaskCard