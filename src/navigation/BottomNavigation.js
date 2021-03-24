import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {THEME} from '../theme';
import {MainStackNavigator, SavedStackNavigator} from './StackNavigation';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: THEME.WHITE,
        style: styles.wrapperTab,
      }}>
      <Tab.Screen
        name="Main"
        component={MainStackNavigator}
        options={() => ({
          tabBarLabel: 'Latest News',
          tabBarIcon: ({color}) => (
            <Icon name="article" size={30} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Saved"
        component={SavedStackNavigator}
        options={() => ({
          tabBarLabel: 'Saved',
          tabBarIcon: ({color}) => (
            <Icon name="bookmark-outline" size={30} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  wrapperTab: {
    backgroundColor: THEME.NAVIGATION_COLOR,
    paddingTop: 5,
    borderTopWidth: 0,
  },
});
