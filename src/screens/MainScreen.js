import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Post} from '../components';
import {DATA} from '../data';
import {THEME} from '../theme';

export const MainScreen = ({navigation}) => {
  const goToPost = (post) => {
    navigation.navigate('Post', {postId: post.id, date: post.date});
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({item}) => <Post post={item} onOpen={goToPost} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME.MAIN_COLOR,
    padding: 5,
  },
});
