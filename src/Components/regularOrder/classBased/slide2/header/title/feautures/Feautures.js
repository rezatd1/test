import React, { Component } from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { headerStyles } from '../../../../../../uploadPage/Styles/headerStyles'
import LabelSingleOption from './LabelSingleOption';
import EditModal from './EditModal';
import { connect } from 'react-redux';
import { setProductInfo } from '../../../../../../redux/RegularOrderSlice';

const mapStateToProps = (state) => ({
  productInfo: state.RegularOrder.productInfo,
  printSpeed: state.RegularOrder.printSpeed,
  printSideTypes: state.RegularOrder.printSideTypes,
  customerQuantityInput: state.RegularOrder.customerQuantityInput,
});
const mapDispatchToProps = { setProductInfo };

class Feautures extends Component {
  constructor() {
    super();
    this.state = { isOpenEditModal: false }
  }
  editButtonHandler = () => {
    this.setState({ isOpenEditModal: !this.state.isOpenEditModal })
  }

  render() {
    return (
      <div className='row p-3'>
        {this.state.isOpenEditModal ?
          <EditModal openState={this.state.isOpenEditModal} editStateHandler={this.editButtonHandler} />
          : null}
        <div className='col-3 w-auto'>
          <Button onClick={this.editButtonHandler} variant="outlined" startIcon={<CloudUploadIcon sx={headerStyles.createAndUpload.containedButtonIcon} />}
            sx={headerStyles.createAndUpload.containedButton}>ویرایش محصول</Button>
        </div>
        <div className='col-2 w-auto px-1'>
          <LabelSingleOption title="سرعت چاپ" option={this.props.printSpeed === 1 ? 'معمولی' : 'فوری'} />
        </div>
        <div className='col-2 w-auto px-1'>
          <LabelSingleOption title="یکرو یا دورو" option={this.props.printSideTypes === 1 ? 'یکرو' : 'دورو'} />
        </div>
        <div className='col-2 w-auto px-1'>
          <LabelSingleOption title="تعداد" option={this.props.customerQuantityInput} />
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Feautures);