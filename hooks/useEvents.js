import {EventsContextProvider} from '../context/EventsContext';

const useEvents = () => {
    const { 
        events,
        createOrUpdateEvent,
        getEventById,
        deleteEventById 
    } = EventsContextProvider;

    return {
        events,
        createOrUpdateEvent,
        getEventById,
        deleteEventById
    }
}

export default useEvents;