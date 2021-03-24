import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {AuthContext} from '../navigation/context';
import {THEME} from '../theme';

export const SignOut = ({}) => {
  const {signOut} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SignOut</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
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
});
