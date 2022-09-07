import React from 'react';
import {connect} from 'react-redux'

import List from '../../components/LIst/List'
import {deleteComment} from '../../action/index'
import {LocalStorageAPI} from '../../localStorage/storageComments'

 const ListComment = ({stateComments, editStatus, deleteComment}) =>{
    console.log(stateComments)
    // const localStorageAPI = new LocalStorageAPI();
    // console.log(stateComments)
    // localStorageAPI.saveState(stateComments)
     return(
         <List stateComments={stateComments} deleteComment={deleteComment} />
     )
}

function mapStateToProps(state) {
    return {
        stateComments: state.widget
    }
  }

export default connect(mapStateToProps, dispatch => ({
    deleteComment: id => dispatch(deleteComment(id)),
}))(ListComment);