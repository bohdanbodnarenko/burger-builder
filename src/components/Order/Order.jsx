import React from 'react'

import './Order.css'

const Order = props => {
  console.log(props)
  const ingredients = []
  for (let ingredient in props.ingredients) {
    ingredients.push({
      name: ingredient,
      amount: props.ingredients[ingredient]
    })
  }

  return (
    <div className='Order'>
      <p>
        Ingredients:{' '}
        {ingredients.map(ig => (
          <span
            style={{
              textTransform: 'capitalize',
              display: 'inline-block',
              margin: '0 8px',
              border: '1px solid #ccc',
              padding: '5px'
            }}
            key={ig.name}
          >
            {ig.name}({ig.amount}){' '}
          </span>
        ))}
      </p>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default Order
