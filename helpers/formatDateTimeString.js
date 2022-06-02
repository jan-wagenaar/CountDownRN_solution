import { formatISO } from 'date-fns'

const getDateTimeString = (date, time) => {
    const dateTimeObject = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        time.getHours(),
        time.getMinutes(),
        time.getSeconds()
    );

    const formattedDate = formatISO(dateTimeObject);
    
    return formattedDate
}

export default getDateTimeString;