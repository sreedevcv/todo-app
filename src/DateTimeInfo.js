const DateTimeInfo = ({ data }) => {
  const formattedData = (data) => data.slice(0, 15);

  return (
    <div className="timestamp-container">
      <span className="timestamp">{formattedData(data)}</span>
    </div>
  );
};

export default DateTimeInfo;
