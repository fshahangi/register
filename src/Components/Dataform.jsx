import React, { useState } from 'react'
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import img5 from './img/img5.png';
import img6 from './img/img6.png';
import img7 from './img/img7.png';
import img8 from './img/img8.png';
import img9 from './img/img9.png';
import img10 from './img/img10.png';
import Home from './Home';



const Dataform = () => {
    const [productdata,setProductdata]=useState([
        {id:1,img:img1,title:'Gajet', desc:'Gajet',price:450},
        {id:2,img:img2,title:'Shoes',desc:'Shoes',price:150},
        {id:3,img:img3,title:'Sports',desc:'Sports',price:7850},
        {id:4,img:img4,title:'Smart Home',desc:'Smart Home',price:1250},
        {id:5,img:img5,title:'Stationery',desc:'Stationery',price:250},
        {id:6,img:img6,title:'Tools',desc:'Tools',price:4350},
        {id:7,img:img7,title:'Cell phones',desc:'Cell phones',price:9000},
        {id:8,img:img8,title:'Nutrition',desc:'Nutrition',price:1200},
        {id:9,img:img9,title:'Toys',desc:'Toys',price:8700},
        {id:10,img:img10,title:'Cars',desc:'Cars',price:35000},
      ]) 
      

  return (
    <div>
      <Home productdata={productdata}  />
    </div>
  )
}

export default Dataform
