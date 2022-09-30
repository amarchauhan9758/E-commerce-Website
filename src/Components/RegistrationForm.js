import React, { useEffect, useState } from 'react'
import './RegistationStyle.css'
import { ToastContainer, toast } from 'react-toastify'
import { useFormik } from 'formik'
import { signUpSchema } from './Schema/index'
import { useNavigate , Link } from 'react-router-dom';


const initialValues = {
    password: '  ',
    email: '  ',
}


function RegistrationForm() {
    const Navigate = useNavigate()
    // const { values, touched, handleBlur, handleSubmit, handleChange, errors } = useFormik({
    //     initialValues: initialValues,
    //     validationSchema: signUpSchema,
    //     onSubmit:(data,action) =>{
    
    //         Navigate('/productItem')
    //         console.log(data)
    //         console.log("hello amar")

    //         localStorage.setItem("data", JSON.stringify({ values }))
    //         action.resetForm()
    //         toast.success("Login Successfully", {
    //             position: "top-center"
    //         })
    //     }

    // })

 
    

    return (
        <>

            <div className="bg-white dark:bg-gray-900 p-12">
                <div className="flex justify-center h-screen">

                    <div className="image hidden bg-cover lg:block lg:w-2/3">
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h2 className="text-4xl font-bold text-white">Fashionova</h2>

                                <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                            </div>
                        </div>
                    </div>



                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div className="flex-1">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Fashionova</h2>

                                <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                            </div>

                            <div className="mt-8">
                                <form>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                        <input
                                            type='email'
                                            name='email'
                                            autoComplete='off'
                                            placeholder='Enter your email'
                                            id='email'
                                            // value={initialValues.email}
                                            // onChange={(e)=>e.target.value}
                                            // onBlur={handleBlur}
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        {/* {errors.email && touched.email ? (<p className='text-red-600 font-bold text-xs'>{errors.email}</p>) : null} */}
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                            <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                        </div>

                                        <input
                                            type="password"
                                            name="password"
                                            // value={initialValues.password}
                                            // // onBlur={handleBlur}
                                            // // onChange={handleChange}
                                            id="password"
                                            placeholder="Your Password"
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none ,focus:ring focus:ring-opacity-40" />
                                        {/* {errors.password && touched.password ? (<p className='text-red-600 font-bold text-xs'>{errors.password}</p>) : null} */}

                                    </div>

                                    <div className="mt-6">
                                         <Link to={Navigate('/productItem')} >
                                        <button
                                        type="submit"
                                        
                                            
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">

                                            Sign up
                                        </button>

                                         </Link>
                                        <ToastContainer />
                                    </div>

                                </form>

                                <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="/signup" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrationForm
