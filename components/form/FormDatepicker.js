import React, { useState, useEffect } from "react";
import DatePicker, { Calendar } from "react-modern-calendar-datepicker";
import moment from "moment-jalaali";

function FormDatepicker({ item, onSelect }) {
  const [selectedDay, setSelectedDay] = useState(null);
  useEffect(() => {
    if(!selectedDay) return 
    const date = `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`;
    const formatDate = item.georgian ? moment(formatDate, "jYYYY/jMM/jDD").format("YYYY-MM-DD") : date;
    onSelect(formatDate);
  }, [selectedDay]);

  const renderCustomInput = ({ ref }) => (
    <div>
      <label htmlFor={`${item.id}`} className="form-label">
        {item.title}
      </label>
      <input
        id={`${item.id}`}
        ref={ref} // necessary
        placeholder={item.placeHolder}
        value={selectedDay ? `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}` : ""}
        className="form-control"
        onChange={() => console.log("")}
        disabled={item.disabled}
      />
    </div>
  );

  return (
    <div className="mb-3">
      <DatePicker
        locale="fa"
        colorPrimary="#003195"
        wrapperClassName="col-12"
        value={selectedDay}
        shouldHighlightWeekends
        onChange={setSelectedDay}
        renderInput={renderCustomInput} // render a custom input
      />
    </div>
  );
}

export default FormDatepicker;
