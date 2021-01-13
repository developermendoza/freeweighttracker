import React, { useState } from "react";
import DatePicker from 'react-date-picker';

const AddWeightDatePicker = ({handleDatePickerChange, date}) => {
  // const [value, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker value={date} onChange={handleDatePickerChange} />
    </div>
  )
}

export default AddWeightDatePicker;