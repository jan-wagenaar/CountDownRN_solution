import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

const ErrorMessage = ({ errorMessage }) => {
    return (
        <SafeAreaView
            style={styles.container}
        >
            <Text>😥</Text>
            <Text
                style={styles.errorMessage}
            >
                {errorMessage}
            </Text>
      </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#edeff6',
    },
    smiley: {
        fontSize: 32,
    },
    errorText: {
        fontSize: 24,
    }
  });

export default ErrorMessage;