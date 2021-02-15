import React, {useLayoutEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {Post} from '../components/post';
import {DATA} from '../data';

export const MainScreen = ({navigation}) => {
  const goToPost = (post) => {
    navigation.navigate('Post', {postId: post.id, date: post.date});
  };

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
  //         <Item
  //           title="take photo"
  //           iconName="alert-outline"
  //           onPress={() => console.log('Press')}
  //         />
  //       </HeaderButtons>
  //     ),
  //   });
  // }, [navigation]);

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
    padding: 10,
  },
});
