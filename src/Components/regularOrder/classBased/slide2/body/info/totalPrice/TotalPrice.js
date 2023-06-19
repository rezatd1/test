import React, { Component } from 'react';

export default class TotalPrice extends Component {
  render() {
    const { series, totalProductPrice, total } = this.props;
    return (
      <div>
        <div>
          <h6>مبلغ کل</h6>
          <p className='mb-1 cfont-2'>سری چاپ: {series}</p>
          <p className='mb-3 cfont-2 cStyle-1'>مجموع قیمت محصول: {totalProductPrice} تومان</p>
          <p className='mb-1 cfont-2'>مجموع:
            <span className='me-2 text-danger h5'>{total} تومان</span>
          </p>
        </div>
      </div>
    )
  }
}
