import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { signup } from '../action/userAction'
import { useHistory, useLocation, Link } from "react-router-dom";
import Errorhendling from '../../components/layout/Errorhendling';
import Loading from '../../components/layout/Loading'
export default function userRegister() {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [iserror, setIserror] = useState("")
    const [isLoading, SetIsLoading] = useState(true);
    if (isLoading) {
        setTimeout(() => {
            SetIsLoading(false);
        }, 3000);
    }
    const [values, setValues] = useState({
        user_email: undefined,
        user_password: undefined,
        user_name: undefined,
        user_type: "user"
    });
    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    const userSingup = useSelector((state) => state.userSignup)
    const { userRegis, error2 } = userSingup

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(values));
    }

    useEffect(() => {
        if (userRegis) {
            const redirect = location.search
                ? new URLSearchParams(location.search).get("redirect")
                : "/signin";
            history.push(redirect);

        }
    }, [userRegis, history])
    if (error2 && !iserror) {
        setIserror(error2)
    }
    return (
        <div>
            <div className="max-h-screen">
                {isLoading && <Loading />}
            </div>
            <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                <div className="hidden bg-cover lg:block lg:w-1/2">
                    <img

                        src="https://i.pinimg.com/originals/c2/5b/9d/c25b9dd1ae1888b1714f8b2c0888a50c.jpg" />
                </div>


                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="pb-2">
                        {iserror && <Errorhendling />}
                    </div>
                    <Link to="/">
                        <a>
                            <svg className="text-gray-500 border-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                            </svg>
                        </a>
                    </Link>
                    <a className="place-content-center flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                        <svg className="w-10 h-10 mr-1 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                        </svg>
                        COMPANY
                    </a>

                    <p className="text-xl text-center text-gray-600 dark:text-gray-200">Welcome back!</p>

                    <form method="POST" action="#" className="p-0" onSubmit={onSubmit}>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Email Address</label>
                            <input id="user_email" name="user_email" placeholder="Email" value={values.user_email} onChange={handleChange("user_email")} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" required />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >User Name</label>
                            <input placeholder="Name" onChange={handleChange("user_name")} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text" required></input>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Password</label>
                            </div>

                            <input id="user_password" name="user_password" placeholder="Password" value={values.user_password} onChange={handleChange("user_password")} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" required />
                        </div>
                        <div className="mt-8">
                            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                        <a className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or log in</a>

                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                    <Link to="/signin/">
                        <div className="mt-3">
                            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Login
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
