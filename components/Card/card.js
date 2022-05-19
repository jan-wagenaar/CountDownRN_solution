import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = () => {
    return (
        <View
         style={styles.container}
        >

        </View>
    )
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

export default Card;