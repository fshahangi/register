import React, { useState } from 'react'
import Addtobasket from './Addtobasket'
import Priceproducts from './Priceproducts'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ItemCard = (props) => {
 
  return (
    
      <div className="card" >
            <div  className="card p-0 overflow-hidden h-100 shadow" >
              <img src={props.img} className="card-img-top img-fluid" />
              <div  className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <Priceproducts price={props.price}/>
                <p className="card-text">{props.desc}</p>

                {/* <button className="btn btn-success" onClick={()=>props.handleClick(props)} >Add to cart</button> */}
                <Addtobasket  handleClickadd={props.handleClickadd} handleClickminus={props.handleClickminus}/> 
            </div>
         </div>
      </div>
  
 
  )
}

export default ItemCard
