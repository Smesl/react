import React from 'react'
import '../../style/ListItemDetail.css'
import EditIcon from '@mui/icons-material/Edit';

const ListItemDetail = (props) => {
    console.log(props)
    const {commentItem, deleteComment, editComment, editStatus, history, formSubmitHandler, inputChangeHandler} = props
    console.log(editStatus)
    console.log(commentItem.length)
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
              <div className='commentDetail form-control'>
                <div className='comment_margin'>Имя:
                  <input className='form-control' type='text' name='name' value={name} placeholder='Введите ваше имя' onChange={inputChangeHandler} />
                </div>
                <div className='comment_margin'>Комментарий:
                  <input className='form-control' type='text' name='comment' value={comment} placeholder='Введите ваш комментарий' onChange={inputChangeHandler} />
                </div> 
              </div> 
              <button className='btn btn-success edit' onClick={editComment}>Сохранить</button>
            </div>
        )
     }
     {/* {editStatus && true ? <div>fewfew</div> : false} */}
    </>
  )
}

export default ListItemDetail