
// import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import './App.css';
import { AsideComponent } from './AsideComponent/AsideComponent';
import Pizza from './components/Pizza';

function App() {

  let list = useSelector(state => state.list.value)
  
    let totalPrice = list?.reduce((a, b) => (a + b.price), 0)
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
        
        <p className='total'>Total prise : {totalPrice} AZN</p>
      </div>
     </div>
     
     
    </div>
  );
}

export default App;
