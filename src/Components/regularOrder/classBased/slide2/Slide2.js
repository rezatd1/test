import React, { Component } from 'react';
import Header from './header/Header';
import Body from './body/Body';

export default class Slide2 extends Component {
  render() {
    return (
      <div dir='rtl'>
        <div className='mx-5 border cBorder-1 rounded bg-light'>
          <Header />
        </div>
        <div className='mx-5 mt-2 rounded'>
          <Body />
        </div>
      </div>
    )
  }
}
