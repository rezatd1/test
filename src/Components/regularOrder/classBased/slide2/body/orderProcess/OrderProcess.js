import React, { Component } from 'react';
import Process from './process/Process';
import FileManager from './fileManager/FileManager';
import OrderSummery from './orderSummery/OrderSummery';
import { connect } from 'react-redux';
import { setIsOpenFileCheckModal, setUploadSectionSlide } from '../../../../../redux/RegularOrderSlice';

const mapStateToProps = (state) => ({
  isOpenFileCheckModal: state.RegularOrder.isOpenFileCheckModal,
  uploadSectionSlide: state.RegularOrder.uploadSectionSlide,
  advancedPrice: state.RegularOrder.advancedPrice,

});
const mapDispatchToProps = { setIsOpenFileCheckModal, setUploadSectionSlide };

class OrderProcess extends Component {

  render() {
    return (
      <div>
        <div className='bg-light rounded mb-2'>
          <Process />
        </div>
        <div className='bg-light rounded'>
          {this.props.uploadSectionSlide === 1 ? <FileManager /> : <OrderSummery />}
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderProcess);