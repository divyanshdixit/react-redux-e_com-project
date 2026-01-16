import React from 'react'

const Input = ({width, name, placeholder, value}) => {
  return (
    <TextField
          error
            name={name}
            placeholder={placeholder}
            value={value}
          onChange={handleChange}
        />
  )
}

export default Input