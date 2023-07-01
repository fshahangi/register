import React, { useRef, useState } from 'react'

const Searchform = (props) => {
    const search=useRef();
    
    const searchHandler=(e)=>{
        
        //const serach=e.target.lenght;
         //if (serach.lenght>=3){console.log(3)}
         
         //console.log(e.target.value)
         props.searchvar(e.target.value)
    }
  return (
    <div>
      <div className='row justify-content-center' >Search: </div> <input
            type="text"
            id="Search"
            ref={search}
            placeholder='Searching'
            onChange={searchHandler}
          />
    </div>
  )
}

export default Searchform
