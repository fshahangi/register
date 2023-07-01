import React, { useRef, useState } from 'react'

const Loginform = (props) => {
    const [checkbutton,setCheckbutton]=useState(true)
    const username = useRef();
    const password = useRef();

    
    const usernameHandler=(e)=>{
      if(username.current.value.length>=8 && password.current.value.length>=4){
        setCheckbutton(false)
      }else{
        setCheckbutton(true)
      }
    }
    const passwordHandler=(e)=>{
        if(username.current.value.length>=3 && password.current.value.length>=3){
          setCheckbutton(false)
        }else{
          setCheckbutton(true)
        }
      }
  
  
    const submitHandler = (e) => {
      e.preventDefault();
      props.onLogin(username.current.value, password.current.value);
    };
  return (
    <div>
         <h2 className='text-center mt-3'>Login Form </h2> 
         <p></p>
        <form onSubmit={submitHandler}>
        <div className='row justify-content-center'>Username: </div> <input
            type="text"
            id="username"
            ref={username}
            onChange={usernameHandler}
          />
          <div className='row justify-content-center'>Password : </div><input
            type="password"
            id="password"
            ref={password}
            onChange={passwordHandler}
           
            />
           <p></p>
           <div><button  disabled={checkbutton} className="btn btn-success" >Login</button></div>
           
      </form>
    </div>
  )
}

export default Loginform
