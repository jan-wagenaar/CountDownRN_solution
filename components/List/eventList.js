import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ListItem from './listItem';

const EventList = ({ events }) => {
    console.log('rendering');
  return (
    <ScrollView style={styles.container}>
      {events && events.map((event) => (
        <ListItem key={event.id} event={event} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});

export default EventList;