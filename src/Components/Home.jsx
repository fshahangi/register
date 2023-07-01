import React, { useState } from 'react'
import ItemCard from './ItemCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Searchform from './Searchform';



const Home = (props) => {
   const [cart,setCart]=useState([]);
   const [count, setCount] = useState(0);
   const [searchproducts , setSearchproducts]=useState('')
   

 const productlist=  props.productdata.filter((item)=>{
  return searchproducts.toLowerCase()==='' ? item :item.desc.toLowerCase().includes(searchproducts)
})

  const handleClickadd=(item)=>{
    setCount(count+1)
    cart.push(item);
    console.log(item)
  }
  const handleClickminus=(item)=>{
    setCount(count-1)
    cart.pop(item);
    console.log(item)
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      slidesToSlide: 1 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1 
    },
    car: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1
    },
    sport: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  
  const dosearch=(search)=>{
    if (search!==''){
       setSearchproducts(search);
       console.log(searchproducts)
   }else{
       setSearchproducts(search);
   }
  }

 
   
  return (
    <div >
      <Searchform searchvar={dosearch} />
      <h1 className='text-center mt-3'>All Items {count}</h1> 
     
        <section className='py-4 countainer'>
            <div className='row justify-content-center'>
             
             <Carousel responsive={responsive}> 
                {      
                
                   searchproducts!==null ?
                     
                        props.productdata && productlist.map((item,index)=>{
                            return(
                                <ItemCard title={item.title} img={item.img} desc={item.desc} price={item.price} key={index} handleClickadd={handleClickadd} handleClickminus={handleClickminus}/>
                                ) 
                          })
                   :
                        props.productdata && props.productdata.map((item,index)=>{
                          return(
                              <ItemCard title={item.title} img={item.img} desc={item.desc} price={item.price} key={index} handleClickadd={handleClickadd} handleClickminus={handleClickminus}/>
                              ) 
                        })
                
             }
                </Carousel>
                </div>
        </section> 

    </div>
  )
}

export default Home
