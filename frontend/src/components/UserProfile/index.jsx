import React from 'react'
import { useSelector } from 'react-redux'

const UserProfile = () => {
    const {user} = useSelector(state => state.auth);

  return (
    <div>
        <h1>UserProfile Details</h1>
        <h2> Id: {user.id}</h2>
        <h2> Name: {user.name}</h2>
        <h2> Email: {user.email}</h2>
    </div>
  )
}

export default UserProfile