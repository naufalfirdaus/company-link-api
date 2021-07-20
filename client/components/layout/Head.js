import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findOneUser } from '../../views/action/userAction'

export default function Head() {
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin
    const userListOne = useSelector(state => state.userListOne)
    const { user } = userListOne
    if (userInfo) {
        useEffect(() => {
            dispatch(findOneUser(userInfo.users.user_id))
        }, [dispatch])
    }
    const redirect = location.search
        ? new URLSearchParams(location.search).get("redirect")
        : '/';

    const onSubmit = () => {
        localStorage.clear();
        window.location = redirect
    }

    return (
        <div>
            <div id="header" className="flex flex-wrap px-10 bg-white text-gray-500 shadow dark:bg-gray-800 z-50 w-full fixed">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

                    <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                        <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <title>menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </label>
                    <input className="hidden" type="checkbox" id="menu-toggle" />

                    <div className="order-1 md:order-2 pl-8">
                        <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/">
                            <svg className="w-10 h-10 mr-1 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                            </svg>
                            COMPANY
                        </a>
                    </div>

                    <div className="order-2 md:order-3 flex items-center" id="nav-content">

                        <div class="dropdown cursor-pointer p-1 mr-2 flex items-center">
                            <div class="">
                                <img class={"h-8 w-8 rounded-full " + (user && user != null ? "hidden" : "")} src="https://thispersondoesnotexist.com/image" alt="avatar" />
                                <img class={"h-8 w-8 rounded-full " + (user && user != null ? "" : "hidden")} src={user && `/api/users/photo/` + user.user_id + `/` + user.user_avatar} alt="avatar" />
                            </div>
                            <div class="">
                                <span class={"text-gray-800 text-md font-light ml-1 " + (user && user != null ? "" : "hidden")}>{user && user.user_name}</span>
                                <span class={"text-gray-800 text-md font-light ml-1 " + (user && user != null ? "hidden" : "")}>Username</span>
                            </div>
                            <div class="rounded-md shadow-sm flex">
                                <button onclick="clicaParaAbrirMenu()" class="flex justify-center items-center block h-3 w-3 overflow-hidden focus:outline-none">
                                    <div id="Seta" class="animate-ping inline-flex h-full w-full rounded-full text-gray-700 opacity-75">

                                        <svg class="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                                <ul class="dropdown-menu absolute w-48 bg-white rounded-md shadow-xl mt-6 -ml-48 hidden sm:mr-24 md:mr-32 lg:mr-48 xl:mr-64s">
                                    <li class=""><a class="rounded-t text-gray-800 hover:bg-gray-600 hover:text-white py-2 px-4 block whitespace-no-wrap" href="/profile/">Profil</a></li>
                                    <li class=""><a class={"text-gray-800 hover:bg-gray-600 hover:text-white py-2 px-4 block whitespace-no-wrap " + (user && user != null ? "hidden" : "")} href="/signin/">Sign In</a></li>
                                    <li class=""><a class={"rounded-b text-gray-800 hover:bg-gray-600 hover:text-white py-2 px-4 block whitespace-no-wrap " + (user && user != null ? "" : "hidden")} onClick={onSubmit}>Sign Out</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
