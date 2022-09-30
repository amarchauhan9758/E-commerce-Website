import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classNames from 'classnames';

import countrydata from './countrydata.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';



function SignUppage() {
 
    const Navigate = useNavigate()
    const { handleSubmit, register, formState: { errors } } = useForm()
    const onSubmit = (data) => {
       console.log(data)

        // localStorage.setItem(data)
        
        
        Navigate('/login')
    

    }

    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');

    const handlecountyHandler = (e) => {
    const getcountryId = e.target.value;
     console.log(getcountryId)
    const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
        setState(getStatedata);
        setCountryid(getcountryId);
        console.log(getcountryId);
    }

    const handlestate = (e) => {
        const stateid = e.target.value;
        setStateid(stateid);

    }
   
    const notify = () => toast.error("Something Went Worng",{
        position:"top-center",
        
    });

   




    return (
        <>

            <div className='flex pt-12 '>
                <div className='w-1/2'>
                    <img src='https://cdn.pixabay.com/photo/2016/06/23/15/25/facebook-login-1475585_960_720.jpg' />
                </div>

                <div className='w-1/2'>
                    <div className=' flex    rounded-2xl'>

                        <div className=' w-1/2 text-center'>
                            <Link to='/login' >
                                <h1 className=' hover:bg-teal-300 hover:rounded-3xl py-2 hover:text-white font-semibold text-lg'> <span>Login</span></h1>
                            </Link>
                        </div>

                        <div className=' w-1/2 text-center'>
                            <h1 className='py-2 bg-teal-300 text-lg font-semibold text-white rounded-3xl'> <span>Sign Up</span></h1>
                        </div>
                    </div>


                    <form onSubmit={handleSubmit(onSubmit)} className=' p-8 border '>
                        <div className=' flex w-full gap-5  mb-2'>
                            <div className='w-1/2'>
                                <label className='font-semibold' htmlFor='name'>First Name*</label>
                                <br />
                                <input name='firstname'
                                 {...register("firstname", 
                                 {required: true,
                                  
                                
                                })} id='name' type='text' className={classNames("name w-full  border border-black px-2 py-2 rounded", { "is-invalid": false })}
                                />

                              <error>
                                {errors.firstname && (<small className='text-red-600 font-semibold'>Please enter valid first name</small>)}
                              </error>

                            </div>

                            <div className='w-1/2'>
                                <label className='font-semibold' htmlFor='lastname'>Last Name*</label>
                                <br />
                                <input id='lastname' type='text' className='name w-full border border-black px-2 py-2 rounded ' name='lastname' />
                            </div>

                        </div>
                        <div className='w-full mb-2'>
                            <label className='font-semibold' htmlFor='email'>Email*</label>
                            <br />
                            <input id='email' type='email' className='email w-full border border-black px-2 py-2 rounded ' name='email' {...register("email", { required: true,
                            pattern:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                             })} />
                             <error>

                            {errors.email?.type === 'required' && (<small className='text-red-600 font-semibold'> Please enter valid email</small>)}
                             </error>
                        </div>
                        <div className='w-full mb-2'>
                            <label className='font-semibold' htmlFor='address'>Address*</label>
                            <br />
                            <input id='address' type='address' className='address w-full border border-black px-2 py-2 rounded ' name='address' {...register("address", { required: true })} />
                            {errors.address?.type === 'required' && (<small className='text-red-600 font-semibold'>Please enter valid address </small>)}
                        </div>

                        <div className='flex mb-2  gap-5'>
                            <div className='w-1/2'>
                                <label className='font-semibold' htmlFor='country' >Country*</label>
                                <select  name='country' {...register('country', { required: true, })} className='w-full border border-black px-2 py-2 rounded' onChange={(e)=>handlecountyHandler(e)}>
                                    <option  value="">Select</option>
                                   {
                                    countrydata.map((getcountry, index)=>(
                                       <option value={getcountry.country_id}  key={index} >{getcountry.country_name}</option>  
                                    ))
                                   }

                                </select>
                                <error>
                                {errors.country?.type === 'required' && (<small className='text-red-600 font-semibold'>Please select your country</small>)}
                                </error>
                            </div>
                            <div className='w-1/2'>
                                <label className='font-semibold' htmlFor='state' >State*</label>

                                <select onChange={(e)=> handlestate(e)} className=" w-full border border-black px-2 py-2 rounded " name='states' {...register('states', { required:true })}>
                                    <option value="">Select</option>
                                    {
                                        state.map((element, index) => (
                                            <option value={element.state_id} key={index}>
                                                {element.state_name}</option>
                                        ))
                                    }
                                </select>

                                <error>
                                {errors.states?.type === 'required' && (<small className='text-red-600 font-semibold'>Please select your state</small>)}
                                </error>
                            </div>
                        </div>
                        <div className='flex mb-2  gap-5'>
                            <div className='w-1/2'>
                                <label className='font-semibold' htmlFor='dropdown' aria-controls='city'>City :</label>
                                <select className=" w-full border border-black px-2 py-2  rounded" name='city' {...register('city', { required: true })}>
                                    <option value="">Select</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Gurgoan">Gurgoan</option>
                                    <option value="Dehradoon">Dehradoon</option>
                                </select>
                                {errors.city?.type === 'required' && (<small className='text-red-600 font-semibold'>Please select your city</small>)}
                            </div>
                            <div className='w-1/2'>
                                <label className='font-semibold' >PinCode :</label>

                                <input id='pincode' type='text' className='w-full border-black border px-2 py-2 rounded ' placeholder='ex:324312' name='pincode' {...register('pincode', { required: true })} />
                                {errors.pincode?.type === 'required' && (<small className='text-red-600 font-semibold'>Pincode enter valid pincode</small>)}
                            </div>

                        </div>


                        <div className=' flex w-full   mb-2'>
                            <div className='w-1/3 rounded'>
                                <label className='font-semibold' htmlFor='dropdown' aria-controls='mobile'>Mobile Number:</label>
                                <select className="MoblieNumber w-full border border-black px-2 py-2 rounded" name='mobile'  {...register("mobile", { required: true })}>
                                    <option value="" >ISD Code</option>
                                    <option value="india">+91</option>
                                    <option value="usa">+11</option>
                                    <option value="uk">+32</option>
                                </select>
                                {errors.mobile?.type === 'required' && (<small className='text-red-600 font-semibold'>Please select country code</small>)}
                            </div>
                            <div className='w-full'>
                                <label className='font-semibold' htmlFor='number'></label>
                                <br />
                                <input placeholder='Mobile Number' id='number' type='numberic' className='number w-full border border-black px-2 py-2 rounded ' name='mobile' />
                            
                            </div>


                        </div>


                        <div className=' flex w-full gap-5  mb-2'>
                            <div className='w-1/2'>
                                <label className='font-semibold' htmlFor='name'>Fax:</label>
                                <br />
                                <input name='fax' id='fax' type='number' className=' w-full border-black border  rounded px-2 py-2' placeholder='0321-34523'
                            
                                />
                               
                            </div>

                            <div className='w-1/2'>
                                <label className='font-semibold' htmlFor='lastname'>Phone Number:</label>
                                <br />
                                <input name='phone_number' autoFocus id='Phone_nmber' type='text' className=' w-full border border-black px-2 py-2 ' placeholder='0532-122332'
                                />   
                            </div>

                        </div>

                        <div className='w-full mb-2'>
                            <label className='font-semibold' htmlFor='password'>Password:</label>
                            <br />
                            <input id='password' type='password' className='password w-full border rounded border-black px-2 py-2' name='password' {...register("password", {
                                required: "Must contain atleast one number and one uppercase and lowercase  letter and atleast 8 more character",
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 character"
                                },
                          })} />
                            {errors.password && (<small className='text-red-600 font-semibold'> {errors.password.message} </small>)}
                          
                        </div>

                        <div className='w-full mb-2'>
                            <label  className='font-semibold' htmlFor='password_repeat'>Confirm Password:</label>
                            <br />
                            <input  name='password_repeat' id='password_repeat' type='password'
                                className='w-full border border-black px-2 py-2 rounded '
                                {...register("password_repeat", {
                                    required: "Confirm Password shuld be same as password",
                                    minLength: {
                                        value: 8,
                                        message: "Password must have at least 8 character"
                                    },
                                })}
                            />
                            
                            {errors.password_repeat && (<small className='text-red-600 font-semibold'>{errors.password_repeat.message} </small>)}

                        </div>

                        <div className='mb-2'>

                            {/* <Link to='/login' > */}
                            <button  onClick={notify} className='bg-teal-300 hover:bg-teal-500 text-white font-semibold rounded-2xl w-full py-2 '>Sign up</button>
                            {/* </Link> */}
                            <ToastContainer/>
                        </div>
                    </form>
                </div>
            </div>

            <ToastContainer/>
        </>
    )
}

export default SignUppage
