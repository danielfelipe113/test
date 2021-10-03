import React from "react";
// import PropTypes from "prop-types";
import styles from "./LatestTransactionsDetailsModal.module.css";
import PropTypes from 'prop-types';
const LatestTransactionsDetailsModal = (params) => (
  <div
    className={styles.LatestTransactionsDetailsModal}
    data-testid="LatestTransactionsDetailsModal"
  >
    {/* // Details Modal */}
    {true && (
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
         
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={params.onModalClose}
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

       
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-xl leading-6 font-medium text-gray-900 mb-5"
                    id="modal-title"
                  >
                    Transaction Details
                  </h3>
                  <div className="mt-2 flex items-center">
                    <p className="text-sm font-bold text-gray-800">
                      Guest:
                    </p>
                    <p className="text-sm text-gray-500 ml-2">
                      {params.details.guest}
                    </p>
                  </div>

                  <div className="mt-2 flex items-center">
                    <p className="text-sm font-bold text-gray-800">
                      Items Count:
                    </p>
                    <p className="text-sm text-gray-500 ml-2">
                      {params.details.itemsCount}
                    </p>
                  </div>

                  <div className="mt-2 flex items-center">
                    <p className="text-sm font-bold text-gray-800">
                      Total value:
                    </p>
                    <p className="text-sm text-gray-500 ml-2">
                      €{params.details.totalValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={params.onModalClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

LatestTransactionsDetailsModal.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number,
    guest: PropTypes.string,
    guestId: PropTypes.string,
    itemsCount: PropTypes.number,
    totalValue: PropTypes.number,
  }),
};


LatestTransactionsDetailsModal.defaultProps = {
};

export default LatestTransactionsDetailsModal;
