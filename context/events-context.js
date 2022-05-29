// force the state to clear with fast refresh in Expo
// @refresh reset
import React, { createContext, useState, useEffect } from 'react';
import { parseISO } from 'date-fns';
import { database } from '../database/database'
export const EventsContext = createContext({});

export const EventsContextProvider = props => {
  // Initial values are obtained from the props
  const {
    events: initialEvents,
    children
  } = props;

  const [events, setEvents] = useState(initialEvents);

  useEffect(() => {
    refreshEvents()
  }, [] )

  const createOrUpdateEvent = (event) => {
    if(event.id === 0) {
      return database.insertEvent(event, refreshEvents);
    } else {
      return database.updateEventById(event, refreshEvents)
    }
  };

  // const getEvents = async (setEventsFunc) => {
  //   const events = await database.getEvents(items => items);
  //   const mappedEvents = mapEvents(events);

  //   return setEventsFunc(mappedEvents);
  // };

  const getEventById = (id, setEventFunc) => {
    return database.getEventById(id, setEventFunc);
  }

  const deleteEventById = ( id ) => {
    return database.deleteEventById(id, refreshEvents)
  }

  // const mapEvents = events => {
  //   const mappedEvents = events.map(event => {
  //     return {
  //       ...event,
  //       datetime: parseISO(event.datetime)
  //     }
  //   });

  //   return mappedEvents;
  // };

  const mapAndSetEvents = newEvents => {
    const mappedEvents = newEvents.map(event => {
      return {
        ...event,
        datetime: parseISO(event.datetime)
      }
    });

    setEvents(mappedEvents);
  }

  const refreshEvents = () =>  {
    return database.getEvents(mapAndSetEvents)
  }

  // Make the context object:
  const eventsContext = {
    events,
    createOrUpdateEvent,
    getEventById,
    deleteEventById
  };

  // pass the value in provider and return
  return <EventsContext.Provider value={eventsContext}>{children}</EventsContext.Provider>;
};