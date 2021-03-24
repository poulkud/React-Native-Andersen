import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {LogoTitle} from '../components';
import {THEME} from '../theme';

import {ABOUT_APP} from '../data';

import {LOGO} from '../source/image';

export const AboutScreen = ({}) => {
  return (
    <View style={styles.container}>
      <LogoTitle link={LOGO} customStyle={styles.logo} />
      <Text style={styles.text}>{ABOUT_APP}</Text>
      <Text style={styles.text}>Version 0.1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: THEME.MAIN_COLOR,
    paddingVertical: 40,
  },
  text: {
    color: THEME.WHITE,
    fontFamily: 'OpenSans-Regular',
    fontSize: 24,
    textAlign: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
});
