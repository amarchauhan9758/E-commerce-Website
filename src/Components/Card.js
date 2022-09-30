import React from 'react'
import Navbar from './Navbar'
import PaymentIcon from '@mui/icons-material/Payment';
import { useNavigate, Link } from 'react-router-dom';
import { useStore } from './Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Card() {
    const navagation = useNavigate()
    const { card, incrementQty, decrementQty, removeItemFromCard } = useStore()
    let totalPrice = 0;
    console.log(card)


    return (
        <>



            <Navbar />


            {
                card.length <= 0 ? <div className=' text-center text-5xl text-teal-900 font-serif my-32'>
                <span className='hover:scale-175    text-6xl  '>  <ShoppingCartIcon className='text-5xl h-[12rem]'
                /> </span>
                    <h1> Your Card is Empty </h1>
                        
                        
                        <button onClick={()=>navagation('/productItem')} className=' text-white  mt-12 rounded-3xl text-2xl font-semibold  hover:ring-4 py-2 px-8 bg-purple-700 hover:bg-purple-500 hover:outline-purple-600' >Continue Shopping</button>
                  
                </div> :<div className='grid grid-cols-1 mx-auto pt-20  w-1/2 '>
                        <div className='text-center mb-5'>
                            <h1 className='text-4xl font-semibold '>Shopping card</h1>
                        </div>
                        <hr />

                        {

                            card.map((element, index) => {
                                totalPrice += element.price * element.qty
                                return (<React.Fragment key={index}>
                                    <div className='flex justify-between px-4  py-5  text-lg'>

                                        <h1 className='text-gray-700'>{element.title.slice(0, 13)}</h1>
                                        <h1 className='text-gray-700'>  ${element.price * element.qty}</h1>
                                    </div>

                                    <div className='w-1/4 flex items-center '>
                                        <img className='p-5' src={element.image} alt='img' />
                                    </div>




                                    <div className='flex justify-between mb-5'>
                                        <button type='button' className=' px-2 py-1 rounded  text-gray-700' >Qty:  <span onClick={() => incrementQty(element)} className='bg-zinc-200 rounded-full  text-lg font-bold px-2'>+</span> <span className='text-lg font-semibold'> {element.qty} </span> <span onClick={() => decrementQty(element)} className='bg-zinc-300 text-lg font-bold rounded-full px-2'>-</span> </button>
                                        <button onClick={()=>removeItemFromCard(element.id)} type='button' className=' bg-red-600 text-white px-2 py-1 rounded  ' >Remove Item </button>

                                    </div>

                                    <hr />
                                </React.Fragment>)
                            })
                        }




                        <div className=' py-12'>

                            <div className='flex justify-between items-center'>
                                <div className='text-left'>
                                    <h1 className='text-gray-700 font-semibold text-lg'>Subtotal</h1>
                                    <h1 className='text-xs'>Shipping and taxes will be calculated at checkout.</h1>

                                </div>

                                <div>

                                    <h1 className='text-gray-700 font-semibold'>${totalPrice}</h1>
                                </div>
                            </div>

                            <div className='m-5  hover:duration-500 hover:ease-in-out hover:scale-105 w-full mx-auto '>
                                <div className='py-8'>
                                   


                                  

                                    <div className='bg-teal-900 hover:bg-purple-800 border text-center py-2 rounded-md mt-2  mx-12'>
                                        <button className='text-white text-center font-semibold'   onClick={()=>navagation('/checkout')} >Continue</button>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>

                    </div>

            }

        </>
    )



    return {

    }

}

export default Card
