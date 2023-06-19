import React, { Component } from 'react';
import RepartitionIcon from '@mui/icons-material/Repartition';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import { setSuccessfulMasterUploadRespone, setIsOpenFileCheckModal, setCustomerUploadedFile, setAfterMasterUploadEditModal } from '../../../../../../redux/RegularOrderSlice';
import { connect } from 'react-redux';
import { headerStyles } from '../../../../../../uploadPage/Styles/headerStyles';

const mapStateToProps = (state) => ({
    successfulMasterUploadRespone: state.RegularOrder.successfulMasterUploadRespone,
    customerUploadedFile: state.RegularOrder.customerUploadedFile,
    draftImg: state.RegularOrder.draftImg,
    thumbnailImg: state.RegularOrder.thumbnailImg,
    isOpenFileCheckModal: state.RegularOrder.isOpenFileCheckModal,
    afterMasterUploadEditModal: state.RegularOrder.afterMasterUploadEditModal,
    filePublicURL: state.RegularOrder.filePublicURL,
    specificDimensionInfo: state.RegularOrder.specificDimensionInfo,
    draftImg1: state.RegularOrder.draftImg1,
    draftImg2: state.RegularOrder.draftImg2,
    thumbnailImg1: state.RegularOrder.thumbnailImg1,
    thumbnailImg2: state.RegularOrder.thumbnailImg2,
    selectedUploadPanelId: state.RegularOrder.selectedUploadPanelId,
});
const mapDispatchToProps = { setSuccessfulMasterUploadRespone, setCustomerUploadedFile, setIsOpenFileCheckModal, setAfterMasterUploadEditModal };

class ProductOffset extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.customerUploadedFile !== prevProps.customerUploadedFile) {
            this.props.setIsOpenFileCheckModal(true);
            this.props.setAfterMasterUploadEditModal(false)
        }
    }

    insideCSSHandler = () => {
        if (this.props.specificDimensionInfo) {
            if (this.props.specificDimensionInfo.productLatSizeTrimZone) {
                const insideCSS = {
                    outline: "3px dashed white",
                    outlineOffset: `${this.props.specificDimensionInfo.productLatSizeTrimZone.right * -3}px`,
                }
                console.log(insideCSS);
                return insideCSS;
            }
        };
    }

    render() {
        return (
            <>
                <div className='d-flex row justify-content-between py-2 cBG-3 mb-2'>
                    <div className='col-6 row'>
                        <div className='col-7 d-flex justify-content-start align-items-center'>
                            <div className='ms-2'><InsertDriveFileIcon fontSize='large' /></div>
                            <div className='text-truncate'>{this.props.customerUploadedFile.name}</div>
                        </div>
                        <div className='col-5 d-flex justify-content-start align-items-center'>
                            <div className='ms-1'><CloudDoneIcon fontSize='large' /></div>
                            <div dir='ltr' className='text-truncate' style={{ maxWidth: '45px' }}>{this.props.successfulMasterUploadRespone[0].fileLength / 1000000}</div>
                        </div>
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
                    <label htmlFor='fileInput' className='col-6 d-flex justify-content-end'>
                        <RepartitionIcon fontSize='large' />
                    </label>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                    <div>
                        <img className='rounded' src={this.props.selectedUploadPanelId === 1 ? this.props.thumbnailImg1 : this.props.thumbnailImg2}
                        ></img>
                    </div>
                    <div>1/1</div>
                </div>
                <div style={this.insideCSSHandler()}>
                    <img className='cStyle-6' src={this.props.selectedUploadPanelId === 1 ? this.props.draftImg1 : this.props.draftImg2}></img>
                </div>
            </>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductOffset);