import jsonPlaceholder from "../apis/jsonPlaceholder";

//action creator with thunk middleware
// asynchronous api action creator!!
export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({type: 'FETCH_POSTS', payload: response})
};

