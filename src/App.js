import logo from './logo.svg';
import './App.css';
import MainNavbar from './components/MainNavbar';
import LandingCarousel from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <MainNavbar/>
      <LandingCarousel/>
    </div>
  );
}

export default App;
