import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {THEME} from './src/theme';

import {MainScreen} from './src/screens/MainScreen';
import {AboutScreen} from './src/screens/AboutScreen';
import {BookedScreen} from './src/screens/BookedScreen';
import {CreateScreen} from './src/screens/CreateScreen';
import {PostScreen} from './src/screens/PostScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: THEME.MAIN_COLOR,
          },
          headerTintColor: THEME.WHITE,
          headerTitleStyle: {
            fontFamily: 'OpenSans-Bold',
          },
        }}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{title: 'Main'}}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={({route}) => ({
            title: `Пост от ${new Date(
              route.params.date,
            ).toLocaleDateString()}`,
          })}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{title: 'About'}}
        />
        <Stack.Screen
          name="Booked"
          component={BookedScreen}
          options={{title: 'Booked'}}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{title: 'Create'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
