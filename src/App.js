import logo from './logo.svg';
import './App.css';
import Welcome from './component/welcome/welcome';

function App() {
  return (
    <div className="App">
      <Welcome name="Pierre" age={85}></Welcome>
      <Welcome name="Pierre"></Welcome>
    </div>
  );
}

export default App;
