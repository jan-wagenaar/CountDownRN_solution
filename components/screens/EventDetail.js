import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { parseISO } from 'date-fns';

import { EventsContext } from '../../context/events-context'; 
import Card from '../Card/card';
import Button from '../Button/button';
import formatDistanceString from '../../helpers/formatDistance';

const EventDetail = ({ route }) => {

  const { getEventById, deleteEventById } = useContext(EventsContext);
  const [ event, setEvent ] = useState({
    id: 0,
    name: '',
    date: new Date(),
    time: new Date(),
  });

  const { showActionSheetWithOptions } = useActionSheet();
  const navigation = useNavigation();

  useEffect(() => {
    if(route.params.id !== 0) {
      getEventById(route.params.id, function(eventRec) { 
        setEvent({
          ...eventRec[0],
          datetime: parseISO(eventRec[0].datetime),
        })
      })
    }
  }, [] )

  const confirmDeleteEvent = () => {
    const options = ['Delete', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if(buttonIndex === 0) {
          deleteEvent();
        }
      }
    );
  }

  const deleteEvent = () => {
    deleteEventById(event.id);
    navigation.navigate('Events');
  }

  return (
      <View
        style={styles.container}
      >
        <Card
          style={{alignItems: 'center', justifyContent: 'center'}}
        >
          <Text 
            style={styles.header}
          >
            {formatDistanceString(event.datetime)}
          </Text>
          <Text 
            style={styles.text}
          >
            {event.name}
          </Text>
        </Card>
        <View 
          style={styles.buttonContainer}
        >
          <Button 
            title="Delete event"
            onPress={confirmDeleteEvent}
            style={{marginRight: 10}}
          />
          <Button 
            primary
            title="Edit event"
            onPress={() => navigation.navigate('EventForm', {
              id: event.id
            })
          }
          />
        </View>
      </View>
  );
};

EventDetail.navigationOptions = {
  title: 'View event',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edeff6',
  },
  header: {
    color: '#000',
    fontSize: 32,
    fontWeight: '600',
    alignSelf: 'center',
  },
  text: {
    color: '#000',
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 25,
  }
});

export default EventDetail;