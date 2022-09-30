import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'


function SignInpage() {
    const  Navigate =useNavigate()
    const {handleSubmit,register, formState: { errors }} = useForm()
     const  onSubmit= ()=>{
        toast.success("Successfully",{
            position:"top-center",
            theme:'dark'
        })
         Navigate('/productItem')
     }
    
  
         
     console.log(errors)
  return (
    <>
      <div className='flex pt-12 '>
                <div className='w-1/2'>
                    <img src='https://cdn.pixabay.com/photo/2016/06/23/15/25/facebook-login-1475585_960_720.jpg' />
                </div>

                <div className='w-1/2'>
                    <div className=' flex justify-center  item-center  rounded-2xl'>

                     <div className=' w-1/2 text-center'>
                     <Link to='/login' >
                     <h1 className='  py-2 bg-teal-300 text-lg font-semibold text-white rounded-3xl'> <span>Login</span></h1> 
                     </Link>
                     </div>

                     <div className=' w-1/2 text-center'>
                      <h1 className='font-semibold text-lg py-2'> <span>Sign Up</span></h1> 
                     </div>
                    </div>

                 
                    <form onSubmit={handleSubmit(onSubmit)} className=' p-12  '>
                       
                        <div className='w-full mb-2'>
                            <label htmlFor='email'>Email:</label>
                            <br />
                            <input   id='email' type='email' className='email w-full border border-black px-2 py-2 rounded ' name='email' {...register("email", { required:true })} />
                            {errors.email?.type === 'required' &&  (<small className='text-red-600 font-semibold'> Email is required </small>) }
                        </div>
                      

                        <div className='w-full mb-2'>
                            <label htmlFor='password'>Password:</label>
                            <br />
                            <input   id='password' type='password' className='password w-full border rounded border-black px-2 py-2 ' name='password' {...register("password", { 
                                required:"You must have at least 8 character",
                                minLength:{
                                    value:8,
                                    message:"Password must have at least 8 character"
                                },
                                pattern:{

                                }
                            
                             })} />
                            {errors.password &&  (<small className='text-red-600 font-semibold'> {errors.password.message} </small>) }
                        </div>

                        

                    <div className='mb-2'>

                          
                        <button type='submit' className='bg-teal-300 text-white font-semibold rounded-2xl w-full py-2 '>Sign up</button>
                      
                    </div>
                    </form>
                </div>
            </div>
            <ToastContainer/>
    </>
  )
}

export default SignInpage
