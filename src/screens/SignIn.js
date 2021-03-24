import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {LogoTitle, Button} from '../components';

import auth from '@react-native-firebase/auth';
import {AuthContext} from '../navigation/context';

import {LOGO} from '../source/image';
import {THEME} from '../theme';

import {getToken} from '../store/actions/news';
import {useDispatch} from 'react-redux';

export const SignIn = ({navigation}) => {
  const {signIn} = useContext(AuthContext);

  GoogleSignin.configure({
    webClientId:
      '855419915412-a8bsucpb3akkl66jv7nb6l6dir2g5q7m.apps.googleusercontent.com',
  });

  const dispatch = useDispatch();

  const GoogleSignIn = () => {
    return (
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress().then((item) => {
            signIn(item.additionalUserInfo.profile.sub);
            dispatch(getToken(item.additionalUserInfo.profile.sub));
          })
        }
      />
    );
  };

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <View style={[styles.container, styles.wrapper]}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          Hello! This is interested application about news in the world
        </Text>
        <LogoTitle link={LOGO} customStyle={styles.logo} />
        <Text style={styles.text}>Enjoy your use</Text>
      </View>
      <View style={[styles.buttonContainer, styles.wrapper]}>
        <GoogleSignIn />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.MAIN_COLOR,
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 10,
  },
  wrapper: {
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
    width: '65%',
  },
  text: {
    color: THEME.WHITE,
    fontFamily: 'OpenSans-Regular',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    padding: 40,
  },
  logo: {
    width: 180,
    height: 180,
  },
});
