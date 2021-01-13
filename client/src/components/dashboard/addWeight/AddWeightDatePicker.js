import React, { useState } from "react";
import DatePicker from 'react-date-picker';

const AddWeightDatePicker = () => {
  const [value, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker value={value} onChange={date => setStartDate(date)} />
    </div>
  )
}

export default AddWeightDatePicker;