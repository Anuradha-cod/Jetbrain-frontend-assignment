import { GET_ALBUM, GET_COMMENT, GET_PHOTOS, GET_POST } from "../types";

const initialState = {
  album: [],
  photos: [],
  comment: [],
  post: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALBUM:
      return { ...state, album: payload };
    case GET_PHOTOS:
      return { ...state, photos: payload };
    case GET_COMMENT:
      return { ...state, comment: payload };
    case GET_POST:
      return { ...state, post: payload };

    default:
      return { ...state };
  }
};
