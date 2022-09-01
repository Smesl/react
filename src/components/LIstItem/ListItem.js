import React from 'react';
import { Link } from 'react-router-dom';


const ListItem = (props) =>{
    const {deleteComment, commentElements: {comment, name, id, date}} = props;
     console.log(props)
            return(                
                    <li className='comment mb-3'>
                        <div className='m-2'>
                            <button className='delete' onClick={() => deleteComment(id)}>Delete</button>
                            <span className='date'>{date}</span>
                        </div>
                        <div className='comment_margin'>Имя:
                            <p className='comment_name_p'>{name}</p>
                        </div>
                        <div className='comment_margin'>Комментарий:
                            <p>{comment}</p>
                        </div> 
                        <Link to={`comment/${id}`}><div className='text-center border border-secondary'>Открыть</div></Link>
                    </li> 
                
            )
}

export default ListItem