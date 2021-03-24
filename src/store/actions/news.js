import axios from 'axios';

import {LOAD_NEWS, LOAD_SAVED_NEWS, TOGGLE_BOOKMARK, TOKEN_ID} from '../types';

export const loadNews = () => {
  return async (dispatch) => {
    const {data} = await axios.get(
      'https://awesomeproject-53fc0-default-rtdb.firebaseio.com/NEWS.json',
    );
    dispatch({
      type: LOAD_NEWS,
      payload: data,
    });
  };
};

export const loadSavedNews = () => {
  return async (dispatch) => {
    const {data} = await axios.get(
      'https://awesomeproject-53fc0-default-rtdb.firebaseio.com/BOOKMARK.json',
    );

    dispatch({
      type: LOAD_SAVED_NEWS,
      payload: data,
    });
  };
};

export const getToken = (id) => {
  return {
    type: TOKEN_ID,
    payload: id,
  };
};

export const toggleBookmark = (id, token, data) => {
  return async (dispatch) => {
    await axios.put(
      `https://awesomeproject-53fc0-default-rtdb.firebaseio.com/BOOKMARK/${token}.json`,
      data,
    );
    dispatch({
      type: TOGGLE_BOOKMARK,
      payload: id,
    });
  };
};
