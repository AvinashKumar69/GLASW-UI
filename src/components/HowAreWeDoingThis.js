import React from 'react';

const HowAreWeDoingThis = () => {
    return (
        <section className="font-font-custom bg-white">
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://st.depositphotos.com/1006899/2590/i/950/depositphotos_25909797-stock-photo-plan-do-check-act-metaphor.jpg" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="howAreWeDoingThis-title title-font sm:text-4xl text-3xl mb-8 font-bold text-gray-900 text-center">
                        How Are We Doing This?
                    </h1>
                    <p className="mb-2 mt-4 leading-loose text-left">
                        ✦ We deliver value to start-ups by encouraging, supporting, and mentoring women in their business ventures.
                    </p>
                    <p className="mb-2 leading-loose text-left">
                        ✦ We deliver valuable information, on how to start, how to grow and whom to ask for a financial support.
                    </p>
                    <p className="mb-2 leading-loose text-left">
                        ✦ We deliver a unique network of likeminded business women prepared to take on the challenges of change in the world of sustainability.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HowAreWeDoingThis;