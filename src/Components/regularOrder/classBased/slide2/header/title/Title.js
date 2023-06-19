import React, { Component } from 'react';
import { setProductInfo } from '../../../../../redux/RegularOrderSlice';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  productInfo: state.RegularOrder.productInfo,
});
const mapDispatchToProps = { setProductInfo };

class Title extends Component {
  render() {
    return (
      <div className='d-flex justify-content-start align-items-center'>
        <h4 className='mb-0 '>{this.props.productInfo.name}</h4>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Title);