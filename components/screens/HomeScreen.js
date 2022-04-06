import React, {useState, useContext} from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

import { EventsContext } from '../../context/EventsContext';

export default function HomeScreen() {
  const [ name, setName ] = useState(null);

  const eventsContext = useContext(EventsContext)
  const { events, addNewEvent } = eventsContext;

  const insertEvent = () => {
    addNewEvent(name);
  }

  return (
    <View style={styles.container}>
      <Text>Our list of events</Text>
      {events.map((event) => (
        <Text key={event.id}>{event.name}</Text>
      ))}

      <TextInput
        style= { styles.input }
        onChangeText={(name) => setName(name)}
        value={name}
        placeholder="enter new name..."
      />
      <Button title="insert event" onPress={insertEvent}/>
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