import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Header.module.css';

const Header = () => (
    <div className="w-full flex flex-col h-screen content-center justify-center page-header" data-testid="Header">
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl m-auto">
            <div className="bg-white md:rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title"> HI UPSELL GURU!</h3>
                        <div className="mt-2">
                            <p className="text-gray-500">
                                This is what I did for the code challenge using React and
                                <a href="https://tailwindcss.com/" className="text-green-800" target="_blank"  rel="noreferrer"> Tailwind CSS</a>. You can always know more about me in <a href="https://danielcoy.com/" className="text-green-800 font-bold" target="_blank"  rel="noreferrer">danielcoy.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
