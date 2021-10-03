import React, {useState} from "react";
// import PropTypes from "prop-types";
import styles from "./OddEvenFinder.module.css";



const OddEvenFinder = () => {
  const [state, setState] = useState({
    numbersToSplit: '',
    oddNumbers: [],
    evenNumbers: []
  });

  
  function handleListOfNumbersChange(event) {
    setState({
      ...state,
      numbersToSplit: event.target.value
    });
  }

  function findOddAndEvenNumbers(event) {
    event.preventDefault();
    
    
    let oddNumbers = [];
    let evenNumbers = [];

    state.numbersToSplit.split(' ').forEach(num => {
      if(num % 2 === 0) {
        evenNumbers.push(num);
      } else {
        oddNumbers.push(num);
      }
    });

    setState({
      ...state,
      oddNumbers,
      evenNumbers
    });
  }

  return <div
    className={
      "px-4 md:px-6" + styles.OddEvenFinder
    }
    data-testid="OddEvenFinder"
  >
    <h1 className="text-4xl text-center font-semibold text-gray-800 dark:text-white py-11 pb-1">
      Odd & Even numbers finder
    </h1>
    <h2 className="text-md text-gray-800 text-center">
      Provide a list of whole numbers separated by spaces
    </h2>
    <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
      <div className="w-full">
        <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
          <form action="" onSubmit={findOddAndEvenNumbers}>
            <label
              className="text-sm text-gray-600 false"
              htmlFor="listOfNumbers"
            >
              List of whole numbers:
            </label>
            <div className="mb-4">
              <input
                type="text"
                name="listOfNumbers"
                id="listOfNumbers"
                className="w-full border border-gray-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                data-testid="listOfNumbersInput"
                placeholder="1 2 3 4"
                onChange={handleListOfNumbersChange}
              />
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-2 flex items-center text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-500" type="submit">
                Find!
              </button>
            </div>
          </form>
          <div className="flex my-5 flex-wrap">
            <div className="w-full sm:w-1/2 sm:border-r border-gray-900 px-5 py-3">
              <h3 className="font-semibold">Odd Numbers</h3>
              <div className="py-3" data-testid="oddNumbers">
                {state.oddNumbers.map((value, index) => {
                  return <p key={index}>{value}</p>
                })}
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:border-l border-gray-900 px-5 py-2">
              <h3 className="font-semibold">Even Numbers</h3>
              <div className="py-3" data-testid="evenNumbers">
                {state.evenNumbers.map((value, index) => {
                  return <p key={index}>{value}</p>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

OddEvenFinder.propTypes = {};

OddEvenFinder.defaultProps = {};

export default OddEvenFinder;
