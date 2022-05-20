import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ListItem = ({ event }) => {
    return (
        <View>
            <Text>{event.name}</Text>
        </View>
    )
}

export default ListItem;