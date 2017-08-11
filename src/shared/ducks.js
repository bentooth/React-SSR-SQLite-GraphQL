import "isomorphic-fetch";

// Actions
const FETCH_ALBUMS_REQUEST = "FETCH_ALBUMS_REQUEST";
const FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS";
const FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE";

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case FETCH_ALBUMS_SUCCESS:
      return { ...state, albums: action.payload };

    default:
      return state;
  }
}

// Action Creators
const requestAlbums = () => ({ type: FETCH_ALBUMS_REQUEST });
const receivedAlbums = albums => ({ type: FETCH_ALBUMS_SUCCESS, payload: albums });
const albumsError = () => ({ type: FETCH_ALBUMS_FAILURE });

export const fetchAlbums = () => (dispatch, getState) => {
  dispatch(requestAlbums());
  return fetch("http://localhost:4000/graphql?query={products{id,name}}")
    .then(response => response.json())
    .then(albums => dispatch(receivedAlbums(albums)))
    .catch(err => dispatch(albumsError(err)));
};
