import React, { Component } from 'react';
import Title from './title/Title';
import ProductInfo from './productInfo/ProductInfo'
import TotalPrice from './totalPrice/TotalPrice';
import Preview from './preview/Preview';
import { setIsOpenFileCheckModal } from '../../../../../redux/RegularOrderSlice';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    getAdvancedPrice: state.RegularOrder.getAdvancedPrice,
    productSpecialDetail: state.RegularOrder.productSpecialDetail,
    draftImg1: state.RegularOrder.draftImg1,
    draftImg2: state.RegularOrder.draftImg2,
    thumbnailImg1: state.RegularOrder.thumbnailImg1,
    thumbnailImg2: state.RegularOrder.thumbnailImg2,
});
const mapDispatchToProps = { setIsOpenFileCheckModal };

class Info extends Component {
    render() {
        return (
            <div className='p-1'>
                <div className='mb-2'>
                    <Title />
                </div>
                <div>
                    <ProductInfo orderSize={this.props.getAdvancedPrice.productDimension} fileSize={this.props.getAdvancedPrice.fileDimension} orderPric={this.props.getAdvancedPrice.basePrice} />
                </div>
                <div className='mt-4'>
                    <TotalPrice series={this.props.getAdvancedPrice.latCount} totalProductPrice={this.props.getAdvancedPrice.totalPrice} total={this.props.getAdvancedPrice.totalPriceAfterMultipleInQuantity} />
                </div>
                <div className='mt-5'>
                    <h5>پیش نمایش فایل</h5>
                    <div className='row'>
                        <div className='col-6'>
                            <h6 className='text-secondary cfont-2 mb-0'>فایل چاپی 4 رنگ</h6>
                            <Preview thumbnail={this.props.thumbnailImg1} />
                            <Preview thumbnail={this.props.thumbnailImg2} />
                        </div>
                        {this.props.productSpecialDetail.productFilms.length > 0 ? this.props.productSpecialDetail.productFilms.map((item) =>
                            <div className='col-6'>
                                <h6 className='text-secondary cfont-2 mb-0'>{item.filmName}</h6>
                                <Preview />
                                <Preview />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Info);