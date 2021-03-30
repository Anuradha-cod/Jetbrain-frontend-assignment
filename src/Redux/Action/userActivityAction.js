import { GET_COMMENT, GET_POST, GET_ALBUM, GET_PHOTOS } from "../types";
import axios from "axios";
import { baseUrl } from "../../constants";

export const getPost = () => async (dispatch) => {
  const res = await axios.get(baseUrl + "posts" + "?_limit=25");
  dispatch({ type: GET_POST, payload: res.data });
};
export const getComment = () => async (dispatch) => {
  const res = await axios.get(baseUrl + "comments" + "?_limit=25");
  dispatch({ type: GET_COMMENT, payload: res.data });
};

export const getAlbum = () => async (dispatch) => {
  const res = await axios.get(baseUrl + "albums" + "?_limit=25");
  dispatch({ type: GET_ALBUM, payload: res.data });
};
export const getPhotos = () => async (dispatch) => {
  const res = await axios.get(baseUrl + "photos" + "?_limit=25");
  dispatch({ type: GET_PHOTOS, payload: res.data });
};
