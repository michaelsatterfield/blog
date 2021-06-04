import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPost = () =>{
   const promise =  jsonPlaceholder.get('/posts')

    return {
        type: 'FETCH_POSTS',
        payload: promise
    };
};
