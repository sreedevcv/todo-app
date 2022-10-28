const DateTimeInfo = ({ data }) => {

    const formattedData = data => {
        let a = 'fwf'
        
        return data.slice(0, 15);
        // return data;
    }

    return (
        <div className="timestamp-container">
            <span className="timestamp">{formattedData(data)}</span>
        </div>
    );
}

export default DateTimeInfo;