import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import OddEvenFinder from './components/OddEvenFinder/OddEvenFinder';
import Dashboard from './components/Dashboard/Dashboard';
import LatestTransactions from "./components/LatestTransactions/LatestTransactions";
import Header from "./components/Header/Header";
function App() {
  return (
    <main className="bg-gray-100 dark:bg-gray-800  relative pb-20">
      <Header />
      <div className="flex items-start justify-between">
        <div className="flex flex-col w-full md:space-y-4">
          <Router>
            <Switch>
              
              <Route path="/transactions/:id">
                <LatestTransactions />
              </Route>
              <Route exact  path="/">
                <OddEvenFinder />
            
                <Dashboard />
              </Route>
            </Switch>

            
          </Router>

        </div>
      </div>
      
    </main>
  );
}

export default App;
