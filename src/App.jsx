import { useState,useEffect,useRef } from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Centertext from './centext.jsx'

import Background2 from './background2.jsx'
import './background2.css'
import './card.css'
import Model from "./model.jsx"




import './App.css'
import './signup.css'
import Background from './background.jsx'
import Centertext2 from './Centertext2.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  const handleLoginStatusChange = (status) => {
    setIsLoggedIn(status);
  };
  const [currentIndex, setCurrentIndex] = useState(0);




  


  return (
    <>

      
       

      <Header onLoginStatusChange={handleLoginStatusChange} />
    { !isLoggedIn ? <Background/> : <Background2/> }
      
      <div className='modell'>
      <Model/>

      </div>
      {!isLoggedIn ? <Centertext /> : <Centertext2/> }
      
      {  <Footer />}
       
    </>
  );
}

export default App
