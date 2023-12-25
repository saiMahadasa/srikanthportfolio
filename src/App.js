import './App.css';
import { CertificationContextProvider } from './CustomizedTimeline/CertificationContext';
import MyStepper from './CustomizedTimeline/MyStepper';
import CertificationJourney from './CustomizedTimeline/MyStepper';
import Aboutme from './PortfolioProject/About/Aboutme';
import Contact from './PortfolioProject/Contact/Contact';
import Copyright from './PortfolioProject/Copyright/Copyright';
import Experience from './PortfolioProject/Experience/Experience';
import Profile from './PortfolioProject/Home/Profile';
import Resume from './PortfolioProject/Resume/Resume';

function App() {
  const steps = [
    { title: 'Step 1', description: 'Description for Step 1' },
    { title: 'Step 2', description: 'Description for Step 2' },
    // Add more steps as needed
  ];
  return (
    <div className="App">
     <Profile/>
     
     
        {/* <MyStepper/> */}
     
   
     <Aboutme/>
     <Resume/>
     {/* <Experience/> */}
     <Contact/>
     <Copyright/>
    </div>
  );
}

export default App;
