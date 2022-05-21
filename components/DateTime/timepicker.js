import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimePicker = ({ time, onChange }) => {
    return (
        <DateTimePicker 
            mode="time" 
            value={ time }
            onChange={ onChange }
        />
    )
}

export default TimePicker;