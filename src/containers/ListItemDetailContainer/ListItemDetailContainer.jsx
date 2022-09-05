import React from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux';
import { withRouter } from 'react-router';

import {deleteComment, addComment} from '../../action/index'
import ListItemDetail from '../../components/ListItemDetail/ListItemDetail';

const ListItemDetailContainer = (props) => {
    console.log(props)
    const {dataComments, deleteComment, history} = props;
    console.log(dataComments)
    const commentId = props.match.params.id;
    console.log(commentId)
    const commentItem = dataComments.filter(c => c.id === commentId);
    console.log(commentItem)
    
  return (
    <div className='d-flex justify-content-center'>
      <ListItemDetail commentItem={commentItem} deleteComment={deleteComment} addComment={addComment} history={history} />
    </div>
  )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
       dataComments: state
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      deleteComment: (id) => {
            dispatch(deleteComment(id));
        }, 
      addComment: ()=> {
        dispatch(addComment())
      }
    }
};

// export default ListItemDetail
export default compose(connect(mapStateToProps, mapDispatchToProps))(ListItemDetailContainer);