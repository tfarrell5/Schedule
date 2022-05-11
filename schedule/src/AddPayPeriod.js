import { useState } from "react";

function AddPayPeriod(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const addButtonPressed = () => {
    props.AddPay({
      startDate: startDate,
      endDate: endDate,
    });
  };

  return (
    <div>
      <h2>Add a pay period</h2>
      <form>
        <label htmlFor="start-date-field">Start Date: </label>
        <input
          id="start-date-field"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="end-date-field">end Date: </label>
        <input
          id="end-date-field"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="button" onClick={addButtonPressed}>
          Add Pay Period
        </button>
      </form>
    </div>
  );
}

export default AddPayPeriod;
