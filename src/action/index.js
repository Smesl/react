import getId from '../additionalАunctions/getId';
import {ADD_COMMENT, DELETE_COMMENT} from './actionTypes'

export const addComment = (name, comment, date) => {
    return {
        type: ADD_COMMENT,
        id: getId(),
        name,
        comment,
        date,
    }
}

export const deleteComment = (id) => {
    return {
        type: DELETE_COMMENT,
        id
    }
}
