import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '../LIstItem/ListItem'

const List = ({stateComments, deleteComment}) =>{  
    const listItems = stateComments.map((commentElements)=>
        <ListItem deleteComment={deleteComment} commentElements={commentElements} key={commentElements.id}/>
     )
     console.log(listItems)
    return(
        <div className='d-flex'>
            <ul className='d-inline-flex flex-wrap'>
               {listItems}
            </ul> 
        </div>
    )
}

export default List