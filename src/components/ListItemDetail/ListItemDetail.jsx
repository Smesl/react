import React from 'react'
import '../../style/App.css'

const ListItemDetail = (props) => {
  console.log(props)
    const {commentItem, deleteComment, history} = props
    console.log(commentItem.length)
    const {comment, date, id, name} = commentItem[0] ? commentItem[0] : 'undefined';
    console.log(comment, date, id, name)

    const handleSave = () => {
      history.replace('/')
    }

  return (
    <>
     {commentItem.length === Number(0) &&(
        <div className='d-flex justify-content-center'>Заметка удалена</div>
     )}

     {commentItem.length !==0 && (
      <div className='d-flex'>
        <div className='comment'>
          <div className='m-2'>
              <button className='delete' onClick={() => {deleteComment(id); handleSave()}}>Delete</button>
                  <span className='date'>{date}</span>
          </div>
          <div className='comment_margin'>Имя:
              <p className='comment_name_p'>{name}</p>
          </div>
          <div className='comment_margin'>Комментарий:
              <p>{comment}</p>
          </div> 
      </div> 
      <div>Редактировать</div>
    </div>
     )}
    
    </>
  )
}

export default ListItemDetail