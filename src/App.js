import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import ProjectList from './Components/LandingPage/ProjectsList';
import ProjectDetails from './Components/LandingPage/ProjectDetails';
import SubMenu from './Components/Navbar/SubMenu';
import Verticalbtn from './Components/Navbar/Verticalbuttons'
function App() {
  return (
    <div className="App">
      
        <div className='intial-data'>
        <div><Navbar/></div>
        <div><SubMenu/></div>
        <div><Verticalbtn/></div>
        <div><ProjectList/></div>
        <div><ProjectDetails/></div>
        <footer>
          <div className="footer-section">
            <div className='footer-text'>2022©<span className='keenthemes-txt'>keenThemes</span></div>
            <div className='footer-sub-text'>
              <div className='footer-sub-text-title'>About</div>
              <div className='footer-sub-text-title'>Support</div>
              <div className='footer-sub-text-title'>Purchase</div>
            </div>
          </div>
        </footer>

        </div>
    
      
    </div>
  );
}

export default App;
