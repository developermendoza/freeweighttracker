import React  from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AddWeightDatePicker = ({handleDatePickerChange, date}) => {
  // const [value, setStartDate] = useState(new Date());
  return (
    <div>
      <Calendar value={date} onChange={handleDatePickerChange} />
    </div>
  )
}

export default AddWeightDatePicker;