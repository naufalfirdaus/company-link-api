import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listoneCompany } from './action/companyAction'
import parse from 'html-react-parser';
import Head from '../components/layout/Head'
import Footer from '../components/layout/Footer'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Rating from '@material-ui/lab/Rating';
import { ReadMore } from '../components/layout/ReadMore';
import Loading from '../components/layout/Loading'

export default function detail({ match }) {
  const dispatch = useDispatch();
  const companyListOne = useSelector(state => state.companyListOne)
  const { company } = companyListOne
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    dispatch(listoneCompany(match.params.id))
  }, [dispatch])

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
      {company &&
        <section className="p-14 text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 pt-20 mx-auto">
            <div className=" grid grid-cols-12 gap-4">
              <div className="col-span-3">
                <img className="w-96 shadow-lg object-cover rounded border-gray-200" src={company.company_logo} />
              </div>
              <div className="col-span-7 ml-4">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">{company.company}</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{company.title}</h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <span className="text-gray-600">{company.type}</span>
                  </span>
                </div>
                <p className="leading-relaxed text-justify mb-4">
                  <ReadMore>
                  {parse(company.description)}
                  </ReadMore>
                </p>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">Location : {company.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      <Footer className="fixed" />
    </div>
  )
}
