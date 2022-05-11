function PayPeriodDisplay(props) {
  const showPeriods = (period) => {
    return (
      <div>
        <p> Start Date: {period.startDate}</p>
        <p> End Date: {period.endDate}</p>
      </div>
    );
  };

  return <div>{props.periods.map(showPeriods)}</div>;
}

export default PayPeriodDisplay;
