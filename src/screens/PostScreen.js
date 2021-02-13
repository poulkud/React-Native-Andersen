import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const PostScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text>PostScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
