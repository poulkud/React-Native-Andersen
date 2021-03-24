import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {AuthContext} from '../navigation/context';
import {THEME} from '../theme';

export const CreateAccount = ({}) => {
  const {signIn} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Account</Text>
      <Button title="Sign In" onPress={() => signIn()} />
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
