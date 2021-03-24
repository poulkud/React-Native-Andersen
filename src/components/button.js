import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {THEME} from '../theme';

export const Button = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.screenContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: THEME.YELLOW,
    backgroundColor: THEME.YELLOW,
  },
  appButtonText: {
    fontSize: 24,
    color: THEME.BLACK,
    alignSelf: 'center',
  },
});
