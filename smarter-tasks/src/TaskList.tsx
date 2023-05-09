import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[];
}
interface State {}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      title={task.title}
      todoDescription={task.todoDescription}
      dueDate={task.dueDate}
    />
  ));
  return <>{list}</>;
};
export default TaskList;