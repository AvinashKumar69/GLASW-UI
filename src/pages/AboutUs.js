import React from 'react';
import HowAreWeDoingThis from '../components/HowAreWeDoingThis';
import WhyAreWeDoingThis from '../components/WhyAreWeDoingThis';



const AboutUs = () => {
    return (
        <section className="font-font-custom bg-white"
            style={{ backgroundImage: `url(${"https://www.collab2.co.za/wp-content/uploads/2017/06/contact-us-background.jpg"})` }}
        >
            <div className="container px-5 py-24 mx-auto height-full">
                <h1 className="aboutus-heading sm:text-7xl text-7xl font-medium title-font text-center mb-5 font-bold text-white">About Us</h1>
                <div className="flex flex-wrap flex-col sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 text-white">
                    <div className="p-3 md:w-full flex">
                        <div className="flex-grow pl-6">
                            <p className="leading-relaxed text-base font-semibold">Getting started can be a complex task, so many unknown factors to consider as an entrepreneur. The startup consultancy services provide assistance to newer ventures. Having expert advice available can significantly improve the chances of success. It can be a time saver and highly reduce budget requirements. Just by avoiding costly mistakes alone. As a business startup, consulting services come with invaluable benefits.</p>
                        </div>
                    </div>
                    <div className="p-3 md:w-full flex">
                        <div className="flex-grow pl-6">
                            <p className="leading-relaxed text-base font-semibold">When starting a new business, most entrepreneurs do not have expertise across all areas of the business. Even if that would be the case, it would not be beneficial. Necessary tasks to start a business can be accomplished successfully and more efficiently with help.</p>
                        </div>
                    </div>
                    <div className="p-3 md:w-full flex">
                        <div className="flex-grow pl-6">
                            <p className="leading-relaxed text-base font-semibold">Startups have a complex job ahead of them. After the legal business structure is in place, business owners have to manage a range of areas to succeed. Business startup consulting services help with these areas. They provide the often much-needed support to entrepreneurs, Startup firms, and partners.</p>
                        </div>
                    </div>
                </div>
            </div>

            <WhyAreWeDoingThis />
            <HowAreWeDoingThis />
        </section>
    )
}

export default AboutUs;