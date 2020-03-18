import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/main';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#DA552F'
          },
          headerTintColor: '#FFFFFF'
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'JSHunt'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;