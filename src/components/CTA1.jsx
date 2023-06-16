import React from 'react'
import Image from 'next/image'
import Image1 from '../assets/bg-Image0.JPG'
import Image2 from '../assets/bg-Image0.JPG'
import Image3 from '../assets/Image3.PNG'



const CTA1 = () => {
    return (
        <div className="flex flex-col items-center w-full gap-4 p-8 mt-8 mb-10 md:flex-row md:mb-0 flex-between">
            <div className="bg-white dark:bg-gray-800 w-72 mt-8 shadow-lg mx-auto rounded-xl p-4">
                <p className="text-gray-600 dark:text-white">
                    <span className="text-lg font-bold text-indigo-500">
                        “
                    </span>
                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                    <span className="text-lg font-bold text-indigo-500">
                        ”
                    </span>
                </p>
                <div className="flex items-center mt-4">
                    <a href="#" className="relative block">
                        <Image alt="profil" src={ Image1 } className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </a>
                    <div className="flex flex-col justify-between ml-2">
                        <span className="text-sm font-semibold text-indigo-500">
                            Jane Miguel
                        </span>
                        <span className="flex items-center text-xs dark:text-gray-400">
                            User of Babylist
                        </span>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 w-72 mt-8 shadow-lg mx-auto rounded-xl p-4">
                <p className="text-gray-600 dark:text-white">
                    <span className="text-lg font-bold text-indigo-500">
                        “
                    </span>
                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                    <span className="text-lg font-bold text-indigo-500">
                        ”
                    </span>
                </p>
                <div className="flex items-center mt-4">
                    <a href="#" className="relative block">
                        <Image alt="profil" src={ Image2 } className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </a>
                    <div className="flex flex-col justify-between ml-2">
                        <span className="text-sm font-semibold text-indigo-500">
                            Jane Doe
                        </span>
                        <span className="flex items-center text-xs dark:text-gray-400">
                            User of Babylist
                        </span>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 w-72 mt-8 shadow-lg mx-auto rounded-xl p-4">
                <p className="text-gray-600 dark:text-white">
                    <span className="text-lg font-bold text-indigo-500">
                        “
                    </span>
                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                    <span className="text-lg font-bold text-indigo-500">
                        ”
                    </span>
                </p>
                <div className="flex items-center mt-4">
                    <a href="#" className="relative block">
                        <Image alt="profil" src={ Image3 } className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </a>
                    <div className="flex flex-col justify-between ml-2">
                        <span className="text-sm font-semibold text-indigo-500">
                            Omolara Omolere
                        </span>
                        <span className="flex items-center text-xs dark:text-gray-400">
                            User of Babylist
                        </span>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CTA1