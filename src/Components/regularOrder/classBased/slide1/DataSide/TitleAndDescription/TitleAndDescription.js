import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProductInfo } from '../../../../../redux/RegularOrderSlice';

const mapStateToProps = (state) => ({
    productInfo: state.RegularOrder.productInfo,
});
const mapDispatchToProps = { setProductInfo };

class TitleAndDescription extends Component {
    render() {
        return (
            <div className='pt-2 pb-4'>
                <h4>{this.props.productInfo.name}</h4>
                <p className='pt-3 mb-0'>تعداد را وارد کنید، سیستم به صورت خودکار به صرفه ترین تیراژ را محاسبه و انتخاب میکند.</p>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TitleAndDescription);
