
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm/>
      <TaskList />
    </div>
  );
}

export default App;
