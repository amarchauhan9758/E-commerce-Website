import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import {signUpSchema} from '../Components/Schema/index'
import countrydata from './countrydata.json'
import { useNavigate , Link} from 'react-router-dom';


const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    country: parseInt(''),
    state :'',
    iso:'',
    mobile: "",
    password: "",
    confirm_password: "",
}
function LoginPage() {
    const [countryid, setCountryid] = useState('')
    const [state, setState] = useState([])
    // const [st_id, setST_id] = useState('')
    const Navigate = useNavigate()
    const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: initialValues,
        validationSchema:signUpSchema,
        onSubmit: (data,action) =>{ 
            Navigate('/login')
            console.log(data)
    
        localStorage.setItem("data", JSON.stringify({values}))
        action.resetForm()
        toast.success("Data Save in LocalStorage",{
            position:'top-center',
            theme:"colored"
            
        });
    }

        
       
        
    })
    

    const handlecountry = (e) => {
        const getcountryId = e.target.value;
        const getStatedata = countrydata.find(country => country.country_id == getcountryId).states;
        setState(getStatedata)
        setCountryid(getcountryId)
        console.log(getcountryId)
    }

    return (
        <>
            <div className="bg-white dark:bg-gray-900  p-12">
                <div className="flex justify-center h-screen">

                    <div className="image hidden bg-cover lg:block lg:w-2/3">
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h2 className="text-4xl font-bold text-white">Fashionova</h2>

                                <p className="max-w-xl mt-3 text-gray-300">Welcome to the Fashinova Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                            </div>
                        </div>
                    </div>



                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div className="flex-1">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Fashionova</h2>

                                <p className="mt-3 text-gray-500 dark:text-gray-300">Sign up to access your account</p>
                            </div>

                            <div className="mt-8">
                                <form onSubmit={handleSubmit} >
                                    <div>
                                        <label htmlFor="firstname" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                        <input
                                            type='firstname'
                                            name='firstname'
                                            autoComplete='off'
                                            placeholder='Enter your Firstname'
                                            id='firstname'
                                            value={values.firstname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        {errors.firstname && touched.firstname ? (<p className='text-red-600 font-normal text-xs'>{errors.firstname}</p>) : null}
                                    </div>

                                    {/* Lastname */}
                                    <div className='mt-5'>
                                        <label htmlFor="lastname" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                        <input
                                            type='lastname'
                                            name='lastname'
                                            autoComplete='off'
                                            placeholder='Enter your Lastname'
                                            id='lastname'
                                            value={values.lastname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        {errors.lastname && touched.lastname ? (<p className='text-red-600 font-normal text-xs'>{errors.lastname}</p>) : null}
                                    </div>


                                    {/* Email */}
                                    <div className='mt-5'>
                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                        <input
                                            type='email'
                                            name='email'
                                            autoComplete='off'
                                            placeholder='Enter your email'
                                            id='email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        {errors.email && touched.email ? (<p className='text-red-600 font-normal text-xs'>{errors.email}</p>) : null}
                                    </div>

                                    {/* Address */}
                                    <div className='mt-5'>
                                        <label htmlFor="address" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Address</label>
                                        <input
                                            type='address'
                                            name='address'
                                            autoComplete='off'
                                            placeholder='Enter your address'
                                            id='address'
                                            value={values.address}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        {errors.address && touched.address ? (<p className='text-red-600 font-normal text-xs'>{errors.address}</p>) : null}
                                    </div>

                                    <div className='flex gap-5  mt-5 items-center'>
                                        {/*-------------------------- Country------------------------------- */}

                                        <div className='w-1/2 mb-2'>
                                            <label htmlFor='country' className='block  text-sm text-gray-600 dark:text-gray-200' >Country</label>
                                            <select
                                            type='country'
                                            className="block w-full mt-2 px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            value={values.countryid}
                                            name='country'
                                            id='country'
                                            onChange={(e) =>handlecountry(e)} >
                                            <option value='' >Selected</option>
                                                {
                                                    countrydata.map((element, index) => (
                                                    <option value={element.country_id} key={index} >{element.country_name}</option>

                                                    ))
                                                }

                                            </select>
                                        </div>

                                        {/*-----------------------------------State---------------------------- */}

                                        <div className='w-1/2 mb-2'>
                                            <label htmlFor='state' className='block  text-sm text-gray-600 dark:text-gray-200' >State</label>
                                            <select className="block w-full px-4 py-2  mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                                                <option value='' >Selected</option>

                                                {
                                                    state.map((element, index) => (
                                                        <option value={element.state_id} key={index}>{element.state_name}</option>
                                                    ))

                                                }

                                            </select>
                                        </div>
                                    </div>

                                    {/*--------------------------- Mobile Number --------------------------*/}

                                    <label htmlFor='mobile' className='block  text-sm text-gray-600 dark:text-gray-200'>Mobile Number</label>
                                    <div className='flex'>
                                        <div className='w-1/3'>
                                            <input
                                                type='number'
                                                name='iso'
                                                autoComplete='off'
                                                placeholder='ISO Code'
                                                id='iso'
                                                value={values.iso}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                            {errors.iso && touched.iso ? (<p className='text-red-600 font-normal text-xs'>{errors.iso}</p>) : null}
                                        </div>
                                        <div className='w-full'>
                                            <input
                                                type='mobile'
                                                name='mobile'
                                                autoComplete='off'
                                                placeholder='Enter your mobile'
                                                id='mobile'
                                                value={values.mobile}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                            {errors.mobile && touched.mobile ? (<p className='text-red-600 font-normal text-xs'>{errors.mobile}</p>) : null}
                                        </div>

                                    </div>



                                    {/*--------------------------- Password------------------------- */}
                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>

                                        </div>

                                        <input
                                            type="password"
                                            name="password"
                                              value={values.password}
                                              onBlur={handleBlur}
                                              onChange={handleChange}
                                            id="password"
                                            placeholder="Your Password"
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none ,focus:ring focus:ring-opacity-40" />
                                        {errors.password && touched.password ? (<p className='text-red-600 font-normal text-xs'>{errors.password}</p>) : null}

                                    </div>
                                    {/*---------------------------- Confirm Password------------------------ */}
                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="confirm_password" className="text-sm text-gray-600 dark:text-gray-200">Confirm Password</label>
                                            <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                        </div>

                                        <input
                                            type="password"
                                            name="confirm_password"
                                              value={values.confirm_password}
                                              onBlur={handleBlur}
                                              onChange={handleChange}
                                            id="confirm_password"
                                            placeholder="Confirm Password"
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none ,focus:ring focus:ring-opacity-40" />
                                        {errors.confirm_password && touched.confirm_password ? (<p className='text-red-600 font-normal text-xs'>{errors.confirm_password}</p>) : null}

                                    </div>

                                    <div className="mt-6">
                                        {/* <Link to='/login'> */}
                                        <button
                                        
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Sign in
                                        </button>

                                        {/* </Link>      */}
                                        <ToastContainer />
                                    </div>

                                </form>

                                <p className="mt-6 text-sm text-center text-gray-400">Already account LogIn? <a href="/" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign In</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginPage
