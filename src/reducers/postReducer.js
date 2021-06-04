



// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action ) => {
    //only use whats int the reducer like args and computations on those args etc
 switch (action.type){
     case 'FETCH_POSTS':
         return action.payload;
     default:
         return state;
 }

};

