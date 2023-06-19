import React, { Component } from 'react';
import { DefaultPostAPICall } from '../../../../../uploadPage/mainRows/API/DefaultPostAPICall';
import { connect } from 'react-redux';
import { setCustomerQuantityInput, setPrintingProcessTime, setBasicPrice } from '../../../../../redux/RegularOrderSlice';

const mapStateToProps = (state) => ({
  customerQuantityInput: state.RegularOrder.customerQuantityInput,
  printingProcessTime: state.RegularOrder.printingProcessTime,
  circulationId: state.RegularOrder.circulationId,
  printSeries: state.RegularOrder.printSeries,
  printSpeed: state.RegularOrder.printSpeed,
  printSideTypes: state.RegularOrder.printSideTypes,
  basicPrice: state.RegularOrder.basicPrice,
});
const mapDispatchToProps = { setCustomerQuantityInput, setPrintingProcessTime, setBasicPrice };

class PriceTable extends Component {

  basicPriceAPIHandler = () => {
    DefaultPostAPICall("/api/fa-IR-IRT/Order/SharedSheetOrder/GetBasicPrice?", {
      "productId": this.props.circulationId,
      "series": this.props.printSeries,
      "turnaroundType": this.props.printSpeed,
      "twoSidePrintingType": this.props.printSideTypes,
      "width": null,
      "height": null
    }).then((response) => {
      this.props.setBasicPrice(response)
    });
  }

  componentDidUpdate(prevProps) {
    if ((this.props.customerQuantityInput !== prevProps.customerQuantityInput) ||
      (this.props.printSpeed !== prevProps.printSpeed) ||
      (this.props.printSideTypes !== prevProps.printSideTypes) 
      ) {
      this.basicPriceAPIHandler();
    }
  }

  resultDataMap = () => {
    return this.props.basicPrice && this.props.basicPrice.map((item) =>
      <tr>
        <td className='border border-dark p-2'>A6 تراکتی ( 14.5 × 10 ) cm ({item.width}×{item.height} میلیمتر)</td>
        <td className='border border-dark p-2'>{item.basePrice} تومان (بدون احتساب مالیات)</td>
      </tr>
    )
  }
  render() {
    return (
      <div className='pb-2'>
        <div>ابعاد موجود</div>
        <table className='entire-table border' data-bs-toggle="collapse">
          <thead className='light-background'>
            <tr>
              <th className='border border-dark p-2'>ابعاد (میلیمتر)</th>
              <th className='border border-dark p-2'>قیمت</th>
            </tr>
          </thead>
          <tbody>
            {this.resultDataMap()}
          </tbody>
        </table>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PriceTable);
