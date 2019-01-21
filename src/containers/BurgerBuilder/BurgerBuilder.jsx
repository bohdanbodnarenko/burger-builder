import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControl/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import { connect } from 'react-redux';

class BurgerBuilder extends Component {
  state = {
    purchaseable: false,
    purchasing: false,
    loading: false
  }

  componentDidMount () {
    axios
      .get('https://my-burger-72ca0.firebaseio.com/ingredients.json')
      .then(responce => {
        this.setState({ ingredients: responce.data })
      })
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(el => ingredients[el])
      .reduce((sum, el) => {
        return sum + el
      }, 0)
    return  sum > 0
  }

  purchaseCanselHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {

    const queryParams = []
    for (let i in this.props.ings) {
      queryParams.push(
        encodeURIComponent(i) +
          '=' +
          encodeURIComponent(this.props.ings[i])
      )
    }
    this.props.history.push({
      pathname: '/checkout',
      search: queryParams.join('&')
    })
  }

  render () {
    const disabledInfo = {
      ...this.props.ings
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = null
    if (this.props.ings) {
      orderSummary = (
        <OrderSummary
          price={this.props.price}
          calcelled={this.purchaseCanselHandler}
          continued={this.purchaseContinueHandler}
          ingredients={this.props.ings}
        />
      )
    }

    let burger = <Spinner />
    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.ingredientAdded}
            ingredientRemoved={this.props.ingredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchaseable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
          />
        </Aux>
      )
    }

    if (this.state.loading) {
      orderSummary = <Spinner />
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCanselHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

const mapStateToProps = state => {  
  return {
    ings:state.ingredients,
    price:state.totalPrice
  }
}
const mapDispatchToProps = dispatch => {  
  return {
    ingredientAdded: (ingredientName)=> {dispatch({type: 'ADD_INGREDIENT',ingredientName:ingredientName})},
    ingredientRemoved: (ingredientName)=> dispatch({type: 'REMOVE_INGREDIENT',ingredientName:ingredientName})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder, axios)
