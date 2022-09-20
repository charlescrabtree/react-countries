import './App.css';
import Main from '../src/components/Main/Main.js';
import background from './earth-background.jpg';


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <h1>Countries.. and... their... Flags</h1>
      <Main />
    </div>
  );
}

export default App;
