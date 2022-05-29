import { formatISO } from 'date-fns'

const getDateTimeString = (date, time) => {
    const dateTimeObject = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDay(),
        time.getHours(),
        time.getMinutes(),
        time.getSeconds()
    );
    const formattedDate = formatISO(dateTimeObject);
    console.log(formattedDate);
    return formattedDate
}

export default getDateTimeString;