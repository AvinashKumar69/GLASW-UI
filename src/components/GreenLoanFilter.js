import React from 'react';
import Dropdowns from './Dropdowns';

const GreenLoanFilter = () => {
    return (
        <section className="font-font-custom">
            <div className="container px-5 py-2 mx-auto w-141">
                <h1 className="sm:text-3xl text-3xl font-medium title-font text-center text-gray-900 mb-20 font-bold">Top Mortgage Loans - Full List</h1>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex">
                        <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Filter By:</h2>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 flex">
                        <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                                <Dropdowns />
                            </h2>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 flex">
                        <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                                <Dropdowns />
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GreenLoanFilter;