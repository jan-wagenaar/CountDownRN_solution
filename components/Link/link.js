import React, { Children } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Link = ({onPress,children}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
};

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       paddingHorizontal: 10
//     },
//     button: {
//       alignItems: "center",
//       backgroundColor: "#DDDDDD",
//       padding: 10
//     },
//     countContainer: {
//       alignItems: "center",
//       padding: 10
//     }
//   });

export default Link;