import React from 'react';
import GreenLoanFilter from '../components/GreenLoanFilter';
import GreenLoansCard from '../components/GreenLoansCard';
import GreenLoansTestimonial from '../components/GreenLoansTestimonial';

const GreenLoans = () => {
    return (
        <section className="font-font-custom">
            <div className="container px-0 py-0 mx-auto">
                <div className="flex flex-col text-left w-full mb-20"
                    style={{ backgroundImage: `url(${'https://statics.fundinghero.com/static/webp/public_images/4025a6715e9b925ec1b128425dc75fa3.webp'})` }}
                >
                    {/* <img src='https://statics.fundinghero.com/static/webp/public_images/4025a6715e9b925ec1b128425dc75fa3.webp' /> */}
                    <h2 className="text-3xl text-white tracking-widest font-medium title-font mb-1 ml-20 mt-20">TOP MORTGAGE LENDERS</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-300 ml-20">APRIL 2022</h1>
                    <p className="sm:text-base text-2xl font-medium title-font mb-20 text-white ml-20">Whether you're looking to compare rates or refinance an existing loan,<br />you've come to the right place! Discover our top-rated mortgage lenders.</p>
                </div>
                <GreenLoanFilter />
                <GreenLoansCard />
                <GreenLoansTestimonial />
            </div>
        </section>
    )
}

export default GreenLoans;