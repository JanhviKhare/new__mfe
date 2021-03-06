
import React from 'react'

export default function OrderItem(props) {
  return (
    <div className='expense-item'>
        <div>{props.id}</div>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  )
}

