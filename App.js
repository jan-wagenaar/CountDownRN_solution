import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Ionicons } from '@expo/vector-icons';

import useDatabase from './hooks/useDatabase';
import {EventsContextProvider} from './context/EventsContext';
import EventStack from './components/screens/EventStack';

const Tab = createBottomTabNavigator();

export const AppTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Events" 
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen 
        name="Overview" 
        component={EventStack} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons Ionicons name="list-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
SplashScreen.preventAutoHideAsync(); //don't let the splash screen hide
const isDBLoadingComplete = useDatabase();

  if (isDBLoadingComplete) {
    SplashScreen.hideAsync();

    return (
      <EventsContextProvider>
        <ActionSheetProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </ActionSheetProvider>
      </EventsContextProvider>
    );
  } else {
    return (
      <SafeAreaView>
        <Text>😥</Text>
        <Text>App cannot be loaded</Text>
      </SafeAreaView>
    );
  }
}