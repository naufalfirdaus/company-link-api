import React, { Component } from "react";
import BackToTop from "react-back-to-top-button"

export default class Top extends Component {
    render() {
        return (
            <BackToTop
                showOnScrollDown
                showAt={1000}
                speed={1500}
                easing="easeInOutQuint"
            >
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="animate-bounce h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                    </svg>
                </span>
            </BackToTop>
        );
    }
}