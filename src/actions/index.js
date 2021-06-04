import jsonPlaceholder from "../apis/jsonPlaceholder";

//action creator
export const fetchPost = () => {
    return function (dispatch, getState) {
        const promise = jsonPlaceholder.get('/posts')

        return {
            type: 'FETCH_POSTS',
            payload: promise
        }
    };
};
