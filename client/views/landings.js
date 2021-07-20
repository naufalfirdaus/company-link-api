import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listCompany, listone1Company } from './action/companyAction';
import { Link } from 'react-router-dom';
import Head from '../components/layout/Head'
import Footer from '../components/layout/Footer';
import Loading from '../components/layout/Loading'
import Simple from './Simple'
import Topop from './Top'


export default function landings() {
    const dispatch = useDispatch();
    const companyList = useSelector(state => state.companyList);
    const { company } = companyList
    const companyListOne1 = useSelector(state => state.companyListOne1);
    const { params } = companyListOne1
    const [isLoading, SetIsLoading] = useState(true);
    const [values, setValues] = useState({
        filter: false
    });
    useEffect(() => {
        dispatch(listCompany())
    }, [dispatch])
    const handleOnChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const filterParams = {
            desc: values.job_desc || '',
            location: values.location || '',
            fullTime: values.fulltime === 'on' ? true : false
        }

        dispatch(listone1Company(filterParams));

    }
    if (isLoading) {
        setTimeout(() => {
            SetIsLoading(false);
        }, 3000);
    }

    return (
        <div>
            <div className="max-h-screen">
                {isLoading && <Loading />}
            </div>
            <Head />

            <body className="bg-white pt-20 px-24 text-gray-600 work-sans leading-normal text-base tracking-normal">

                <nav id="store" className="w-full top-0 py-1">
                    <div className=" container mx-auto flex flex-wrap items-center justify-between mt-0">

                        <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
                            jobs
                        </a>

                        <div className="flex-1 px-2 flex gap-x-4 justify-center lg:ml-6 lg:justify-end mt-5">
                            {/* Search section */}
                            <div className="max-w-lg w-full lg:max-w-xs">
                                <label htmlFor="job_desc" className="block text-sm font-medium text-gray-700">
                                    Job Description
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="job_desc"
                                        id="job_desc"
                                        autoComplete="job_desc"
                                        placeholder="Filter by title,benefit,companies,expertise"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        onChange={handleOnChange('job_desc')}
                                    />
                                </div>

                            </div>
                            <div className="max-w-lg w-full lg:max-w-xs">
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                    Location
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        placeholder="Filter by city,state, zip code or country"
                                        autoComplete="family-name"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        onChange={handleOnChange('location')}
                                    />
                                </div>

                            </div>

                            <div className="relative flex items-start">
                                <div className="flex items-center py-9">
                                    <input
                                        id="fulltime"
                                        name="fulltime"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        onChange={handleOnChange('fulltime')}
                                    />
                                </div>
                                <div className="ml-3 text-sm py-8">
                                    <label htmlFor="fulltime" className="font-medium text-gray-700">
                                        Full Time Only
                                    </label>
                                </div>
                            </div>

                            <div className="relative flex items-start py-5">
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={onSubmit}
                                    >
                                        Search
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </nav>

                <section className="bg-white">

                    <div className={"flex flex-col " + (params && params != null ? "hidden" : "")}>


                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Title
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Role
                                                    </th>
                                                    <th scope="col" className="relative px-6 py-3">
                                                        <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            {company && company.map((row, index) => {
                                                return (
                                                    <tbody className="bg-white divide-y divide-gray-200">
                                                        <td className="px-4 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 h-10 w-10">
                                                                    <img className={"h-10 w-10 rounded-full " + (row && row.company_logo != null ? "" : "hidden")} src={row.company_logo} alt="" />
                                                                    <img className={"h-10 w-10 rounded-full " + (row && row.company_logo != null ? "hidden" : "")} src={`data:image/png;base64,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`} alt="" />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">{row.title}</div>
                                                                    <div className="text-sm text-gray-500">{row.url}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{row.company}</div>
                                                            <div className="text-sm text-gray-500">{row.created_at}</div>
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                {row.location}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.type}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <a href={`/detail/` + row.id} className="text-indigo-600 hover:text-indigo-900">
                                                                Detail
                                                            </a>
                                                        </td>
                                                    </tbody>
                                                )
                                            })}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className={(params && params != null ? "" : "hidden")}>

                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Title
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Role
                                                    </th>
                                                    <th scope="col" className="relative px-6 py-3">
                                                        <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            {params && params.map((row) => {
                                                return (
                                                    <tbody className="bg-white divide-y divide-gray-200">
                                                        <td className="px-4 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 h-10 w-10">
                                                                    <img className={"h-10 w-10 rounded-full " + (row && row.company_logo != null ? "" : "hidden")} src={row.company_logo} alt="" />
                                                                    <img className={"h-10 w-10 rounded-full " + (row && row.company_logo != null ? "hidden" : "")} src={`data:image/png;base64,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`} alt="" />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">{row.title}</div>
                                                                    <div className="text-sm text-gray-500">{row.url}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{row.company}</div>
                                                            <div className="text-sm text-gray-500">{row.created_at}</div>
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                {row.location}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.type}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <a href={`/detail/` + row.id} className="text-indigo-600 hover:text-indigo-900">
                                                                Detail
                                                            </a>
                                                        </td>
                                                    </tbody>
                                                )
                                            })}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <Footer className="fixed" />
            </body>
            <Topop />
        </div>
    )
}

