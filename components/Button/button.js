import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Link from '../Link/link';

const Button = ({ title, onPress, warning }) => {
    return (
      <Link 
        onPress={onPress}
      >
        <View
         style={
          [ 
            styles.container, 
            warning ? styles.warning : styles.default 
          ]
        }
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
      padding: 16,
      margin: 5,
      borderRadius: 4,
    },
    default: {
      backgroundColor: '#0b2d4d',
    }, 
    warning: {
      backgroundColor: '#d50000',
    },
    text: {
      color: '#fff',
    }
  });

export default Button;