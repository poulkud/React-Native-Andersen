import React from 'react';
import {StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import {
  MainScreen,
  SavedScreen,
  NewsScreen,
  AboutScreen,
  SignIn,
  SignOut,
  CreateAccount,
} from '../screens';
import {LogoTitle} from '../components';

import {THEME} from '../theme';
import {LOGO} from '../source/image';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    height: 100,
    backgroundColor: THEME.NAVIGATION_COLOR,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerTintColor: THEME.WHITE,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={() => ({
          title: 'Latest New',
          headerBackTitle: null,
          headerRight: (props) => <LogoTitle link={LOGO} {...props} />,
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="News"
        component={NewsScreen}
        options={() => ({
          title: null,
          headerBackTitleStyle: styles.headerBackTitleStyle,
          headerBackTitle: 'Latest New',
        })}
      />
    </Stack.Navigator>
  );
};

const SavedStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Saved"
        component={SavedScreen}
        options={{title: 'Saved'}}
      />
    </Stack.Navigator>
  );
};

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{title: 'About'}}
      />
    </Stack.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} headerMode="none">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: 'Sign In'}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerBackTitleStyle: {
    marginLeft: 10,
    fontSize: 20,
  },
});

export {
  AboutStackNavigator,
  MainStackNavigator,
  SavedStackNavigator,
  AuthStackNavigator,
};
