import React from 'react';
import {ScrollView, View, Text, Image, Button, StyleSheet} from 'react-native';
import {DATA} from '../data';
import {THEME} from '../theme';

export const PostScreen = ({navigation, route}) => {
  const postId = route.params.postId;

  const post = DATA.find((p) => p.id === postId);

  const removePost = () => {};

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.img} source={{uri: post.img}} />
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button title="Delete" color={THEME.DANGER_COLOR} onPress={removePost} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
  },
  wrapperTitle: {
    padding: 10,
  },
  title: {
    fontFamily: 'OpenSans-Regular',
  },
});
