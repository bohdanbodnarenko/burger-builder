import React from 'react'
import { withRouter } from 'react-router-dom'

import styled from 'styled-components'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`

const burger = props => {
  let transformedIngredients = []
  Object.keys(props.ingredients).forEach(el => {
    if (props.ingredients[el] > 0) {
      for (let i = 0; i < props.ingredients[el]; i++) {
        transformedIngredients.push(<BurgerIngredient key={el + i} type={el} />)
      }
    }
  })
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <Burger>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </Burger>
  )
}

export default withRouter(burger)
