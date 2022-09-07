import React, {useState} from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux';

import {deleteComment, addComment, editComment} from '../../action/index'
import ListItemDetail from '../../components/ListItemDetail/ListItemDetail';

const ListItemDetailContainer = (props) => {
    console.log(props)
    const {dataComments, editStatus, addComment, deleteComment, history, editComment} = props;
    console.log(dataComments, editStatus)
    const commentId = props.match.params.id;
    console.log(commentId)
    const commentItem = dataComments.filter(c => c.id === commentId);
    console.log(commentItem)

    const [data, setData] = useState({name: '', comment: ''})
    
    const inputChangeHandler = (e) => {
      const {name , value} = e.target;
      setData((prevState)=>({
        ...prevState,
            [name]: value
      }))
    }

    const formSubmitHandler = (e) => {
      e.preventDefault();
     const {name, comment} = data;

     addComment(name, comment, new Date().toLocaleString());
   
     setData({
       name: '',
       comment: ''
     })
   }


  return (
    <div className='d-flex justify-content-center'>
      <ListItemDetail formSubmitHandler={formSubmitHandler} inputChangeHandler={inputChangeHandler} editComment={editComment} editStatus={editStatus.commentEditStatus} commentItem={commentItem} deleteComment={deleteComment} addComment={addComment} history={history} />
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