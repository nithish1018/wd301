import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
  }

interface TaskFormState {
    title: string;
    todoDescription:string;
    dueDate:string;
  }


class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    inputRef = React.createRef<HTMLInputElement>();
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
          title: "",
          todoDescription:"",
          dueDate:""
        }
      }
      addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (this.state.title && this.state.dueDate) {
        const newTask = {
          title: this.state.title,
          todoDescription:this.state.todoDescription,
          dueDate:this.state.dueDate,
        }
        this.props.addTask(newTask);
        this.setState({ title: "", todoDescription: "", dueDate: "" });

      }

      };
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ todoDescription: event.target.value });
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };
 
  
  render(){
    return (
      <form onSubmit={this.addTask}>
        <input id="todoTitle" type="text" value={this.state.title} onChange={this.titleChanged}/>
        <input type="text" id="todoDescription" value={this.state.todoDescription} onChange={this.descriptionChanged}/>
        <input type="date" id="todoDueDate" value={this.state.dueDate} onChange={this.dueDateChanged}/>
        <button id="addTaskButton" type="submit">Add item</button>
      </form>
    )
  }

  
}
 export default TaskForm;