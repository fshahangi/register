import React, { useState } from 'react'

const Addminus = (props) => {

    const [addproduct , setAddproduct]= useState(1)

    const addcart=()=>{
        props.handleClickadd(props);
        setAddproduct(addproduct+1)
      }
      const minuscart=()=>{
        props.handleClickminus(props);
        setAddproduct(addproduct-1)

      }
  return (
    <div>
      <button className="btn btn-info ms-2" onClick={minuscart}> - </button>
      <span>{addproduct}</span>
      <button className="btn btn-info ms-2" onClick={addcart}> + </button>
    </div>
  )
}

export default Addminus
