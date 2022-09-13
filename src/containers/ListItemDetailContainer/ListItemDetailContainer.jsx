import React, {useState} from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux';

import {deleteComment, addComment, editComment, btnComment} from '../../action/index'
import ListItemDetail from '../../components/ListItemDetail/ListItemDetail';

const ListItemDetailContainer = (props) => {
    console.log(props)
    const {dataComments, editStatus, addComment, deleteComment, history, editComment , btnComment} = props;
    console.log(dataComments, editStatus)
    console.log(btnComment)
    const commentId = props.match.params.id;
    const commentItem = dataComments.filter(c => c.id === commentId);

    const [data, setData] = useState({nameDetail: '', commentDetail: ''})

    const inputChangeHandler = (e) => {
      console.log(e.target)
      const {name , value} = e.target;
      setData((prevState)=>({
        ...prevState,
            [name]: value
      }))
    }

    const editInputHandler = () => {
      // e.preventDefault();
     const {nameDetail, commentDetail} = data;
      console.log(nameDetail)
      addComment(nameDetail, commentDetail, new Date().toLocaleString());
   
      setData({
        nameDetail: '',
        commentDetail: ''
     })
   }

  return (
    <div className='d-flex justify-content-center'>
      <ListItemDetail editInputHandler={editInputHandler}
        inputChangeHandler={inputChangeHandler} 
        editComment={editComment} editStatus={editStatus.commentEditStatus} 
        commentItem={commentItem} deleteComment={deleteComment} addComment={addComment} 
        dataDetailComment={data} history={history} />

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
      addComment: (name, comment, date)=> {
        dispatch(addComment(name, comment, date))
      },
      editComment: ()=>{
        editComment()
      },
    }
};

// export default ListItemDetail
// export default compose(connect(mapStateToProps, mapDispatchToProps))(ListItemDetailContainer);
export default compose(connect(mapStateToProps, mapDispatchToProps))(ListItemDetailContainer);