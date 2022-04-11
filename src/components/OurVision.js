import React from 'react';

const OurVision = () => {
    return (
        <section className="font-font-custom bg-white">
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    {/* <img className="object-cover object-center rounded" alt="hero" src="https://thumbs.dreamstime.com/b/our-vision-drawn-white-brick-wall-d-inscription-modern-illustation-blue-arrow-hand-icons-around-brickwall-89018617.jpg" /> */}
                    <img className="object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/photos/pictogram-teamwork-3d-rendering-picture-id918087682?k=20&m=918087682&s=170667a&w=0&h=kYjHOPeJhBUJXRv46TMl2bnLyULHwZYKa-YvZHrdlNg=" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
                    <h1 className="ourVision-title title-font sm:text-4xl text-3xl mb-8 font-bold text-gray-900 text-center">
                        Our Vision
                    </h1>
                    <p className="mb-4 mt-4 leading-loose text-left">
                        ✦ Our vision is to create a customer-centric platform for Women's Sustainability start-ups in undeveloped countries in Africa and Asia.
                    </p>
                    <p className="mb-8 leading-loose text-left">
                        ✦ The platform should enable newly formed and first-year start-ups to find affordable and supportive lenders in the space of Green Loan opportunities.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OurVision;