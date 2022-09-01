import React from 'react'

const TextField = (props) => {
    const {name, value, onChange, label, type } = props

  return (
    <div className='mb-4'>
        <label htmlFor='email'>{label}</label>
        <input className='form-control' type={type} name={name} value={value} onChange={onChange} />
    </div>
  )
}

export default TextField