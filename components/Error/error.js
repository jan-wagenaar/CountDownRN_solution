import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

const ErrorMessage = ({ errorMessage }) => {
    return (
        <SafeAreaView
            style={styles.container}
        >
            <Text
                style={styles.smiley}
            >
                😥
            </Text>
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
        fontSize: 100,
        marginBottom: 20
    },
    errorText: {
        fontSize: 32,
    }
  });

export default ErrorMessage;