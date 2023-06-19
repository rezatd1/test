import React, { Component } from 'react';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { headerStyles } from '../../../../../../uploadPage/Styles/headerStyles';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { connect } from 'react-redux';
import { setProductInfo } from '../../../../../../redux/RegularOrderSlice';
import ProcessWithExtendedService from './ProcessWithExtendedService';
import ProcessWithoutExtendedService from './ProcessWithoutExtendedService'

const mapStateToProps = (state) => ({
  productSpecialDetail: state.RegularOrder.productSpecialDetail,
});
const mapDispatchToProps = { setProductInfo };

class Process extends Component {
  render() {
    return (
      <>
        {this.props.productSpecialDetail.extendedServices.length > 0 ? <ProcessWithExtendedService /> : <ProcessWithoutExtendedService />}
      </>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Process);