import React, {useState, useLayoutEffect, useCallback} from 'react';
import {
  ScrollView,
  View,
  Share,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {LogoTitle} from '../components';
import {DATA} from '../data';
import {THEME} from '../theme';
import {FONT, BOOKMARK, SHARE} from '../source/image';

export const PostScreen = ({navigation, route}) => {
  const [countFont, setCountFont] = useState(0);

  const changeFontDescription = useCallback(() => {
    setCountFont((prev) => (prev >= 2 ? 0 : prev + 1));
  }, []);

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
    const {description, title} = post;
    try {
      await Share.share({
        message: `${title}
              ${description}
        `,
      });
    } catch (error) {
      console.log('error.message', error.message);
    }
  }, [post]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props) => (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity onPress={changeFontDescription}>
            <LogoTitle link={FONT} {...props} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('BOOKMARK')}>
            {/* <LogoTitle link={BOOKMARK} {...props} /> */}
            <Icon name="language" size={30} color="#900" />;
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <LogoTitle link={SHARE} {...props} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [changeFontDescription, onShare, navigation, setCountFont]);

  const postId = route.params.postId;
  const post = DATA.find((p) => p.id === postId);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image style={styles.img} source={{uri: post.img}} />
      </View>
      <View style={styles.wrapper}>
        <Text style={[styles.text, styles.date]}>
          {new Date(post.date).toLocaleDateString()}
        </Text>
        <Text style={[styles.text, styles.title]}>{post.title}</Text>
        <Text style={[styles.text, styleFontDescription()]}>
          {post.description}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
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
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
  },
  title: {
    fontSize: 36,
    marginBottom: 10,
  },
});
