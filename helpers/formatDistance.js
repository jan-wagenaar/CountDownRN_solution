import { formatDistanceToNow } from 'date-fns'

const formatDistance = (date) => {
    return formatDistanceToNow(date, { addSuffix: true });
}

export default formatDistance