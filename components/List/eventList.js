import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ListItem from './listItem';

const EventList = ({ events, isLoaded }) => {

  const getContent = () => {
    if(isLoaded) {
      return (
        <ScrollView style={styles.container}>
          {events.map((event) => (
            <ListItem key={event.id} event={event} />
            // <View></View>
          ))}
        </ScrollView>
      )
    } else {
       return <View></View>
    }
  }
  return getContent();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});

export default EventList;