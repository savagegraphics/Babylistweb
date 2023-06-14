import React from 'react'
import { FaDiscord, FaFacebook, FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const FooterNew = () => {
    return (
        <footer className="bg-[#85586F] dark:bg-gray-900 text-white">
            <div className="mx-auto w-full max-w-screen-xl pt-8">
                <div className="grid grid-cols-2 gap-8 pl-16  px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-[azure] uppercase">Company</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline  text-[azure]">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-[azure]">Careers</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-[azure]">Brand Center</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-[azure]">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Help center</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline  text-[azure]">Discord Server</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline  text-[azure]">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline  text-[azure]">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline  text-[azure]">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-[azure] uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-[azure]">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-[azure]">Licensing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-[azure]">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-[azure] uppercase dark:text-white">Download</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-[azure]">iOS</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-[azure]">Android</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-[azure]">Windows</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-[azure]">MacOS</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6, pl-16 ">
                    <div className="mx-auto w-full max-w-screen-xl">
                        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-[azure] uppercase dark:text-white">Company</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className=" hover:underline text-[azure]">About</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline text-[azure]">Careers</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline text-[azure]">Brand Center</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline text-[azure]">Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-[#85586F] dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.</span>
                    <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                        <a href="#" className="text-[#85586F] hover:text-gray-900 dark:hover:text-[#85586F]">
                            <FaFacebook className="w-5 h-5" />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-[#85586F] hover:text-gray-900 dark:hover:text-[#85586F]">
                            <FaLinkedin className="w-5 h-5" />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-[#85586F] hover:text-gray-900 dark:hover:text-[#85586F]">
                            <FaTwitter className="w-5 h-5" />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-[#85586F] hover:text-gray-900 dark:hover:text-[#85586F]">
                            <FaInstagram className="w-5 h-5" />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-[#85586F] hover:text-gray-900 dark:hover:text-[#85586F]">
                            <FaGithub className="w-5 h-5" />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-[#85586F] hover:text-gray-900 dark:hover:text-[#85586F]">
                            <FaDiscord className="w-5 h-5" />
                            <span className="sr-only">Facebook page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>


    )
}



export default FooterNew