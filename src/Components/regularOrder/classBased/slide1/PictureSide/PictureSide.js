import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProductInfo } from '../../../../redux/RegularOrderSlice';


const mapStateToProps = (state) => ({
  productInfo: state.RegularOrder.productInfo,
});
const mapDispatchToProps = { setProductInfo };

class PictureSide extends Component {
  render() {
    return (
      <div>
        <img className='w-100' src={"https://api.naghshealmas.com" + this.props.productInfo.imageUrl} />
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PictureSide);