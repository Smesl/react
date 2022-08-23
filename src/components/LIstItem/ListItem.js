import React from 'react';

const ListItem = (props) =>{
    const {deleteComment, commentElements: {comment, name, id, date}} = props;
            return(
                <li className='comment'>
                    <div>
                        <button className='delete' onClick={() => deleteComment(id)}>Delete</button>
                        <span className='date'>{date}</span>
                    </div>
                    <div className='comment_margin'>Имя:
                        <p className='comment_name_p'>{name}</p>
                    </div>
                    <div className='comment_margin'>Комментарий:
                        <p>{comment}</p>
                    </div> 
                </li> 
            )
}

export default ListItem