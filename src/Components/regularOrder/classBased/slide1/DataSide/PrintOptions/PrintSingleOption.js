import React, { Component } from 'react'

export default class PrintSingleOption extends Component {
  render() {
    const { title, option } = this.props;
    return (
      <div className='h-auto custom-bg-8 p-2 rounded'>
        <h6 className='text-secondary custom-style-7'>{title}</h6>
        <p className='custom-style-6 mb-0'>{option}</p>
      </div>
    )
  }
}
