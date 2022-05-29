import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ date, onChange }) => {
    return (
        <DateTimePicker 
            mode="date" 
            value={ date }
            onChange={(event, value) => onChange(value)}
        />
    )
}

export default DatePicker;