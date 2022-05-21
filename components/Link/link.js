import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Link = ({onPress, children}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
};

export default Link;