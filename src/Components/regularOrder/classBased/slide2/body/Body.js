import React, { Component } from 'react'
import Info from './info/Info'
import OrderProcess from './orderProcess/OrderProcess'

export default class Body extends Component {
  render() {
    return (
      <div className='row mx-2 rounded'>
        <div className='col-8 mt-1'>
          <OrderProcess />
        </div>
        <div className='bg-light cBorder-1 rounded col-4 mt-1 pt-3'>
          <Info />
        </div>
      </div>
    )
  }
}
