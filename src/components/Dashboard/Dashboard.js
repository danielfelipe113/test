import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import styles from "./Dashboard.module.css";
import axios from "axios";

import { Link } from "react-router-dom";

const Dashboard = () => {
  const [state, setState] = useState({
    dashboardItems: [],
    loading: false
  });

  useEffect(() => {
    getDashboardItems();
    return () => {
      setState({
        dashboardItems: [],
        loading: false
      });
    };
  }, []);

  function getDashboardItems() {
    setState({
      ...state,
      loading: true
    })
    axios.get("https://retoolapi.dev/BnLc1j/dashboard").then((data) => {
      setState({
        dashboardItems: data.data,
        loading: false
      });
    });
  }

  return (
    <div className={styles.Dashboard} data-testid="Dashboard">
      <h1 className="text-4xl text-center font-semibold text-gray-800 dark:text-white py-11 pb-1">
        Dashboard
      </h1>
      <h2 className="text-md text-gray-600 text-center">
        Click on a box to see its details
      </h2>
      {
        state.loading && 
        <div className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-gray-800 bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading
        </div>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {state.dashboardItems.map((value, index) => {
          return (
            <Link
              className="w-full px-6 "
              to={`/transactions/${value.id}`}
              data-testid="dashboardItem"
              key={index}
            >
              <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative rounded-md">
                <p className="text-md w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                  Arrival Date
                </p>
                <div className="flex items-end space-x-2 my-3 mb-8">
                  <p className="text-2xl text-black dark:text-white font-bold">
                    {value.arrivalDate}
                  </p>
                </div>
                <div className="dark:text-white">
                  <div className="flex items-center pb-2 mb-2 text-sm sm:space-x-12  justify-between border-b border-gray-200">
                    <p>Emails Sent</p>
                    <div className="flex items-end text-lg font-bold">
                      {value.emailsSentCount}
                    </div>
                  </div>
                  <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                    <p>Reservations</p>
                    <div className="flex items-end text-lg font-bold">
                      {value.reservationsCount}
                    </div>
                  </div>
                  <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                    <p>Transactions</p>
                    <div className="flex items-end text-lg font-bold">
                      {value.transactionsCount}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
