import _ from 'lodash'
import jsonPlaceholder from "../apis/jsonPlaceholder";

//action creator with thunk middleware
// asynchronous api action creator!!
export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({type: 'FETCH_POSTS', payload: response.data})
};


//action creator api to return users by id
// export const fetchUser = (id) => async dispatch => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//
//     dispatch({type: 'FETCH_USER', payload: response.data})
// };


export const fetchUser = function (id) {
    return async function (dispatch) {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({type: 'FETCH_USER', payload: response.data})
    }
};
