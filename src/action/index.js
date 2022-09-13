import getId from '../additionalАunctions/getId';
import {ADD_COMMENT, DELETE_COMMENT, TOGGLE_IS_COMMENT_EDIT_STATUS} from './actionTypes'

export const addComment = (name, comment, date) => {
    return {
        type: ADD_COMMENT,
        id: getId(),
        name,
        comment,
        date,
    }
}

export const btnComment = (name, comment, date) => {
    console.log(name, comment, date)
    return {
        type: 'BTN_COMMENT',
        id: getId(),
        name,
        comment,
        date,
    }
}



export const editComment = () => {
    return {
        type: TOGGLE_IS_COMMENT_EDIT_STATUS,
    }
}

export const deleteComment = (id) => {
    return {
        type: DELETE_COMMENT,
        id
    }
}
