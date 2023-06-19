import React, { Component } from 'react';
import Slide1 from './Slide1';
import { connect } from 'react-redux';
import { setProductInfo } from '../../../redux/RegularOrderSlice';
import Slide2 from '../slide2/Slide2';
import Slide3 from '../FinalSlide/Slide3';

const mapStateToProps = (state) => ({
    productInfo: state.RegularOrder.productInfo,
    orderSlide: state.RegularOrder.orderSlide
});
const mapDispatchToProps = { setProductInfo };

class GandPanel extends Component {
    switchSlide() {
        switch (this.props.orderSlide) {
            case 1:
                return <Slide1 />;
            case 2:
                return <Slide2 />;
            case 3:
                return <Slide3 />;
            default:
                return <Slide1 />;
        }
    }
    render() {
        console.log('***')
        return (
            this.switchSlide()
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GandPanel);