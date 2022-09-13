import React, {Component, useState, useEffect} from 'react';
import {connect} from 'react-redux'

import {addComment} from '../../action'

import '../../style/App.css'

const DataEntryForm = (props) => {
    const {addComment} = props

    const [data, setData] = useState({name: '', comment: ''})
    
    const inputChangeHandler = (e) => {
      console.log(e.target)
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
    
        const {name, comment} = data;

        return (
                <div className='text-center'>
                        <form className="form-inline" onSubmit={formSubmitHandler} >
                        <div className="form-group mx-sm-3 mb-2">
                            <input className='' onChange={inputChangeHandler} type='text' name='name' placeholder='Введите ваше имя' value={name} required></input>
                            <div>
                                <textarea onChange={inputChangeHandler} name='comment' placeholder='Введите ваш комментарий' value={comment} required></textarea>
                            </div>
                            <button type='submit'>Добавить комментарий</button>
                            </div>
                        </form>
                </div>
        )
}

export default connect(null, {addComment})(DataEntryForm);