import './App.css';
import Header from './Header';
import Profile from './Profile';
import Workexperience from './Workexperience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';

import 'bootstrap/dist/css/bootstrap.min.css';
import AdditionalCourse from './AdditionalCourse';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import Workshops from './Workshops';

// import Achievements from './Achievements';

function App() {
  return (
    <div className="App">
      
      <Header/>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
  <div id="About">
  
  <Profile/>
  <Education/>
  </div>
  
  <div id="Skills">
  <Skills/>
  
  
  </div>
  
  <div id="Projects">
  <Projects/>
    </div>
  
  <div id="Workexperience">
  <Workexperience/>
  </div>
 
  <div id="AdditionalCourse">
  <AdditionalCourse/>
  </div>
  <Workshops/>
  <div id="Footer">
   <Footer/> 
   </div>
  <ToastContainer />
 
</div>
    
    </div>
  );
}

export default App;
