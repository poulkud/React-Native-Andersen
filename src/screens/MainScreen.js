import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useDispatch, useSelector} from 'react-redux';
import {loadNews} from '../store/actions/news';

import {News, Loading} from '../components';

import {THEME} from '../theme';

export const MainScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const goToPost = (news) => {
    navigation.navigate('News', {data: news});
  };

  const dispatch = useDispatch();

  const fetchAPI = useCallback(async () => {
    setLoading(true);
    dispatch(loadNews());
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  const allNews = useSelector((state) => state.news.allNews);

  const resultNews = allNews.length ? (
    <FlatList
      data={allNews}
      keyExtractor={(news) => news.id.toString()}
      renderItem={({item}) => <News news={item} onOpen={goToPost} />}
    />
  ) : (
    <View style={[styles.wrapper, styles.noItemWrapper]}>
      <Icon name="article" size={100} color={THEME.WHITE} />
      <Text style={styles.text}>News not found</Text>
    </View>
  );

  return (
    <View style={styles.wrapper}>{loading ? <Loading /> : resultNews}</View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    backgroundColor: THEME.MAIN_COLOR,
    padding: 5,
  },
  noItemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: THEME.WHITE,
    fontSize: 24,
  },
});
