import React, { Component } from 'react';
import FileStepper from './FileStepper'
import UploadSection from './UploadSection';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { headerStyles } from '../../../../../../uploadPage/Styles/headerStyles';
import { setIsOpenFileCheckModal, setAdvancedPrice, setUploadSectionSlide, setExtendedServiceSlide } from '../../../../../../redux/RegularOrderSlice';
import { connect } from 'react-redux';
import { DefaultPostAPICall } from '../../../../../API/DefaultPostAPICall';
import { DefaultGetAPICall } from '../../../../../API/DefaultGetAPICall';

const mapStateToProps = (state) => ({
  isOpenFileCheckModal: state.RegularOrder.isOpenFileCheckModal,
  uploadedFile1: state.RegularOrder.uploadedFile1,
  uploadedFile2: state.RegularOrder.uploadedFile2,
  circulationId: state.RegularOrder.circulationId,
  printSpeed: state.RegularOrder.printSpeed,
  printSideTypes: state.RegularOrder.printSideTypes,
  printSeries: state.RegularOrder.printSeries,
});
const mapDispatchToProps = { setIsOpenFileCheckModal, setAdvancedPrice, setUploadSectionSlide, setExtendedServiceSlide };

class FileManager extends Component {

  stepHandler = () => {
    if ((this.props.uploadedFile1.id !== undefined) && (this.props.uploadedFile2.id !== undefined)) {
      DefaultPostAPICall("/api/fa/Order/SharedSheetOrder/ExtendedServicePrice?", {
        "filters": [],
        "roundedCorner": false,
        "customFoldLineDto": null,
        "gripperEdge": false,
        "handleType": null
      }).then((response) => {
        console.log(response)
      });

      DefaultPostAPICall("/api/fa/Order/SharedSheetOrder/GetAdvancedPrice?", {
        "productId": this.props.circulationId,
        "turnaroundType": this.props.printSpeed,
        "twoSidePrintingType": this.props.printSideTypes,
        "series": this.props.printSeries,
        "currentFileId": this.props.uploadedFile1.id,
        "extendedServices": {
          "filters": [],
          "roundedCorner": false,
          "customFoldLineDto": null,
          "gripperEdge": false,
          "handleType": null
        }
      }).then((response) => {
        this.props.setAdvancedPrice(response);
        this.props.setExtendedServiceSlide(2);
        this.props.setUploadSectionSlide(2);
      });
    }
  }

  render() {
    return (
      <div className='row '>
        <div className='pt-2'>
          <FileStepper />
        </div>
        <div className='row'>
          <UploadSection />
        </div>
        <div className='row'>
          <div className='d-flex justify-content-end my-4'>
            <Button onClick={this.stepHandler} variant="outlined" startIcon={<CloudUploadIcon sx={headerStyles.createAndUpload.containedButtonIcon} />}
              sx={headerStyles.createAndUpload.containedButton}>مرحله بعدی</Button>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FileManager);