import React from 'react';

const WhyAreWeDoingThis = () => {
    return (
        <section className="font-font-custom bg-white">
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://www.theasis.org/preprimary/home/wp-content/uploads/2015/11/Our-purpose.jpg" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="whyAreWeDoingThis-title title-font sm:text-4xl text-3xl mb-8 font-bold text-gray-900 text-center">
                        Why Are We Doing This? (Purpose)
                    </h1>
                    <p className="mb-2 mt-4 leading-loose text-left">
                        ✦ We are group of female experts and would like to help other women around the globe to not only find the jobs they aspire to do, but also create the jobs for others and help the community.
                    </p>
                    <p className="mb-2 leading-loose text-left">
                        ✦ We believe in positive change, 'no matter how small, no matter where'.
                    </p>
                    <p className="mb-2 leading-loose text-left">
                        ✦ We encourage businesses to change and grow by adopting a sustainable culture.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhyAreWeDoingThis;