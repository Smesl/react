import {ADD_COMMENT, DELETE_COMMENT} from '../action/actionTypes'

const widgetCommentsReducer = (state = [],  {id, name, comment, date, type}) => {
    switch(type){
        case ADD_COMMENT:
            return [
                   ...state,{
                    id,
                    name,
                    comment,
                    date
                  },
            ]
        case DELETE_COMMENT:
          return state.filter(comment => comment.id !== id);  

          default:
            return state;
    }
}

export default widgetCommentsReducer;