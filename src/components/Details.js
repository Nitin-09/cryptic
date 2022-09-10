import React from 'react'
import {useContext} from 'react'
import ApiContext from '../context/api/ApiContext'
function Details(props) {
  const context = useContext(ApiContext)
  const { value } = context
  return (
    <div>
        <h1>{console.log(value)}</h1>
        <img className='h-32' src={props.image} alt="" />
    </div>
  )
}

export default Details