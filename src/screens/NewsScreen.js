import React, {useState, useLayoutEffect, useCallback, useEffect} from 'react';
import {
  ScrollView,
  View,
  Share,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {THEME} from '../theme';
import {toggleBookmark, loadSavedNews} from '../store/actions/news';

export const NewsScreen = ({navigation, route}) => {
  const [countFont, setCountFont] = useState(0);
  const [news, setNews] = useState([]);
  const [newsSave, setNewsSave] = useState([]);

  const allSavedNews = useSelector((state) => state.news.allSavedNews);
  const tokenId = useSelector((state) => state.news.tokenId);

  const dispatch = useDispatch();

  const toggleHandler = useCallback(async () => {
    const findIndex = (allSavedNews[tokenId] || []).findIndex(
      (save) => save === news.id,
    );
    const newsBookmark = [...(newsSave || [])];
    if (findIndex === -1) {
      newsBookmark.push(news.id);
    } else {
      newsBookmark.splice(findIndex, 1);
    }
    setNewsSave(newsBookmark);

    await dispatch(toggleBookmark(news.id, tokenId, newsBookmark));
    await dispatch(loadSavedNews());
  }, [allSavedNews, tokenId, newsSave, dispatch, news.id]);

  useEffect(() => {
    setNews(route.params.data);
    setNewsSave(allSavedNews[tokenId]);
  }, [allSavedNews, route.params.data, tokenId]);

  useEffect(() => {
    navigation.setParams({toggleHandler});
  }, [navigation, toggleHandler]);

  useEffect(() => {
    dispatch(loadSavedNews());
  }, [dispatch, navigation]);

  useLayoutEffect(() => {
    const iconName =
      allSavedNews[tokenId] && allSavedNews[tokenId].includes(news.id)
        ? 'bookmark'
        : 'bookmark-outline';

    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity onPress={changeFontDescription}>
            <Icon
              name="font-download"
              size={30}
              color={THEME.WHITE}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleHandler}>
            <Icon
              name={iconName}
              size={30}
              color={THEME.WHITE}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <Icon
              name="share"
              size={30}
              color={THEME.WHITE}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [
    changeFontDescription,
    onShare,
    navigation,
    setCountFont,
    route.params.toggleHandler,
    toggleHandler,
    news.id,
    allSavedNews,
    tokenId,
  ]);

  const changeFontDescription = useCallback(
    () => setCountFont((prev) => (prev >= 2 ? 0 : prev + 1)),
    [],
  );

  const styleFontDescription = () => {
    switch (countFont) {
      case 0:
        return {
          fontSize: 14,
        };
      case 1:
        return {
          fontSize: 20,
        };
      case 2:
        return {
          fontSize: 26,
        };
    }
  };

  const onShare = useCallback(async () => {
    const {description, title} = news;
    try {
      await Share.share({
        message: `${title}
              ${description}
        `,
      });
    } catch (error) {
      console.log('error.message', error.message);
    }
  }, [news]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image style={styles.img} source={{uri: news.img}} />
      </View>
      <View style={styles.wrapper}>
        <Text style={[styles.text, styles.date]}>
          {new Date(news.date).toLocaleDateString()}
        </Text>
        <Text style={[styles.text, styles.title]}>{news.title}</Text>
        <Text style={[styles.text, styleFontDescription()]}>
          {news.description}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
  },
  container: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  wrapper: {
    padding: 10,
    paddingBottom: 30,
  },
  img: {
    width: '100%',
    height: 250,
  },
  date: {
    textAlign: 'right',
    marginBottom: 10,
  },
  text: {
    color: THEME.WHITE,
    fontFamily: 'OpenSans-Regular',
  },
  title: {
    fontSize: 36,
    marginBottom: 10,
  },
});
