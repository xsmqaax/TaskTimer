import './App.css';
import { MainContainer } from './Components/MainContainer';
import { NewTask } from './Components/NewTask';
import { Welcoming } from './Components/Welcoming';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Welcoming />
    </div>
  );
}

export default App;
