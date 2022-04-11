import React from 'react';
import LOGO from '../assets/glaswLOGO1.png';


const HeroSection = () => {
    return (
        <section className="font-font-custom bg-white">
            <div className="container flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-screen md:w-full w-full mb-10 md:mb-0">
                    <img className="hero-image object-cover object-center rounded" alt="hero" src={LOGO} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-left items-center text-center">
                    <h1 className="hero-title title-font sm:text-4xl text-3xl mb-2 font-bold text-gray-900 text-center">
                        GLASwomen - Green Loans Africa/Asia Start-ups Women
                    </h1>
                    <h1 className="hero-title sm:text-3xl text-2xl font-medium title-font mb-4 ml-18">'No Matter How Small, No Matter Where'</h1>
                    <p className="hero-para mb-8 leading-relaxed">GLASW is dedicated to offer their expertise to women-led start-ups getting the necessary finances via our green-loan initiatives programme offered by our partnered financial institutions globally.</p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;