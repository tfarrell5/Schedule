import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import AddPayPeriod from "./AddPayPeriod";
import PayPeriodDisplay from "./PayPeriodDisplay";

function App() {
  const [filter, setFilter] = useState({});
  const [data, setData] = useState({ periods: [] });

  const updateFilter = (searchParam) => {
    setFilter(searchParam);
  };

  const addPayToData = (period) => {
    let periods = data["periods"];
    periods.push(period);
    setData({ periods: periods });
    console.log(data);
  };

  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilter} />
      <PayPeriodDisplay periods={data["periods"]} />
      <AddPayPeriod AddPay={addPayToData} />
    </div>
  );
}

export default App;
