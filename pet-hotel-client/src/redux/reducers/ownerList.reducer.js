//stores all owners returned from DB
const ownerListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_OWNER':
        return action.payload;
      case 'MAKE_OWNER':
        return action.payload;    
    //   case 'CLEAR_OWNER':
    //     return [] or action.payload;
      default:
        return state;
    }
  };
  
  export default ownerListReducer;