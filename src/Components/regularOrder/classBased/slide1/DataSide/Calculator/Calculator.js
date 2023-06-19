import React, { Component } from 'react';
import Circulation from './Circulation';
import Quantity from './Quantity';
import PrintSeries from './PrintSeries';

export default class Calculator extends Component {
  render() {
    return (
      <div className='row mx-1'>
        <div className='col-3'>
          <Quantity />
        </div>
        <div className='col-1 d-flex justify-content-center align-items-center w-auto'>=</div>
        <div className='col-3 w-auto h-auto'>
          <Circulation />
        </div>
        <div className='col-1 d-flex justify-content-center align-items-center w-auto'>*</div>
        <div className='col-3'>
          <PrintSeries />
        </div>
      </div>
    )
  }
}
