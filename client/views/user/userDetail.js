import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { findOneUser } from '../action/userAction'
import Head3 from '../../components/layout/Head3'
import Loading from '../../components/layout/Loading'
export default function userDetail() {
    const dispatch = useDispatch()
    const userListOne = useSelector(state => state.userListOne)
    const { user } = userListOne
    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin
    const [isLoading, SetIsLoading] = useState(true);
    if (isLoading) {
        setTimeout(() => {
            SetIsLoading(false);
        }, 7000);
    }
    useEffect(() => {
        dispatch(findOneUser(userInfo.users.user_id))
    }, [dispatch])
    return (
        <div>
            <div className="max-h-screen">
                {isLoading && <Loading />}
            </div>
            <Head3 />
            <div className="bg-fixed font-sans max-h-100hv antialiased text-gray-900 leading-normal tracking-wider " style={{ backgroundImage: 'url("https://source.unsplash.com/1L71sPT5XKc")' }}>
                <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" />
                <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                    {user &&
                        <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
                            <div className="p-4 md:p-12 text-center lg:text-left">
                                <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: `url("/api/users/photo/${user.user_id}/${user.user_avatar}")` }} />
                                <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user.user_name}</h1>
                                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-indigo-500 opacity-25" />
                                <p class="pt-4 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-current text-indigo-700 pr-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>{user.user_birthdate}</p>
                                <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-current text-indigo-700 pr-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>{user.user_gender}</p>
                                <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-current text-indigo-700 pr-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
                                </svg>{user.user_type}</p>
                                <a class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start" href={`mailto:${user.user_email}`}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 fill-current text-indigo-700 pr-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>{user.user_email}</a>
                                <p className="pt-5 text-sm">Totally optional short description about yourself, what you do and so on.</p>
                                <div className="flex justify-center pt-12">
                                    <Link className="pr-2" to="/user_update/">
                                        <button class="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-full">
                                            Update Profile
                                        </button>
                                    </Link>
                                    <Link className="pl-2" to="/user_update_pass/">
                                        <button class="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-full">
                                            Change Password
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="w-full lg:w-2/5">
                        <img src={user && `/api/users/photo/` + user.user_id + `/` + user.user_avatar} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
                    </div>
                </div>
            </div>
        </div>
    )
}
