import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";
// interface Props {
//   tasks: TaskItem[];
// }
// interface State { }

const TaskList = (props: { tasks: TaskItem[], removeTaskCB: (id: number) => void }) => {
  const list = props.tasks.map((task, idx) => (<li className="list-none" key={task.id}>
    <Task
      key={idx}
      id={task.id}
      title={task.title}
      todoDescription={task.todoDescription}
      dueDate={task.dueDate}
    />
    <button onClick={() => props.removeTaskCB(task.id)} className="text-blue deleteTaskButton">Delete</button></li>
  ));
  return <>{list}</>;
};
export default TaskList;