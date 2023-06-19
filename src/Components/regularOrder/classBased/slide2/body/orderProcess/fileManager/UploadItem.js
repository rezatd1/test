import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedUploadPanelId, setIsOpenFileCheckModal, setCustomerUploadedFile } from '../../../../../../redux/RegularOrderSlice';
import CachedIcon from '@mui/icons-material/Cached';
import { headerStyles } from '../../../../../../uploadPage/Styles/headerStyles';

const mapStateToProps = (state) => ({
    selectedUploadPanelId: state.RegularOrder.selectedUploadPanelId,
    uploadedFiles: state.RegularOrder.uploadedFiles,
    uploadedFile1: state.RegularOrder.uploadedFile1,
    uploadedFile2: state.RegularOrder.uploadedFile2,
});
const mapDispatchToProps = { setSelectedUploadPanelId, setIsOpenFileCheckModal, setCustomerUploadedFile };

class UploadItem extends Component {
    render() {
        const { isOpenUploadModalHandler, itemKey, thumbnail, uploadedFile } = this.props;
        return (
            <div className='col-5 rounded mx-4 px-0 mt-3 cBorder-2'>
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
                <div className='text-light bg-secondary rounded py-1 pe-2 d-flex justify-content-between'>
                    <div>
                        {itemKey === 1 ? 'روی سفارش' : 'پشت سفارش'}
                    </div>

                    {itemKey === 1 && this.props.uploadedFile1.id !== undefined ?
                        <label onClick={() => itemKey === 1 ? this.props.setSelectedUploadPanelId(1) : this.props.setSelectedUploadPanelId(2)} htmlFor='fileInput' className='d-flex no-wrap'>
                            <CachedIcon /><p className='mb-0 mx-2'>تغییر فایل</p>
                        </label> :
                        null
                    }
                    {itemKey === 2 && this.props.uploadedFile2.id !== undefined ?
                        <label onClick={() => itemKey === 1 ? this.props.setSelectedUploadPanelId(1) : this.props.setSelectedUploadPanelId(2)} htmlFor='fileInput' className='d-flex no-wrap'>
                            <CachedIcon /><p className='mb-0 mx-2'>تغییر فایل</p>
                        </label> :
                        null
                    }
                </div>
                {uploadedFile.id ?
                    <div>
                        <img className='w-100 rounded' src={thumbnail}></img>
                    </div>
                    :
                    <button onClick={() => {
                        this.props.isOpenUploadModalHandler(true);
                        this.props.setSelectedUploadPanelId(itemKey);
                    }} className='cStyle-3 text-danger d-flex justify-content-center align-items-center border border-0 bg-light w-100'>برای انتخاب فایل کلیک کنید</button>
                }

            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UploadItem);
