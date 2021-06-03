import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Other from './components/Other'
import Notif from './components/Notif'
import ben10 from '../src/img/CartoonNetwork_Ben10_462x386.jpg'
import okko from '../src/img/CartoonNetwork_OKKO_462x386.jpg'
import stevenuniverse from '../src/img/CartoonNetwork_StevenUniverse_462x386.jpg'
import webarebears from '../src/img/CartoonNetwork_WeBareBears_462x3861.jpg'
import powerpuff from '../src/img/CartoonNetwork_ThePowerPuffGirls_462x386.jpg'
import regshow from '../src/img/CartoonNetwork_TheRegularShow_462x386.jpg'
import advtime from '../src/img/CartoonNetwork_AdventureTime_462x386.jpg'
import appleonion from '../src/img/AppleAndOnion.jpg'
import maomao from '../src/img/MaoMao.jpg'
import gumball from '../src/img/AWOG.jpg'
import disabled from '../src/img/2200497.jpg'
function App() {
   const data=[{
          name:'Ben 10',
          time:'Weekdays 8:30pm ET/PT',
          img:ben10
      },
      {
          name:`O.K K.O Let's be heroes`,
          time:'weekends 3:30pm ET/PT',
          img:okko
      },
      {
        name:null,
        time:null,
        img:disabled
      },
      {
          name:`steven universe`,
          time:'Weekdays 11:30am ET/PT',
          img:stevenuniverse
      },
      {
          name:`we bare bears`,
          time:'Weekdays 6:00pm ET/PT',
          img:webarebears
      },
      {
          name:`the powerpuff girls`,
          time:'everyday 7:00am ET/PT',
          img:powerpuff
      },
      {
          name:`the regular show`,
          time:'weekends 7:00pm ET/PT',
          img:regshow
      },
      {
          name:`adventure time`,
          time:'weekends noon ET/PT',
          img:advtime
      },
      {
          name:`apple and onion`,
          time:'weekends 1:30pm ET/PT',
          img:appleonion
      },
      {
          name:`mao mao:heroes of pure heart`,
          time:'weekends 10:00am ET/PT',
          img:maomao
      },
      {
          name:`the amazing world of gumball`,
          time:'Weekdays 7:00pm ET/PT',
          img:gumball
      },
  ]
  
  
  return (
    <div>
      <Notif/>
      <Navbar/>
      <Home data={data}/>
      <About/>
      <Footer/>
      <Other/>
    </div>
  );
}

export default App;
