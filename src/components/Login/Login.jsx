import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm'
import TextField from './TextField/TextField'

const Login = () => {
  

  const {type} = useParams()
  const [formType, setFormType] = useState( type==='register' ? type: 'login')

  

  return (
        <div>
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-md-6 offset-md-3 shadow p-4'>
                <h3 className='mb-4'>Login</h3>
                <LoginForm/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Login