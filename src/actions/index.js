import jsonPlaceholder from "../apis/jsonPlaceholder";

//action creator with thunk middleware
export const fetchPost = () => {
    return async function (dispatch, getState) {
        const response = await jsonPlaceholder.get('/posts')

      dispatch({ type:'FETCH_POSTS', payload: response})
    };
};
