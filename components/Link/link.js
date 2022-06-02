import React from "react";
import { TouchableOpacity } from "react-native";

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