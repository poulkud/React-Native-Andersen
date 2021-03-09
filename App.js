import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

import {LogoTitle} from './src/components';
import {THEME} from './src/theme';
import {LOGO} from './src/source/image';

import {
  MainScreen,
  AboutScreen,
  BookedScreen,
  CreateScreen,
  PostScreen,
} from './src/screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            height: 110,
            backgroundColor: THEME.MAIN_COLOR,
          },
          headerTintColor: THEME.WHITE,
        }}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: 'Новости',
            headerBackTitle: null,
            headerRight: (props) => <LogoTitle link={LOGO} {...props} />,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={({route}) => ({
            title: null,
            headerBackTitleStyle: {marginLeft: 30},
            headerBackTitle: 'Новости',
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
