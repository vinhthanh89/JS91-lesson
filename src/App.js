import logo from './logo.svg';
import './App.css';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Profile />
      </header>
    </div>
  );
}

export default App;
