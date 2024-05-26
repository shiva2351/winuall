
import './App.css';
import Home from './components/Home';
import About from './components/About';

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
