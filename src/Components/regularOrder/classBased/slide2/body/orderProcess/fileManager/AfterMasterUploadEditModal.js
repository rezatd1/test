import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '../../../../../../uploadPage/mainRows/functional/mainPanel/styles'
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { setIsOpenFileCheckModal, setAfterMasterUploadEditModal, setBasicPrice, setSelectedUploadPanelId, setSuccessfulMasterUploadRespone } from '../../../../../../redux/RegularOrderSlice';
import { connect } from 'react-redux';
import PriceTable from './PriceTable'
import ProductOffset from './ProductOffset';

const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const mapStateToProps = (state) => ({
    isOpenFileCheckModal: state.RegularOrder.isOpenFileCheckModal,
    afterMasterUploadEditModal: state.RegularOrder.afterMasterUploadEditModal,
    basicPrice: state.RegularOrder.basicPrice,
    selectedUploadPanelId: state.RegularOrder.selectedUploadPanelId,
    successfulMasterUploadRespone: state.RegularOrder.successfulMasterUploadRespone,
    uploadedFiles: state.RegularOrder.uploadedFiles,
    extendedServicePrice: state.RegularOrder.extendedServicePrice,
    uploadedFiles: state.RegularOrder.uploadedFiles,
});
const mapDispatchToProps = { setIsOpenFileCheckModal, setAfterMasterUploadEditModal, setBasicPrice, setSelectedUploadPanelId, setSuccessfulMasterUploadRespone };

class AfterMasterUploadEditModal extends Component {

    render() {
        return (
            <div>
                <Modal
                    onClose={() => this.props.setAfterMasterUploadEditModal(false)}
                    open={this.props.afterMasterUploadEditModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styles.modal.box}>
                        <CacheProvider value={cacheRtl}>
                            <ThemeProvider theme={theme}>
                                <div className='w-75 row bg-light rounded d-flex justify-content-center '>
                                    <div className='col-12 bg-danger d-flex justify-content-between flex-row-reverse py-2 rounded'>
                                        <button onClick={() => this.props.setAfterMasterUploadEditModal(false)} className='bg-danger border border-0 text-light'>X</button>
                                        <p className='mb-0 text-light'>{this.props.selectedUploadPanelId === 1 ? 'فایل چاپی چهار رنگ(روی سفارش)' : 'فایل چاپی چهار رنگ (پشت سفارش)'}</p>
                                    </div>
                                    <div className='bg-light row d-flex justify-content-center align-items-start mt-3'>
                                        <div className='col-8 cBorder-3'>
                                            <ProductOffset />
                                        </div>
                                        <div className='col-4'>
                                            <PriceTable />
                                        </div>
                                    </div>
                                </div>
                            </ThemeProvider>
                        </CacheProvider>
                    </Box>
                </Modal>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AfterMasterUploadEditModal);