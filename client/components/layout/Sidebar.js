import React from 'react'
import { Link } from "react-router-dom";

import manga from '../../assets/images/manga.png'


export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    return (
        <>
            <nav className="h-screen flex flex-col w-64 bg-gray-50">
                <div className="p-4">
                    <img src={manga} class="h-auto w-auto" />
                </div>
                <ul className="p-2 space-y-2 flex-1 overflow-auto" >
                    <li>
                        <Link to="/manga/dashboard"  className="flex space-x-2 items-center text-gray-600 p-2 hover:bg-gray-200 rounded-lg hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manga/mangas" className="flex space-x-2 items-center text-gray-600 p-2 hover:bg-gray-200 rounded-lg hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg"  class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                             <span>Mangas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manga/mangas-chapter" className="flex space-x-2 items-center text-gray-600 p-2 hover:bg-gray-200 rounded-lg hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5"/><path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z"/></svg>
                         <span>Mangas Chapter</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manga/mangas-image"  className="flex space-x-2 items-center text-gray-600 p-2 hover:bg-gray-200 rounded-lg hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M20.4 14.5L16 10 4 20"/></svg>
                            <span>Mangas Image</span>
                        </Link>
                    </li>
                </ul>

                <div className="p-2 flex items-center border-t-2 border-gray-300 space-x-4">
                    <div className="relative inline-flex">
                        <span className="inline-flex bg-red-500 w-2 h-2 absolute right-0 bottom-0 rounded-full ring-2 ring-white transform translate-x-1/3 translate-y-1/3"></span>
                        <img className='w-8 h-8 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />
                    </div>
                    <div>
                        <h3 className="font-semibold tracking-wide text-gray-800">
                            Danimai
                        </h3>
                        <p className="text-sm text-gray-700">
                            view profile
                        </p>
                    </div>
                </div>
            </nav>

        </>
    )
}