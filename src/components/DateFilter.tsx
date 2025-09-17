import calendar from "../assets/Date-applied.png";

const DateFilter = () => {
  return (
    <div id="date-filter">
      <span>Select by date</span>
      <img
        
        src={calendar}
        alt="calendar-filter"
      />
    </div>
  );
};

export default DateFilter;
