import React, { Component } from 'react';
import PrintSingleOption from './PrintSingleOption';
import PrintMultiOption from './PrintMultiOption';
import { DefaultGetAPICall } from '../../../../../../API/DefaultGetAPICall';
import { setPrintOptions, setPrintSpeed, setPrintSideTypes } from '../../../../../redux/RegularOrderSlice';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  printOptions: state.RegularOrder.printOptions,
  circulationId: state.RegularOrder.circulationId,
  printSpeed: state.RegularOrder.printSpeed,
  printSideTypes: state.RegularOrder.printSideTypes
});
const mapDispatchToProps = { setPrintOptions, setPrintSpeed, setPrintSideTypes };

class PrintOptions extends Component {

  printOptionAPIHandler = () => {
    DefaultGetAPICall('/api/fa/Nas/Product/GetPrintingFeature?', `&Id=${this.props.circulationId && this.props.circulationId}`).then((response) => { this.props.setPrintOptions(response); });
  }
  componentDidMount() {
    this.printOptionAPIHandler()
  }
  componentDidUpdate() {
    if (this.props.printOptions.printedSideTypes.length === 1) {
      this.props.setPrintSideTypes(this.props.printOptions.printedSideTypes[0].key)
    };
    if (this.props.printOptions.turnaroundTypes.length === 1) {
      this.props.setPrintSpeed(this.props.printOptions.turnaroundTypes[0].key)
    }
  }
  printSpeedHandler = (printSpeedData) => {
    this.props.setPrintSpeed(printSpeedData)
  }
  printSideTypesHandler = (printSpeedData) => {
    this.props.setPrintSideTypes(printSpeedData)
  }
  render() {
    return (
      <div className='d-flex mt-5 mb-4'>
        <div className='mx-4 rounded p-2'>
          {this.props.printOptions.turnaroundTypes && this.props.printOptions.turnaroundTypes.length > 1 ?
            <PrintMultiOption activeStyleObject={this.props.printSpeed} title='سرعت چاپ' toggleMapData={this.props.printOptions.turnaroundTypes} onClickHandler={this.printSpeedHandler} /> :
            <PrintSingleOption title='سرعت چاپ' option={this.props.printOptions?.turnaroundTypes && this.props.printOptions.turnaroundTypes[0]?.value} />}
        </div>
        <div className='mx-4 rounded p-2'>
          {this.props.printOptions.printedSideTypes && this.props.printOptions.printedSideTypes.length > 1 ?
            <PrintMultiOption activeStyleObject={this.props.printSideTypes} title='یکرو یا دورو' toggleMapData={this.props.printOptions.printedSideTypes} onClickHandler={this.printSideTypesHandler} /> :
            <PrintSingleOption title='یکرو یا دورو' option={this.props.printOptions?.printedSideTypes && this.props.printOptions.printedSideTypes[0]?.value} />}
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PrintOptions);
