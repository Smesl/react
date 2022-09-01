import React from 'react'
import '../../style/ListItemDetail.css'

const ListItemDetail = (props) => {
  console.log(props)
    const {commentItem, deleteComment, history} = props
    console.log(commentItem.length)
    const {comment, date, id, name} = commentItem[0] ? commentItem[0] : 'undefined';
    console.log(comment, date, id, name)

    const handleDelete = () => {
      history.replace('/')
    }

    const handleGoBack = () => {
      history.goBack('/')
    }

  return (
    <>
     {/* {commentItem.length === Number(0) &&(
        <div className='d-flex justify-content-center'>Заметка удалена</div>
     )} */}

     {commentItem.length !==0 && (
        <div className='d-flex'>
        <div className='goBack' onClick={handleGoBack}>Вернуться назад</div>
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
          <div className='edit'>Редактировать</div>
        </div>
     )}
    
    </>
  )
}

export default ListItemDetail