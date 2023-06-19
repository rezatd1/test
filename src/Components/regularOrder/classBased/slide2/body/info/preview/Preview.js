import React, { Component } from 'react'

export default class Preview extends Component {
  render() {
    const { thumbnail } = this.props;
    return (
      <div>
        <div className='row me-1 mb-2'>
          <p></p>
          <div className='col-3 d-flex justify-content-center align-items-center cBG-1 w-auto'>
            {thumbnail ? 
            <div>
              <img className='w-100' src={thumbnail}></img>
            </div>
              :
              <div className='cBG-2 px-1'>
                <p className='text-secondary cfont-2'>تصویر</p>
                <p className='h6'>یافت نشد</p>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
