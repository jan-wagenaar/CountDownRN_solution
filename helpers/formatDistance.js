import { formatDistanceToNow } from 'date-fns'

const formatDistance = (date) => {
    const distanceString = formatDistanceToNow(date, { addSuffix: true });
    const capitalizedString = distanceString.charAt(0).toUpperCase() + distanceString.slice(1)
    
    return capitalizedString;
}

export default formatDistance