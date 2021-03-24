import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const LogoTitle = ({link, customStyle = {}, ...props}) => (
  <Image style={[styles.logo, customStyle]} source={link} {...props} />
);

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});
