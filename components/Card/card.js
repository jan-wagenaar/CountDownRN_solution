import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = ({children}) => {
    return (
        <View
         style={styles.container}
        >
          {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fefefe',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#dee2e6'
    }
  });

export default Card;