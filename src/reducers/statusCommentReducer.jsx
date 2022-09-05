const defaultState = {
    commentEditStatus : false
  }
  
    
  export const statusReducer = (state=defaultState, action) => {
      switch (action.type) {
          case 'TOGGLE_IS_COMMENT_EDIT_STATUS' : 
              return {
                ...state, 
                commentEditStatus: !state.commentEditStatus
              }
                 
        default:
          return state;
      }
    }