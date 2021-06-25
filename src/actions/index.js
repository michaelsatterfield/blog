import _ from 'lodash'
import jsonPlaceholder from "../apis/jsonPlaceholder";


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPost())

    //lodash used to find unique ids!
 const userIds =_.uniq(_.map(getState().posts,'userId'))
    console.log(userIds)
    userIds.forEach(id => dispatch(fetchUser(id)))
}


//action creator with thunk middleware
// asynchronous api action creator!!
export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({type: 'FETCH_POSTS', payload: response.data})
};


//action creator api to return users by id
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data})
};


//memoized to only fetch user 1 time ,saving bandwidth or overfetching!
// const _fetchUser = _.memoize(async(id, dispatch) =>{
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//
//     dispatch({type: 'FETCH_USER', payload: response.data})
// });


