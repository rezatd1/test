import React, { Component } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { headerStyles } from '../../../uploadPage/Styles/headerStyles';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import StorefrontIcon from '@mui/icons-material/Storefront';

export default class Slide3 extends Component {
    render() {
        return (
            <div className='bg-light rounded col-9 d-flex align-content-center row py-5'>
                <div className='col-12 d-flex justify-content-center'><ShoppingCartCheckoutIcon sx={{ fontSize: '8rem' }} /></div>
                <div className='col-12 d-flex justify-content-center mt-4 mb-2'>سفارش شما با موفقیت ذخیره شد</div>
                <div className='col-12 d-flex justify-content-center text-secondary mb-3'>جهت ادامه فرایند، سفارش خود را تایید کنید. در صورت عدم تایید سفارش شما معلق خواهد ماند.</div>
                <div className='col-12 d-flex justify-content-center'>
                    <div className='me-2'>
                        <Button onClick={this.stepHandler} variant="outlined" endIcon={<StorefrontIcon sx={headerStyles.createAndUpload.containedButtonIcon} />}
                            sx={headerStyles.createAndUpload.outlinededBgButton}>بازگشت به فروشگاه</Button>
                    </div>
                    <div>
                        <Button onClick={this.stepHandler} variant="outlined" endIcon={<DoneAllIcon sx={headerStyles.createAndUpload.containedButtonIcon} />}
                            sx={headerStyles.createAndUpload.containedButtonBg}>تایید سفارش</Button>
                    </div>
                </div>
            </div>
        )
    }
}
