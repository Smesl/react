import React, {Component} from 'react';
import {connect} from 'react-redux'

import {addComment} from '../../action'

import '../../style/App.css'

class DataEntryForm extends Component {   
    state = {
        name: '',
        comment: '' 
    }
    
    inputChangeHandler = (e) => {
      const {name , value} = e.target;
       this.setState({
           [name]: value,
       })
    }
  
    formSubmitHandler = (e) => {
       e.preventDefault();
      const {name, comment} = this.state;
      const {addComment} = this.props

      addComment(name, comment, new Date().toLocaleString());
    
      this.setState({
        name: '',
        comment: ''
      })
    }
    
    render(){
        const {name, comment} = this.state;
        const {inputChangeHandler, formSubmitHandler} = this;
        return (
        <div className='position'>
            <form onSubmit={formSubmitHandler} >
                <input onChange={inputChangeHandler} type='text' name='name' placeholder='Введите ваше имя' value={name} required></input>
                <div>
                    <textarea onChange={inputChangeHandler} name='comment' placeholder='Введите ваш комментарий' value={comment} required></textarea>
                </div>
                <button type='submit'>Добавить комментарий</button>
            </form>
        </div>
        )
    }
}

export default connect(null, {addComment})(DataEntryForm);