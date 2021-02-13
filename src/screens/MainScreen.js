import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const MainScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
    </View>
  );
};

MainScreen.navigationOptions = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
