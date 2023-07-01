import React, { useState } from 'react'
import Addminus from './Addminus'

const Addtobasket = (props) => {
   const [viewaddcart , setViewaddcart]= useState(0)

    const viewHandler=()=>{    

       if (viewaddcart!==0){
            return(
              <>
              <Addminus  handleClickadd={props.handleClickadd} handleClickminus={props.handleClickminus}/>
              </>
            )
       }else{
         return(
          <>
          <button className="btn btn-success" onClick={()=>{props.handleClickadd(props); setViewaddcart(1) }} > Add to cart</button>
          </>
         )
       }
    }
  return (
    <div>
       {viewHandler()}
       {/* <button className="btn btn-success" onClick={()=>
        
        {props.handleClick(props)}
        setViewaddcart(true)
      }

        >
        Add to cart
        </button> */}
    </div>
  )
}

export default Addtobasket
