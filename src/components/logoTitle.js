import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const LogoTitle = ({link, ...props}) => (
  <Image style={styles.logo} source={link} {...props} />
);

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    resizeMode: 'stretch',
  },
});
