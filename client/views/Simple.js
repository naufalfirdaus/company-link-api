import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, visibility: "hidden" }}
            onClick={onClick}
        >
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, visibility: "hidden" }}
            onClick={onClick}
        >
        </div>
    );
}
export default class Simple extends Component {

    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 3500,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        }

        return (
            <div>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charset="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <Slider {...settings}>

                    <div>
                        <section className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 rounded-xl md:items-center bg-cover bg-right" style={{ height: '23rem', backgroundImage: 'url("https://p4.wallpaperbetter.com/wallpaper/860/803/673/anime-anime-girls-street-afternoon-road-hd-wallpaper-preview.jpg")' }}>
                            <div className="container mx-auto">
                                <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
                                    <h1 className="text-white font-bold text-2xl my-4">Genre Romance</h1>
                                    <Link to="/romance">
                                        <a className="text-xl inline-block no-underline border-b border-white text-white leading-relaxed">products</a>
                                    </Link>
                                    </div>
                                </div>
                        </section>
                    </div>

                    <div>
                        <section className="w-full mx-auto bg-nordic-gray-light rounded-xl flex pt-12 md:pt-0 md:items-center bg-cover bg-right" style={{ height: '23rem', backgroundImage: 'url("https://p4.wallpaperbetter.com/wallpaper/884/403/635/anime-anime-girls-school-uniform-katana-photoshop-hd-wallpaper-preview.jpg")' }}>
                            <div className="container mx-auto">
                                <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
                                    <h1 className="font-bold text-white text-2xl my-4">Genre Fighting</h1>
                                    <Link to="/fight">
                                        <a className="text-xl inline-block no-underline border-b border-white text-white leading-relaxed">products</a>
                                    </Link>
                                    </div>
                            </div>
                        </section>
                    </div>

                    <div>
                        <section className="w-full mx-auto bg-nordic-gray-light rounded-xl flex pt-12 md:pt-0 md:items-center bg-cover bg-right" style={{ height: '23rem', backgroundImage: 'url("https://i.pinimg.com/originals/01/d0/f0/01d0f03955db0280ec4403f21c1ec2a3.jpg")' }}>
                            <div className="container mx-auto">
                                <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
                                    <h1 className="font-bold text-white text-2xl my-4">Genre Cooking</h1>
                                    <Link to="/cook">
                                        <a className="text-xl inline-block no-underline border-b border-white leading-relaxed text-white">products</a>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>

                    
                    <div>
                        <section className="w-full mx-auto bg-nordic-gray-light rounded-xl flex pt-12 md:pt-0 md:items-center bg-cover bg-right" style={{ height: '23rem', backgroundImage: 'url("https://i.pinimg.com/originals/78/fe/e6/78fee6d06f76a5caf281795f1e6c9f1c.jpg")' }}>
                            <div className="container mx-auto">
                                <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
                                    <h1 className="font-bold text-white text-2xl my-4">All Genres</h1>
                                    <Link to="/">
                                    <a className="text-xl inline-block no-underline border-b border-white leading-relaxed text-white">products</a>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>

                </Slider>
            </div>

        );
    }
}