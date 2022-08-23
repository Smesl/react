import React from 'react';

import ListItem from '../LIstItem/ListItem'

const List = ({stateComments, deleteComment}) =>{  
    const listItems = stateComments.map((commentElements)=>
        <ListItem deleteComment={deleteComment} commentElements={commentElements} key={commentElements.id}/>
     )
    return(
            <ul>
                {listItems}
            </ul> 
    )
}

export default List