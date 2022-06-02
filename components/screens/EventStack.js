import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import EventDetail from './EventDetail';
import EventForm from './EventForm';
import Link from '../Link/link';


const Stack = createStackNavigator();

const LinkNew = () => {
    const navigation = useNavigation();

    return (
        <View
            style={styles.addLink}
        >
            <Link
                onPress={() => navigation.navigate('EventForm', { 
                    id: 0
                })}
                title="Info"
                style={ styles.addLink }
            >
                <Ionicons 
                    Ionicons 
                    name="add-outline" 
                    size={32}
                />
            </Link>
        </View>
    )
}

const EventStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Events" 
                component={HomeScreen} 
                options={{
                    headerRight: LinkNew
                }}
            />
            <Stack.Screen 
                name="EventDetail" 
                component={EventDetail} 
                options={
                    {
                        title: 'View event'
                    }
                }
            />
            <Stack.Screen 
                name="EventForm" 
                component={EventForm} 
                options={
                    {
                        title: 'Edit event'
                    }
                }
            />
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    addLink: {
      paddingRight: 10,
    }
  });

export default EventStack;