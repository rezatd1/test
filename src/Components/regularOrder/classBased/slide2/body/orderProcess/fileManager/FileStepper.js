import React, { Component } from 'react'
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { connect } from 'react-redux';
import { setFileStepperSlide } from '../../../../../../redux/RegularOrderSlice';
import { ConstructionOutlined } from '@mui/icons-material';

const mapStateToProps = (state) => ({
  fileStepperSlide: state.RegularOrder.fileStepperSlide,
  productSpecialDetail: state.RegularOrder.productSpecialDetail,
});
const mapDispatchToProps = { setFileStepperSlide };

class FileStepper extends Component {

  activeCSS = {
    backgroundColor: 'red'
  }

  render() {
    return (
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={this.props.fileStepperSlide}>
          <Step>
            <StepLabel>فایل چاپی چهار رنگ</StepLabel>
          </Step>
          {this.props.productSpecialDetail.productFilms.length > 0 ?
            this.props.productSpecialDetail.productFilms.map((step) =>
              <Step key={step.filmNo}>
                <StepLabel>{step.filmName}</StepLabel>
              </Step>
            )
            : null}
        </Stepper>
      </Box >
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FileStepper);
