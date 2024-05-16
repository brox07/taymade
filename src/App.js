import logo from './logo.svg';
import './App.css';
import MainNavbar from './components/MainNavbar';

function App() {
  return (
    <div className="App">
      <MainNavbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
