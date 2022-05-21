import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import EventDetail from './EventDetail';
import EventForm from './EventForm';
import Link from '../Link/link';


const Stack = createStackNavigator();

const EventStack = () => {
    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Events" 
                component={HomeScreen} 
                options={{
                    headerRight: () => (
                        <Link
                            onPress={() => navigation.navigate('EventForm', { 
                                id: 0
                            })}
                            title="Info"
                        >
                          <Ionicons Ionicons name="add-outline"  size={32} />
                        </Link>
                    ),
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

export default EventStack;