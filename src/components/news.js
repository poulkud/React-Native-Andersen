import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {THEME} from '../theme';

export const News = ({news, onOpen}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onOpen(news)}>
      <View style={styles.news}>
        <ImageBackground style={styles.img} source={{uri: news.img}}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {new Date(news.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  news: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: THEME.WHITE,
    fontFamily: 'OpenSans-Regular',
  },
});
