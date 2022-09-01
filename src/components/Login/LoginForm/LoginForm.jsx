import React, {useState} from 'react'
import {addComment} from '../../../action/index'
import TextField from '../TextField/TextField'

const LoginForm = () => {
    const [data, setData] = useState({email: '', password: ''})

    const formSubmitHandler = (e) => {
        e.preventDefault();
       const {name, comment} = data;
 
       addComment(name, comment, new Date().toLocaleString());
     
       setData({
         name: '',
         comment: ''
       })
     }

     const inputChangeHandler = (e) => {
        const {name , value} = e.target;
        setData((prevState)=>({
          ...prevState,
              [name]: value
        }))
      }

  return (
    <div>
        <form onSubmit={formSubmitHandler}>
            <TextField type='text' label='Электронная почта' name='email' value={data.email} onChange={inputChangeHandler} />
            <TextField type='password' label='Пароль' name='password' value={data.password} onChange={inputChangeHandler} />
            <button className='btn btn-primary w-100 mx-auto' type='submit' >Submit</button>
        </form>
    </div>
  )
}

export default LoginForm