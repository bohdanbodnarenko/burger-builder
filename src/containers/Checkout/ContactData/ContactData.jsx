import React, { Component } from 'react'
import { connect } from 'react-redux'

import './ContactData.css'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
  state = {
    orderForm: {
      name: '',
      street: '',
      zipCode: '',
      country: '',
      email: ''
    },
    loading: false
  }

  orderHandler = event => {
    event.preventDefault()
    this.setState({ loading: true })
    axios
      .post('/orders.json', {
        ingredients: { ...this.props.ings },
        price:this.props.price,
        customer: {
          ...this.state.orderForm
        }
      })
      .then(responce => {
        this.setState({ loading: false })
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }

  inputChangedHandler = event => {
    this.setState({
      orderForm: {
        ...this.state.orderForm,
        [event.target.name]: event.target.value
      }
    })
  }

  render () {
    const formElementsArray = Object.keys(this.state.orderForm)
    let form = (
      <div className='ContactData'>
        <h4>Enter your Contact Data</h4>
        <form onSubmit={this.orderHandler}>
          {formElementsArray.map(formElement => {
            return (
              <div key={formElement} className='Input'>
                <input
                  name={formElement}
                  placeholder={`Your ${formElement}`}
                  onChange={this.inputChangedHandler}
                  value={this.state.orderForm[formElement]}
                />
              </div>
            )
          })}
          <Button type='submit' btnType='Success'>
            ORDER
          </Button>
        </form>
      </div>
    )
    if (this.state.loading) {
      form = <Spinner />
      this.props.history.push('/')
    }
    return <div>{form}</div>
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

export default connect(mapStateToProps)(ContactData)
