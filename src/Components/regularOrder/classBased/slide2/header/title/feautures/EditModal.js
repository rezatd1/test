import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '../../../../../../uploadPage/mainRows/functional/mainPanel/styles'
import { CacheProvider } from '@emotion/react';
import ReportProblemSharpIcon from '@mui/icons-material/ReportProblemSharp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { setOrderSlide } from '../../../../../../redux/RegularOrderSlice';
import { connect } from 'react-redux';

const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const mapStateToProps = (state) => ({ selectedTreeObject: state.SelectedItem.selectedTreeObject });
const mapDispatchToProps = { setOrderSlide };

class EditModal extends Component {
    render() {

        const { openState, editStateHandler } = this.props;
        return (
            <div>
                <Modal
                    onClose={() => editStateHandler(false)}
                    open={openState}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styles.modal.previousBox}>
                        <CacheProvider value={cacheRtl}>
                            <ThemeProvider theme={theme}>
                                <div className='row h-auto col-12 w-auto p-2'>
                                    <div className='col-2 ps-0'><ReportProblemSharpIcon sx={{ fontSize: '70px', color: 'orange' }} /></div>
                                    <div className='col-10 mt-2 pe-0'>
                                        آیا به بازگشت اطمینان دارید؟ اطلاعات سفارش جاری حذف خواهد شد
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end ms-3 mb-3 mt-5'>
                                    <div className='ms-2'>
                                        <Button onClick={()=> this.props.setOrderSlide(1)}
                                            variant="outlined" sx={styles.rename.buttons.buttonOne}>تایید</Button>
                                    </div>
                                    <div>
                                        <Button onClick={() => editStateHandler(false)} variant="outlined" sx={styles.rename.buttons.buttonTwo}>انصراف</Button>
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
export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
