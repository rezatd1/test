import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '../../../../../../uploadPage/mainRows/functional/mainPanel/styles'
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { setIsOpenFileCheckModal, setSelectedUploadPanelId, setSuccessfulMasterUploadRespone, setAfterMasterUploadEditModal, setFilePublicURL, setDraftImg1, setDraftImg2, setThumbnailImg1, setThumbnailImg2, setCustomerUploadedFile } from '../../../../../../redux/RegularOrderSlice';
import { connect } from 'react-redux';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { DefaultPostAPICall } from '../../../../../API/DefaultPostAPICall';
import { DefaultGetAPICall } from '../../../../../API/DefaultGetAPICall';
import { PostAPICall } from '../../../../../API/PostAPICall';
import { headerStyles } from '../../../../../../uploadPage/Styles/headerStyles';
import RepartitionIcon from '@mui/icons-material/Repartition';

import axios from 'axios';

const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const mapStateToProps = (state) => ({
    isOpenFileCheckModal: state.RegularOrder.isOpenFileCheckModal,
    customerUploadedFile: state.RegularOrder.customerUploadedFile,
    circulationId: state.RegularOrder.circulationId,
    productSpecialDetail: state.RegularOrder.productSpecialDetail,
    printSideTypes: state.RegularOrder.printSideTypes,
    printSeries: state.RegularOrder.printSeries,
    selectedUploadPanelId: state.RegularOrder.selectedUploadPanelId,
    successfulMasterUploadRespone: state.RegularOrder.successfulMasterUploadRespone,
    afterMasterUploadEditModal: state.RegularOrder.afterMasterUploadEditModal,
    filePublicURL: state.RegularOrder.filePublicURL,
    draftImg: state.RegularOrder.draftImg,
    thumbnailImg: state.RegularOrder.thumbnailImg,
});
const mapDispatchToProps = {
    setIsOpenFileCheckModal, setSelectedUploadPanelId,
    setSuccessfulMasterUploadRespone, setAfterMasterUploadEditModal,
    setFilePublicURL, setDraftImg1, setDraftImg2, setThumbnailImg1, setThumbnailImg2,
    setCustomerUploadedFile
};

class FileCheckerModal extends Component {

    constructor() {
        super();
        this.state = { errorMessage: '' }
    }
    handleUploadState = (uploadModalState) => {
        this.props.UploadStateHandler(uploadModalState)
    }

    uploadedFileDaraHandler = () => {
        DefaultPostAPICall("/api/fa/Order/SharedSheetOrder/CheckFileBeforeUpload?", {
            "ProductId": this.props.circulationId,
            "FileName": this.props.customerUploadedFile.name,
            "FileSize": this.props.customerUploadedFile.size,
            "Width": null,
            "Height": null,
            "IsDouble": this.props.printSideTypes === 2 ? true : false
        }).then((response) => {
            if (response === null) {
                const formData = new FormData();
                formData.append('file', this.props.customerUploadedFile);
                formData.append('SharedSheetOrderDetailUserFileType', this.props.selectedUploadPanelId === 1 ? 1 : 2);
                formData.append('productId', this.props.circulationId);
                formData.append('series', this.props.printSeries);
                formData.append('isDouble', this.props.printSideTypes === 2 ? true : false);
                if (this.props.selectedUploadPanelId === 2) {
                    formData.append('frontFileId', this.props.successfulMasterUploadRespone[0].id);
                }
                PostAPICall("/api/fa/Order/SharedSheetOrder/UploadMasterFile?", formData).then((response) => {
                    if (response.data === null) {
                        this.setState({ errorMessage: response.messageText })
                    } else {
                        this.props.setSuccessfulMasterUploadRespone(response.data);
                        this.props.setAfterMasterUploadEditModal(true);
                    }
                })
            }
        });
    }

    componentDidMount() {
        this.uploadedFileDaraHandler();
    }

    componentDidUpdate(prevProps) {
        if (this.props.successfulMasterUploadRespone !== prevProps.successfulMasterUploadRespone) {
            DefaultPostAPICall("/api/fa/Order/SharedSheetOrder/GetFilePublicUrl?", {
                "id": this.props.successfulMasterUploadRespone[0].id
            }).then((response) => {
                this.props.setFilePublicURL(response);
            })
        }
        if (this.props.filePublicURL !== prevProps.filePublicURL) {
             DefaultGetAPICall(this.props.filePublicURL.draft, '').then((response) => {
                 if (this.props.selectedUploadPanelId === 1) {
                     this.props.setDraftImg1(response);
                 } else {
                     this.props.setDraftImg2(response)
                }

             });
             DefaultGetAPICall(this.props.filePublicURL.thumbnail, '').then((response) => {
                 if (this.props.selectedUploadPanelId === 1) {
                     this.props.setThumbnailImg1(response)
                 } else {
                     this.props.setThumbnailImg2(response)
                 }
             });
        }
        if (this.props.customerUploadedFile !== prevProps.customerUploadedFile) {
            this.uploadedFileDaraHandler();
        }
    }

    render() {
        return (
            <div>
                <Modal
                    onClose={() => this.props.setIsOpenFileCheckModal(false)}
                    open={this.props.isOpenFileCheckModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styles.modal.fileChecker}>
                        <CacheProvider value={cacheRtl}>
                            <ThemeProvider theme={theme}>
                                <div className='row bg-light rounded d-flex justify-content-center'>
                                    <div className='col-12 bg-danger d-flex justify-content-between flex-row-reverse py-2 rounded'>
                                        <button onClick={() => this.props.setIsOpenFileCheckModal(false)} className='bg-danger border border-0 text-light'>X</button>
                                        <p className='mb-0 text-light'>{this.props.selectedUploadPanelId === 1 ? 'فایل چاپی چهار رنگ(روی سفارش)' : 'فایل چاپی چهار رنگ (پشت سفارش)'}</p>
                                    </div>
                                    <input
                                        onChange={(e) => {
                                            this.props.setIsOpenFileCheckModal(true);
                                            this.props.setCustomerUploadedFile(e.target.files[0])
                                        }}
                                        type="file"
                                        id="fileInput"
                                        name="file"
                                        style={headerStyles.fileUpload}
                                    />
                                    <div className='bg-light row d-flex justify-content-center align-items-center'>
                                        <div className='col-10 cBG-3 d-flex my-4 mx-5 row'>
                                            <div className='py-2 d-flex align-items-center col-1'><InsertDriveFileIcon fontSize='large' /></div>
                                            <div className='py-2 d-flex align-items-center col-3 w-auto'>{this.props.customerUploadedFile.name}</div>
                                            <div className='py-2 d-flex align-items-center col-8'>
                                                {this.state.errorMessage === "" ? " بارگذاری انجام شد. چند دقیقه منتظر بمانید ..." :
                                                    <>
                                                        <p className='m-1' style={styles.modal.errorMessage}>{this.state.errorMessage}</p>
                                                        <label htmlFor='fileInput' className='col-6 d-flex justify-content-end'>
                                                            <RepartitionIcon fontSize='large' />
                                                        </label>
                                                    </>
                                                }
                                            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(FileCheckerModal);
