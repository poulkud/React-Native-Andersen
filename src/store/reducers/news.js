import {LOAD_NEWS, LOAD_SAVED_NEWS, TOGGLE_BOOKMARK, TOKEN_ID} from '../types';

const initialState = {
  allNews: [],
  bookmarkNews: [],
  allSavedNews: [],
  tokenId: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NEWS:
      return {
        ...state,
        allNews: action.payload,
      };
    case LOAD_SAVED_NEWS:
      return {
        ...state,
        allSavedNews: action.payload,
      };
    case TOGGLE_BOOKMARK:
      const allNews = state.allNews.map((news) => {
        if (news.id === action.payload) {
          news.bookmark = !news.bookmark;
        }
        return news;
      });
      return {
        ...state,
        allNews,
        bookmarkNews: allNews.filter((news) => news.bookmark),
      };
    case TOKEN_ID:
      return {
        ...state,
        tokenId: action.payload,
      };
    default:
      return state;
  }
};
