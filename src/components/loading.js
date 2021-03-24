import React, {useRef, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {LogoTitle} from '../components';
import {LOGO} from '../source/image';
import { THEME } from '../theme';

export const Loading = (props) => {
  const fadeAnim = useRef(new Animated.Value(50)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 60,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="pulse"
        iterationCount="infinite"
        style={styles.wrapper}>
        <LogoTitle link={LOGO} customStyle={styles.logo} />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.MAIN_COLOR,
    paddingVertical: 40,
  },
  wrapper: {
    width: 120,
    height: 120,
  },
  logo: {
    height: '100%',
    width: '100%',
  },
});
