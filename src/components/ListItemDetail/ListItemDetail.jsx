import React from 'react'
import '../../style/ListItemDetail.css'
import EditIcon from '@mui/icons-material/Edit';

const ListItemDetail = (props) => {
    console.log(props)
    const {commentItem, deleteComment, editComment, editStatus, history, editInputHandler, inputChangeHandler, dataDetailComment} = props
    const {nameDetail, commentDetail} = dataDetailComment;
    console.log(editStatus)
    const {comment, date, id, name} = commentItem[0] ? commentItem[0] : 'undefined';
    // console.log(comment, date, id, name)

    const handleDelete = () => {
      history.replace('/')
    }

    const handleGoBack = () => {
      history.goBack('/')
    }

  return (
    <>
      {editStatus ? (
        <div className='d-flex'>
          <button className='btn btn-primary goBack' onClick={handleGoBack}>Вернуться назад</button>
          <div className='commentDetail'>
            <div className='m-2'>
                <button className='delete' onClick={() => {deleteComment(id); handleDelete()}}>Delete</button>
                    <span className='date'>{date}</span>
            </div>
            <div className='comment_margin'>Имя:
                <p className='comment_name_p'>{name}</p>
            </div>
            <div className='comment_margin'>Комментарий:
                <p>{comment}</p>
            </div> 
          </div> 
          <button className='btn btn-success edit' onClick={editComment}><EditIcon/></button>
        </div>)
         : (
            <div className='d-flex'>
            {/* <form className="form-inline" onSubmit={btnHandler}> */}
             <div className='commentDetail form-control'>
                <div className='comment_margin'>Имя:
                  <input className='form-control' type='text' name='nameDetail' 
                    value={nameDetail} placeholder='Введите ваше имя' 
                    onChange={inputChangeHandler} required
                  />
                </div>
                <div className='comment_margin'>Комментарий:
                  <input className='form-control' type='text' name='commentDetail' 
                    value={commentDetail} placeholder='Введите ваш комментарий' 
                    onChange={inputChangeHandler} required
                  />
                </div> 
              </div> 
              <button type='button' className='btn btn-success edit' onClick={editInputHandler} >Сохранить</button>
              {/* </form> */}
            </div>
          
        )
     }
    </>
  )
}

export default ListItemDetail