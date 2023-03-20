
// import { useDispatch } from 'react-redux';

import './App.css';
import { AsideComponent } from './AsideComponent/AsideComponent';
import Pizza from './components/Pizza';

function App() {


  return (
   
    <div>
      <div className='heder'>
        <img src='https://www.papajohns.az/img/content/pj_logo_web_new.png' alt='sd'/>
        <a href='##'>Pizzalar</a>
        <a href='##'> Kombo menyular</a>
        <a href='##'> Salatlar</a>
        <a href='##'> Qəlyanaltılar</a>
        <a href='##'>Əlaqə</a>
      </div>
     <div className="App">
       <div className='secondDiv'><Pizza /></div>
  
      <div className='AsideComponent'>
          
        <AsideComponent/>
        <p>Total prise :</p>
      </div>
     </div>
     
     
    </div>
  );
}

export default App;
