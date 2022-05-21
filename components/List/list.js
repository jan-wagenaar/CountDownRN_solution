import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ListItem from './list-item';

const List = ({ items, isLoaded }) => {
  if(isLoaded) {
    return (
      <ScrollView style={styles.container}>
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
          // <View></View>
        ))}
      </ScrollView>
    )
  } else {
     return <View></View>
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});

export default List;