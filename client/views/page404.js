import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Loading from '../components/layout/Loading'
export default function page404() {
    const [isLoading, SetIsLoading] = useState(true);
    if (isLoading) {
        setTimeout(() => {
            SetIsLoading(false);
        }, 2000);
    }
    return (
        <div>
            <div className="max-h-screen">
                {isLoading && <Loading />}
            </div>
            <div className="min-w-screen min-h-screen bg-indigo-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
                <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                    <div className="w-full md:w-1/2">
                        <div className="mb-10 lg:mb-20">
                            <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/">
                                <svg className="w-10 h-10 mr-1 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                                </svg>
                                COMPANY
                            </a>
                        </div>
                        <div className="mb-10 md:mb-20 text-gray-600 font-light">
                            <h1 className="font-black uppercase text-3xl lg:text-5xl text-indigo-500 mb-10">You seem to be lost!</h1>
                            <p>The page you're looking for isn't available.</p>
                            <p>Try searching again or use the Go Back button below.</p>
                        </div>
                        <div className="mb-20 md:mb-0">
                            <Link to="/">
                                <button className="text-lg outline-none focus:outline-none transform transition-all hover:scale-110 text-indigo-500 hover:text-indigo-700"><i className="mdi mdi-arrow-left mr-2"></i>Go Back</button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 text-center">
                        <img className="rounded-xl" src="https://img.freepik.com/free-photo/view-modern-business-skyscrapers-glass-sky-view-landscape-commercial-building_39665-83.jpg?size=626&ext=jpg"/>
                    </div>
                </div>
                <div className="w-64 md:w-96 h-96 md:h-full bg-indigo-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
                <div className="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
            </div>
        </div>
    )
}
