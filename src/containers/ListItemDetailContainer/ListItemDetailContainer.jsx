import React from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux';

import {deleteComment, addComment, editComment} from '../../action/index'
import ListItemDetail from '../../components/ListItemDetail/ListItemDetail';

const ListItemDetailContainer = (props) => {
    console.log(props)
    const {dataComments, editStatus,  deleteComment, history, editComment} = props;
    console.log(dataComments, editStatus)
    const commentId = props.match.params.id;
    console.log(commentId)
    const commentItem = dataComments.filter(c => c.id === commentId);
    console.log(commentItem)
    
  return (
    <div className='d-flex justify-content-center'>
      <ListItemDetail editComment={editComment} commentItem={commentItem} deleteComment={deleteComment} addComment={addComment} history={history} />
    </div>
  )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
       dataComments: state.widget,
       editStatus: state.status
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      deleteComment: (id) => {
            dispatch(deleteComment(id));
        }, 
      addComment: ()=> {
        dispatch(addComment())
      },
      editComment: ()=>{
        dispatch(editComment())
      }
    }
};

// export default ListItemDetail
export default compose(connect(mapStateToProps, mapDispatchToProps))(ListItemDetailContainer);