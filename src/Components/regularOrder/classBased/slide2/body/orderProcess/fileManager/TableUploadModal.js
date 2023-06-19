import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBasicPrice } from '../../../../../../redux/RegularOrderSlice';

const mapStateToProps = (state) => ({ basicPrice: state.RegularOrder.basicPrice });
const mapDispatchToProps = { setBasicPrice };

class TableUploadModal extends Component {

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
            <div className='col-12 mt-3'>
                <div className='mx-5 mb-5'>
                    <div className='mx-3'>
                        <p className='mb-1'>ابعاد موجود</p>
                    </div>
                    <div className='mx-3'>
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
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableUploadModal);