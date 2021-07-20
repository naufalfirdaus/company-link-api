import React from 'react'


export default function NavigationBar() {
    return (
        <div>
            <nav class="bg-white shadow dark:bg-gray-800 fixed z-50 w-full top-0" >
                <div class="container px-6 py-3 mx-auto">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                                    <svg class="w-10 h-10 mr-1 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                                    </svg>
                                    MANGASAN
                                </div>
                                <div class="hidden mx-10 md:block">
                                    <form action="#">
                                    <div class="relative">
                                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                        <input id="search" name="search"  type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search" />
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div class="flex md:hidden">
                                <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="items-center md:flex">
                            <div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                                <a class="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="/mangas/admin">Home</a>
                                <a class="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Blog</a>
                                <a class="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Compoents</a>
                                <a class="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Courses</a>
                            </div>

                            <div class="flex items-center py-2 -mx-1 md:mx-0">
                                <a class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto" href="#">Login</a>
                                <a class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto" href="#">Join free</a>
                            </div>
                            <div class="mt-3 md:hidden">
                                <div class="relative">
                                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="py-3 mt-3 -mx-3 overflow-hidden whitespace-nowrap scroll-hidden">
                        <a class="mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0" href="#">Fight</a>
                        <a class="mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0" href="#">Cooking</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}