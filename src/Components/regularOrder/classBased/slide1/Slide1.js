import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DefaultGetAPICall } from '../../../../API/DefaultGetAPICall';
import { setProductInfo, setCirculationId, setPrintSeries } from '../../../redux/RegularOrderSlice';
import PictureSide from './PictureSide/PictureSide';
import DataSide from './DataSide/DataSide';

const mapStateToProps = (state) => ({
    productInfo: state.RegularOrder.productInfo,
    circulationId: state.RegularOrder.circulationId,
    customerQuantityInput: state.RegularOrder.customerQuantityInput,
});
const mapDispatchToProps = { setProductInfo, setCirculationId, setPrintSeries };

class Slide1 extends Component {

    productInfoAPIHandler = () => {
        DefaultGetAPICall('/api/fa/Nas/Product/GetProductInfo?', `&id=${this.props.circulationId}&title=is+not+valid+now`).then((response) => this.props.setProductInfo(response));
    }
    circulationHandler = () => {
        const { productInfo, customerQuantityInput } = this.props;
        if (productInfo && productInfo.printCirculations && productInfo.printCirculations.length > 0) {
            for (let i = productInfo.printCirculations.length - 1; i >= 0; i--) {
                if (customerQuantityInput % productInfo.printCirculations[i].value === 0) {
                    this.props.setCirculationId(productInfo.printCirculations[i].key);
                    this.props.setPrintSeries(customerQuantityInput / productInfo.printCirculations[i].value)
                    break;
                }
            }
        }
    }
    componentDidMount() {
        this.productInfoAPIHandler();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.circulationId !== prevProps.circulationId) {
            this.productInfoAPIHandler();
        }
        if (this.props.customerQuantityInput !== prevProps.customerQuantityInput) {

            this.circulationHandler();
        }
    }

    render() {
        return (
            <div dir='rtl' className='row bg-light p-3 rounded col-9'>
                <div className='col-3'>
                    <PictureSide />
                </div>
                <div className='col-9 '>
                    <DataSide />
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Slide1);