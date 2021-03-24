import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {AboutStackNavigator} from './StackNavigation';
import {BottomNavigation} from './BottomNavigation';

import {THEME} from '../theme';

import {AuthContext} from '../navigation/context';

const Drawer = createDrawerNavigator();

const drawerContOptions = {
  activeTintColor: THEME.WHITE,
  labelStyle: {color: THEME.WHITE},
};

const DrawerNavigation = () => {
  const {signOut} = useContext(AuthContext);

  return (
    <Drawer.Navigator
      drawerStyle={styles.wrapperDrawer}
      drawerContentOptions={drawerContOptions}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Sign Out"
              onPress={signOut}
              activeTintColor={drawerContOptions.activeTintColor}
              labelStyle={drawerContOptions.labelStyle}
            />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name="Main" component={BottomNavigation} />
      <Drawer.Screen name="About" component={AboutStackNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  wrapperDrawer: {
    backgroundColor: THEME.NAVIGATION_COLOR,
  },
});

export default DrawerNavigation;
