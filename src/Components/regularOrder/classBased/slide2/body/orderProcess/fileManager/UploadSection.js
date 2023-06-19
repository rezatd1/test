import React, { Component } from 'react';
import UploadItem from './UploadItem';
import UploadModal from './UploadModal';
import FileCheckerModal from './FileCheckerModal';
import { connect } from 'react-redux';
import { setIsOpenFileCheckModal, setPrintSideTypes, setSelectedUploadPanelId, setAfterMasterUploadEditModal } from '../../../../../../redux/RegularOrderSlice';
import AfterMasterUploadEditModal from './AfterMasterUploadEditModal';

const mapStateToProps = (state) => ({
    isOpenFileCheckModal: state.RegularOrder.isOpenFileCheckModal,
    printSideTypes: state.RegularOrder.printSideTypes,
    selectedUploadPanelId: state.RegularOrder.selectedUploadPanelId,
    afterMasterUploadEditModal: state.RegularOrder.afterMasterUploadEditModal,
    extendedServicePrice: state.RegularOrder.extendedServicePrice,
    uploadedFiles: state.RegularOrder.uploadedFiles,
    draftImg1: state.RegularOrder.draftImg1,
    draftImg2: state.RegularOrder.draftImg2,
    thumbnailImg1: state.RegularOrder.thumbnailImg1,
    thumbnailImg2: state.RegularOrder.thumbnailImg2,
    uploadedFile1: state.RegularOrder.uploadedFile1,
    uploadedFile2: state.RegularOrder.uploadedFile2,
    filePublicURL: state.RegularOrder.filePublicURL,
});
const mapDispatchToProps = { setIsOpenFileCheckModal, setPrintSideTypes, setSelectedUploadPanelId, setAfterMasterUploadEditModal };

class UploadSection extends Component {
    constructor() {
        super();
        this.state = { isOpenUploadModal: false }
    }

    componentDidUpdate(prevProps) {
        if ((this.props.extendedServicePrice !== prevProps.extendedServicePrice) && (this.props.extendedServicePrice !== null)) {
            this.props.setAfterMasterUploadEditModal(false);
            this.props.setIsOpenFileCheckModal(false);
        }
    }

    isOpenUploadModalHandler = (uploadModalStatus) => {
        this.setState({ isOpenUploadModal: uploadModalStatus })
    }

    render() {
        return (
            <div className='row d-flex flex-wrap me-3'>
                {this.props.printSideTypes === 2 ?
                    <>
                        <UploadItem uploadedFile={this.props.uploadedFile1} thumbnail={this.props.draftImg1} itemKey={1} isOpenUploadModalHandler={this.isOpenUploadModalHandler} />
                        <UploadItem uploadedFile={this.props.uploadedFile2} thumbnail={this.props.draftImg2} itemKey={2} isOpenUploadModalHandler={this.isOpenUploadModalHandler} />
                    </>
                    : <UploadItem uploadedFile={this.props.uploadedFile1} thumbnail={this.props.draftImg1} isOpenUploadModalHandler={this.isOpenUploadModalHandler} />}
                {this.state.isOpenUploadModal ?
                    <UploadModal itemKey={1} openState={this.state.isOpenUploadModal} UploadStateHandler={this.isOpenUploadModalHandler} />
                    : null}
                {this.props.isOpenFileCheckModal ? <FileCheckerModal /> : null}
                {this.props.afterMasterUploadEditModal ? <AfterMasterUploadEditModal /> : null}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UploadSection);