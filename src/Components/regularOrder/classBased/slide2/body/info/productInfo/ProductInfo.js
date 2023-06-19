import React, { Component } from 'react';

export default class ProductInfo extends Component {
    render() {
        const { orderSize, fileSize, orderPrice } = this.props;
        return (
            <div>
                <div>
                    <h6>جزئیات مصحول</h6>
                    <p className='mb-1 cfont-2'>ابعاد سفارش: {orderSize}</p>
                    <p className='mb-2 cfont-2 cStyle-1'>ابعاد فایل: {fileSize}</p>
                    <p className='mb-1 cfont-2 '>قیمت محصول: {orderPrice} تومان</p>
                </div>
            </div>
        )
    }
}
