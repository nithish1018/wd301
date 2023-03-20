import TaskCard from './TaskCard';
import './App.css';
import './TaskCard.css'


function App() {
  return (
    <div>
      <h1 className='px-3 text-2xl font-semibold flex justify-center'> Smarter Tasks</h1>
      <p className='px-3 text-xl flex justify-center'> Project : Graduation Final Year Project (Revamp College Website)</p>
    <div className='flex border-black py-6 justify-center'>
      <div className="bg-gray-200 text-black border-2 border-black rounded-lg p-4 m-2" >
        <h1 className="text-xl font-bold px-20 items-center" > Pending</h1>
        <TaskCard title="Build The Website With Static Content" dueDate='10th April' assignee='Rohit S'  ></TaskCard>
        <TaskCard title="Add a Blog" dueDate='22nd March' assignee='Rohit M'  ></TaskCard>
        <h4 className='bg-gray-300 rounded px-3'> + New Task</h4>
      </div>
      <div className="bg-gray-200 text-black border-2 border-black rounded-lg p-4 m-2">
        <h1 className="text-xl font-bold px-20 " >Done</h1>
        <TaskCard title="Design The Mockup" completedon='10th April'assignee='Rohit M'></TaskCard>
        <TaskCard title="Get Approval From Principal" completedon='20th April'assignee='Ajay S'></TaskCard>

      </div>
    </div>
    </div>
  );
}

export default App;
