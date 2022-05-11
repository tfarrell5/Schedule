import { useState } from "react";

function SearchBar(props) {
  const [date, setDate] = useState(new Date());

  const searchButtonPressed = () => {
    props.updateSearchParams({ date: date });
  };

  return (
    <div>
      <h2>Search for a pay period</h2>
      <form>
        <label htmlFor="date-field">Date: </label>
        <input
          id="date-field"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="button" onClick={searchButtonPressed}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
