import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { EventsContext } from '../../context/events-context'; 
import List from '../List/list';

const HomeScreen = () => {
  const { events } = useContext(EventsContext);

  return (
    <View style={styles.container}>    
      <List items={events} isLoaded={ events != undefined }/>
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