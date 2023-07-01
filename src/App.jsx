import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dataform from './Components/Dataform'
import Addtobasket from './Components/Addtobasket'
import Loginform from './Components/Loginform'
import Welcomepage from './Components/Welcomepage'
import MainHeader from './Components/MainHeader'

function App() {
  const [checkuser,setCheckuser]=useState(false)
  
  const loginHandler = (username, password) => {
    if(username==='ali' && password==='123')
    setCheckuser(true);
    else
    alert('نام کاربری یا رمز عبور اشتباه است')
  };

  const logoutHandler = () => {
    setCheckuser(false);
  };

  return (
    <>
    <MainHeader isAuthenticated={checkuser} onLogout={logoutHandler} />
     {!checkuser && <Loginform onLogin={loginHandler} />}
        {checkuser && <Welcomepage onlogout={logoutHandler}/>}
  
   
      
    </>
  )
}

export default App
