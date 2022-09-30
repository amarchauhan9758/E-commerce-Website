import React,{useState,useEffect} from 'react'
import axios from 'axios';
import{Link} from 'react-router-dom'
import Navbar from './Navbar'
import {useStore} from '../Components/Store'
import { ToastContainer, toast } from 'react-toastify';





function ProductViewPage() {
    const {additemtoCard, card} = useStore()
    const [data, setData] = useState([]);
   const [isloading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(resp => {
        console.log(resp)
        setData(resp.data)
        setLoading(false)
        
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
    
  }, [0])

  const toastifyHandler=()=>{
         toast.success("Add to Card",{
          position:'top-center'
         })
  }

 

  return (
    <>
    <Navbar/>
   
    {
        isloading? <div className='flex justify-center  items-center my-[12rem] text-6xl font-semibold  text-purple-500 animate-ping'> <h1>Ruko Jara sabar karo....</h1> </div>: <div className='grid grid-cols-4  gap-5 px-12'>
        {
          
          data.map((item, index) => {
            return (
              <div key={index} className='   py-5 card shadow-sm   '>
                <div className='FirstComponent  w-25 hover:ease-in-out duration-300    shadow-lg rounded-lg  h-full'>
               
                    <img className='p-5 w-full h-[22rem] ' src={item.image} alt='img' />

                    <div className='text-left  px-5'>
                      <span className='text-xl   text-gray-900'>{item.title.slice(0,25)}</span>
                      <br />
                      <span className='text-xl   text-gray-500'>${item.price}</span>
                    </div>
                 


                  
                    <div className='pt-5'>
                      <button   onClick={()=> {additemtoCard(item); toastifyHandler()}} type='button'  className='bg-black w-full text-white font-semibold px-5 py-4 rounded hover:bg-purple-900'>Add to Cart</button>
                      
                    </div>
                 

                </div>
              </div>
           
            )
          })
        }
      </div>
     
      }

   
      <ToastContainer/>
    </>
  )
}

export default ProductViewPage
