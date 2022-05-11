import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  const [filter, setFilter] = useState({});

  const updateFilter = (searchParam) => {
    setFilter(searchParam);
  };

  const [data, setData] = useState({ items: [] });

  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilter} />
    </div>
  );
}

export default App;
