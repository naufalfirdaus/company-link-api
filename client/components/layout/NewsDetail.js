import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Head from './Head3'
import Footer from './Footer';
import Loading from './Loading'
import Simple from '../../views/Simple'
import Topop from '../../views/Top'
import axios from "axios";

class NewsDetail extends React.Component {
    state = {
        datas: [],
        isLoading: true,
        errors: null,
    };

    Databerita({ match }) {
        axios
            .get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${match.params.id}`)
            .then((response) =>
                response.data.map((data) => ({
                    id: `${data.id}`,
                    title: `${data.title}`,
                    company: `${data.company}`,
                    location: `${data.location}`,
                }))
            )

            .then((datas) => {
                this.setState(
                    {
                        datas,
                        isLoading: false,
                    },
                    console.log(datas)
                );
            })
            .catch((error) => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.Databerita();
    }

    render() {
        const { isLoading, datas } = this.state;
        return (
            <React.Fragment>
                <Head />

                <body className="pt-20">
                    <section className="px-14 bg-white">

                        <div className="grid grid-cols-4 justify-items-center">
                            {!isLoading ? (
                                datas && ((data) => {
                                    const { title, company, location} = data;
                                    return (
                                        <div className="px-10 py-5">
                                            <Link>
                                                <img className="max-w-72 hover:grow hover:shadow-2xl rounded-xl object-center" src={`data:image/jpeg;base64,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`} />
                                                <div className="pt-3 text-center font-bold block text-gray-900">
                                                    <p>{title}</p>
                                                    <p>{location}</p>
                                                    <p>{company}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="container">
                                    <p className="text-center">Loading...</p>
                                </div>
                            )}
                        </div>
                    </section>
                </body>
                <Footer />
            </React.Fragment>
        );
    }
}

export default NewsDetail;
