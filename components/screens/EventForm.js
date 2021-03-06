import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { parseISO } from 'date-fns';

import { EventsContext } from '../../context/events-context'; 
import DatePicker from '../DateTime/datepicker';
import TimePicker from '../DateTime/timepicker';
import Button from '../Button/button';
import getDateTimeString from '../../helpers/formatDateTimeString';
import Card from '../Card/card';

const EventForm = ({ route }) => {

  const { createOrUpdateEvent, getEventById } = useContext(EventsContext);
  const [ event, setEvent ] = useState({
    id: 0,
    name: '',
    date: new Date(),
    time: new Date(),
  });
  
  const navigation = useNavigation();

  useEffect(() => {
    if(route.params.id !== 0) {
      getEventById(route.params.id, function(eventRec) { 
        setEvent({
          ...eventRec[0],
          date: parseISO(eventRec[0].datetime),
          time: parseISO(eventRec[0].datetime),
        })
      })
    }
  }, []);

  const insertEvent = () => {
    const mappedEvent = {
      id: event.id,
      name: event.name,
      datetime: getDateTimeString(event.date, event.time)
    }
    createOrUpdateEvent(mappedEvent);
    navigation.navigate("Events")
  }

  const updateEventName = name => {
    setEvent({
      ...event,
      name: name
    });
  };

  const updateEventDate = date => {
    setEvent({
      ...event,
      date: date
    });
  };

  const updateEventTime = time => {
    setEvent({
      ...event,
      time: time
    });
  };

  return ( 
      <View style={styles.container}>
        <Card>
        <View style={styles.name}>
          <Text
            style={styles.label}
          >
            Name
          </Text>
          <TextInput
            style= { styles.input }
            onChangeText={(name) => updateEventName(name)}
            value={event.name}
            placeholder="Enter name"
          />
        </View>
        <View style={styles.date}>
          <Text
              style={styles.label}
          >
            Date
          </Text>
          <View style={styles.datePicker}>
            <DatePicker 
              date={event.date}
              onChange={updateEventDate}
            />
          </View>
        </View>
        <View style={styles.time}> 
          <Text
            style={styles.label}
          >
            Time
          </Text>
          <TimePicker 
            time={event.time}
            onChange={updateEventTime}
          />
        </View>
        </Card>
        <View
          style={styles.buttonContainer}
        >
          <Button 
            title="Cancel" 
            onPress={() => navigation.navigate("Events")}
          />
          <Button 
            title={
              route.params.id === 0 ? "Insert" :  "Update" + " event"
            } 
            onPress={insertEvent}
          />
        </View>
      </View>
    )
};

EventForm.navigationOptions = {
  title: 'Edit event',
};
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edeff6',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 25,
  },
  label: {
    alignSelf: 'flex-end',
    marginBottom: 8
  },
  input: {
    padding: 8,
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    textAlign: 'right',
  },
  date: {
    alignContent: 'center',
    marginTop: 20,
  },
  datePicker: {
    justifyContent: 'flex-end'
  },
  time: {
    marginTop: 20,
    marginBottom: 20
  }
});

export default EventForm;