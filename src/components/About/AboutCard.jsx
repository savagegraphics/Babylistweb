import React from 'react'

const AboutCard = () => {
    return (
        <div className="flex flex-wrap justify-center m-6">
            <div className="card w-full md:w-1/3 mb-6 md:order-1">
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <Image src="https://mdbcdn.b-cdn.net/Image/new/standard/nature/111.webp" className="Image-fluid" alt="" />
                    </div>
                </div>
            </div>
            <div className="card w-full md:w-2/5 mb-6 md:p-4 md:order-1">
                <div className="block rounded-lg bg-[azure] p-20 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div>
            </div>

            <div className="card w-full md:w-1/3 mb-3 mt-8 md:order-2">
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <Image src="https://mdbcdn.b-cdn.net/Image/new/standard/nature/111.webp" className="Image-fluid" alt="" />
                    </div>
                </div>
            </div>
            <div className="card w-full md:w-2/5  mt-8 md:p-4 md:order-1">
                <div className="block rounded-lg bg-[azure] p-20 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div>
            </div>

        </div>

    )
}

export default AboutCard