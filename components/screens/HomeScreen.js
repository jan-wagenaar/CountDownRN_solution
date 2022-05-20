import React, {useState, useEffect, useContext } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

// import useEvents from '../../hooks/useEvents';
import { EventsContext } from '../../context/EventsContext'; 
import EventList from '../List/eventList';

const HomeScreen = () => {
  const [ events, setEvents ] = useState();
  const { getEvents } = useContext(EventsContext);

  useEffect(() => {
    getEvents(setEvents);
    // console.log(events)
  }, [])

  return (
    <View style={styles.container}>    
      <EventList events={events} isLoaded={ events != undefined }/>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 10,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;