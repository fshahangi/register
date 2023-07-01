import React from 'react'

const MainHeader = (props) => {
  console.log(!props.isAuthenticated)
  return (
    <div>
       <header >

        { !props.isAuthenticated }
           <p ><button onClick={props.onLogout}  className="btn btn-success">خروج از سیستم </button></p>
    </header>
    </div>
  )
}

export default MainHeader
