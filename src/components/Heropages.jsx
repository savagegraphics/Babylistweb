import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiHome2Line, RiSettings2Line, RiUser3Line, RiWalletLine, RiAddLine } from 'react-icons/ri';

const BottomNavigation = () => {
    const [ activeNavItem, setActiveNavItem ] = useState('home');

    const handleNavItemClick = (navItem) => {
        setActiveNavItem(navItem);
    };

    return (
        <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-0 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                <Link
                    to="/"
                    onClick={ () => handleNavItemClick('home') }
                    className={ `${activeNavItem === 'home' ? 'bg-blue-600 text-white' : ''
                        } inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group` }
                >
                    <RiHome2Line className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                    <span className="sr-only">Home</span>
                </Link>
                {/* Add the remaining navigation items */ }
                <Link
                    to="/dummy1"
                    onClick={ () => handleNavItemClick('dummy1') }
                    className={ `${activeNavItem === 'dummy1' ? 'bg-blue-600 text-white' : ''
                        } inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group` }
                >
                    <RiWalletLine className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                    <span className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"></span>
                </Link>
                <Link
                    to="/dummy2"
                    onClick={ () => handleNavItemClick('dummy2') }
                    className={ `${activeNavItem === 'dummy2' ? 'bg-blue-600 text-white' : ''
                        } inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group` }
                >
                    <RiAddLine className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                    <span className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"></span>
                </Link>
                <Link
                    to="/dummy3"
                    onClick={ () => handleNavItemClick('dummy3') }
                    className={ `${activeNavItem === 'dummy3' ? 'bg-blue-600 text-white' : ''
                        } inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group` }
                >
                    <RiSettings2Line className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                    <span className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"></span>
                </Link>
                <Link
                    to="/dummy4"
                    onClick={ () => handleNavItemClick('dummy4') }
                    className={ `${activeNavItem === 'dummy4' ? 'bg-blue-600 text-white' : ''
                        } inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group` }
                >
                    <RiUser3Line className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                    <span className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"></span>
                </Link>
            </div>
        </div>
    );
};

export default BottomNavigation;
