import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import styles from "./LatestTransactions.module.css";
import LatestTransactionsDetailsModal from "./LatestTransactionsDetailsModal/LatestTransactionsDetailsModal";
import { Link } from "react-router-dom";
import axios from "axios";
const LatestTransactions = () => {
  const [state, setState] = useState({
    latestTransactions: [],
    loading: false,
    showDetails: null
  });

  useEffect(() => {
    getLatestTransactionsItems();
    return () => {
      setState({
        latestTransactions: [],
        loading: false,
        showDetails: null
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getLatestTransactionsItems() {
    setState({
      ...state,
      loading: true
    });
    axios.get("https://retoolapi.dev/M49uHh/transactions")
      .then((data) => {
        setState({
          ...state,
          latestTransactions: data.data,
          loading: false
        });
    });
  }

  function showDetails(e) {
    e.preventDefault();
    setState({
      ...state,
      showDetails: true
    })
  }

  function onModalClose() {
    setState({
      ...state,
      showDetails: false
    })
  }

  return (
    <div className={styles.LatestTransactions} data-testid="LatestTransactions">
      <div>
        <div className="ml-5 my-4">
          <Link to="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="pl-2">Go Back</span>
          </Link>
        </div>

        <h1 className="text-4xl text-center font-semibold text-gray-800 dark:text-white py-11 pb-5">
          Latest transactions
        </h1>
      </div>

      <div className="w-full">
        <div className="flex flex-col">
          <div className="">
            <div className="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg overflow-x-auto">
                { state.loading && 
                  <div className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-gray-800 bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Loading
                  </div>
                }

                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Items Count
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Total Value
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {state.latestTransactions.map((value, index) => {
                      return (
                        <tr data-testid="latestTransaction" key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src="https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {value.guest}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {value.itemsCount}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              €{value.totalValue}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-indigo-600 hover:text-indigo-900" onClick={showDetails}>
                              Details
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {state.showDetails && <LatestTransactionsDetailsModal details={state.latestTransactions[0]} onModalClose={onModalClose} />}
    </div>
  );
};

LatestTransactions.propTypes = {};

LatestTransactions.defaultProps = {};

export default LatestTransactions;
