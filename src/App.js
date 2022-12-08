import VandamNavigator from './components/navigator';
import VandamLogo from './components/logoleft'
import HeroSection from './components/hero';
import StartPage from './components/profile';
import AboutMe from './components/about';
import SkillsPage from './components/skills';
import Footer from './components/footer';



import './App.css';

function App() {



  return (


    
    <div className="App">
      <VandamLogo/>
      <VandamNavigator/>

      <HeroSection/>


      <StartPage/>

      <AboutMe/>

      <SkillsPage/>

      <Footer/>

    </div>
  );
}

export default App;
