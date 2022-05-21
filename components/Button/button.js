import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Link from '../Link/link';

const Button = ({ title, onPress }) => {
    return (
      <Link 
        onPress={onPress}
      >
        <View
         style={ styles.container }
        >
          <Text
            style={ styles.text }
          >
            { title }
          </Text>
        </View>
      </Link>
    )
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#0b2d4d',
      padding: 16,
      margin: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#dee2e6',
      borderRadius: 4,
    },
    text: {
      color: '#fff',
    }
  });

export default Button;