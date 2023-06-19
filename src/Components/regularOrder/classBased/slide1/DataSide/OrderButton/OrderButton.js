import React, { Component } from 'react'
import Button from '@mui/material/Button';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { headerStyles } from '../../../../../uploadPage/Styles/headerStyles';
import { DefaultGetAPICall } from '../../../../../../API/DefaultGetAPICall';
import { setProductSpecialDetail, setOrderSlide } from '../../../../../redux/RegularOrderSlice';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    productSpecialDetail: state.RegularOrder.productSpecialDetail,
    circulationId: state.RegularOrder.circulationId,
    orderSlide: state.RegularOrder.orderSlide
});
const mapDispatchToProps = { setProductSpecialDetail, setOrderSlide };

class OrderButton extends Component {

    orderButtonHandler = () => {
        DefaultGetAPICall('/api/fa/Nas/Product/GetProductSpecialDetail?', `&Id=${this.props.circulationId && this.props.circulationId}`).then((response) => {
            this.props.setProductSpecialDetail(response);
            this.props.setOrderSlide(2)
        });
    }

    render() {
        return (
            <div>
                <div className='col-6 w-auto d-flex justify-content-end'>
                    <Button onClick={this.orderButtonHandler} variant="outlined" startIcon={<CreateNewFolderIcon sx={headerStyles.createAndUpload.outlinedButtonIcon} />}
                        sx={headerStyles.createAndUpload.outlinedButton}>شروع سفارش</Button>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderButton);
