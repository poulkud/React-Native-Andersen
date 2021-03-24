import React, {useCallback, useState, useEffect, useLayoutEffect} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';

import {loadNews, loadSavedNews} from '../store/actions/news';

import {News, Loading} from '../components';
import {THEME} from '../theme';

export const SavedScreen = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const [bookmarkNews, setBookmarkNews] = useState([]);

  const allNews = useSelector((state) => state.news.allNews);
  const allSavedNews = useSelector((state) => state.news.allSavedNews);
  const tokenId = useSelector((state) => state.news.tokenId);

  const goToPost = (news) => {
    navigation.navigate('News', {
      data: {...news},
    });
  };

  const dispatch = useDispatch();

  const savedBookmark = useCallback(async () => {
    const result = allSavedNews[tokenId].map((save) => {
      const news = allNews.find((item) => item.id === save);
      return {...news};
    });
    setBookmarkNews(result);
  }, [allNews, allSavedNews, tokenId]);

  const fetchAPI = useCallback(async () => {
    setLoading(true);
    await dispatch(loadNews());
    await dispatch(loadSavedNews());
    setLoading(false);
  }, [dispatch]);

  const updateSavedNews = useCallback(() => {
    fetchAPI();
  }, [fetchAPI]);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  useEffect(() => {
    savedBookmark();
  }, [savedBookmark]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity onPress={updateSavedNews}>
            <Icon
              name="update"
              size={30}
              color={THEME.WHITE}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, updateSavedNews]);

  const resultSavedNews = bookmarkNews.length ? (
    <FlatList
      data={bookmarkNews}
      keyExtractor={(news) => news.id.toString()}
      renderItem={({item}) => <News news={item} onOpen={goToPost} />}
    />
  ) : (
    <View style={[styles.wrapper, styles.noItemWrapper]}>
      <Icon name="bookmark-outline" size={100} color={THEME.WHITE} />
      <Text style={styles.text}>News not found</Text>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      {loading ? <Loading /> : resultSavedNews}
    </View>
  );
};

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
  },
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
