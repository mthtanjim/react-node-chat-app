import './App.css';
import io from 'socket.io-client'

const socket = io.connect("http://localhost:4000")

function App() {
  return (
    <div className="App">
      <h1>Emnpty Apps for node chat applicaiton</h1>
    </div>
  );
}

export default App;
