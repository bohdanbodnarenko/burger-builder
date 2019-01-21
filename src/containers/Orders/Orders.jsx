import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios  from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    state={
        orders:[],
        loading:true
    }

    componentDidMount() {
        axios.get('/orders.json')
        .then(res=>{
            let fetchedOrders = []
            for(let key in res.data) {
                fetchedOrders.push({...res.data[key],id:key})
            }
            this.setState({loading:false,orders:fetchedOrders})
        })
        .catch((err)=>{
            alert(err)
            this.setState({loading:false})
        })
    }
    

    render() {
        console.log(this.state.orders)
        let orders = this.state.orders.map(el=>(<Order ingredients = {el.ingredients} price={el.price} key={el.id} />));
        if(this.state.loading){
            orders = <Spinner />
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

export default Orders;