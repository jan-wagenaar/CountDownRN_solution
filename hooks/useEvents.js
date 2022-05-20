import { EventsContextProvider } from '../context/EventsContext';

const useEvents = () => {
    const { 
        events,
        getEvents,
        createOrUpdateEvent,
        getEventById,
        deleteEventById 
    } = EventsContextProvider;

    return {
        events,
        getEvents,
        createOrUpdateEvent,
        getEventById,
        deleteEventById
    }
}

export default useEvents;