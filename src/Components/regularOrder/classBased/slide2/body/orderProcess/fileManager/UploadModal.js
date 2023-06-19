import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '../../../../../../uploadPage/mainRows/functional/mainPanel/styles'
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { setOrderSlide, setIsOpenFileCheckModal } from '../../../../../../redux/RegularOrderSlice';
import { connect } from 'react-redux';
import FileUploadModal from './FileUploadModal';
import TableUploadModal from './TableUploadModal';

const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const mapStateToProps = (state) => ({
    isOpenFileCheckModal: state.RegularOrder.isOpenFileCheckModal,
    selectedUploadPanelId: state.RegularOrder.selectedUploadPanelId,
});
const mapDispatchToProps = { setOrderSlide, setIsOpenFileCheckModal };

class UploadModal extends Component {

    handleUploadState = (uploadModalState) => {
        this.props.UploadStateHandler(uploadModalState);
    }

    render() {
        const { openState, UploadStateHandler } = this.props;
        return (
            <div>
                <Modal
                    onClose={() => UploadStateHandler(false)}
                    open={openState}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styles.modal.box}>
                        <CacheProvider value={cacheRtl}>
                            <ThemeProvider theme={theme}>
                                <div style={{ width: '800px' }} className='row bg-light rounded d-flex justify-content-center'>
                                    <div className='col-12 bg-danger d-flex justify-content-between flex-row-reverse py-2 rounded'>
                                        <button onClick={() => UploadStateHandler(false)} className='bg-danger border border-0 text-light'>X</button>
                                        <p className='mb-0 text-light'>{this.props.selectedUploadPanelId === 1 ? 'فایل چاپی چهار رنگ(روی سفارش)' : 'فایل چاپی چهار رنگ (پشت سفارش)'}</p>
                                    </div>
                                    <FileUploadModal handleUploadModalStatus={this.handleUploadState} />
                                    <TableUploadModal />
                                </div>
                            </ThemeProvider>
                        </CacheProvider>
                    </Box>
                </Modal>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UploadModal);