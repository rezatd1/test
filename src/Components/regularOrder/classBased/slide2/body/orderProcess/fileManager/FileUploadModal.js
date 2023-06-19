import React, { Component } from 'react';
import ArticleIcon from '@mui/icons-material/Article';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { headerStyles } from '../../../../../../uploadPage/Styles/headerStyles';
import { connect } from 'react-redux';
import { setCustomerUploadedFile, setIsOpenFileCheckModal } from '../../../../../../redux/RegularOrderSlice';
import FileCheckerModal from './FileCheckerModal';

const mapStateToProps = (state) => ({
    customerUploadedFile: state.RegularOrder.customerUploadedFile,
    isOpenFileCheckModal: state.RegularOrder.isOpenFileCheckModal
});
const mapDispatchToProps = { setCustomerUploadedFile, setIsOpenFileCheckModal };

class FileUploadModal extends Component {

    // customerFileUploadHandler = (e) => {
    //     this.props.setIsOpenFileCheckModal(true);
    //     this.props.setCustomerUploadedFile(e.target.files[0]);
    //     console.log('***isOpenFileCheckModal', this.props.isOpenFileCheckModal);
    // }

    componentDidUpdate(prevProps) {
        if ((this.props.isOpenFileCheckModal !== prevProps.isOpenFileCheckModal) && (this.props.customerUploadedFile !== prevProps.customerUploadedFile)) {
            this.props.handleUploadModalStatus(false)
        }
    }

    render() {
        const { handleUploadModalStatus } = this.props;
        return (
            <div className='col-12 my-3 bg-light row justify-content-center'>
                <div className='cBG-4 row col-10 py-5 rounded'>
                    <div className='col-5 d-flex justify-content-center row mx-0 align-content-center'>
                        <label htmlFor="fileInput" className='col-12 d-flex justify-content-center custom-style-2'>
                            <FileOpenIcon sx={{ fontSize: '4rem', color: '#777777' }} />
                        </label>
                        <div className='col-12 d-flex justify-content-center custom-style-2 my-4'>
                            <label htmlFor="fileInput">فایل را بکشید و رها کنید</label>
                        </div>
                    </div>
                    <div className='col-2 d-flex justify-content-center align-items-center'>یا</div>
                    <div className='col-5 d-flex justify-content-center row mx-0 align-content-center'>
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
                        <label htmlFor="fileInput" className='col-12 d-flex justify-content-center custom-style-2'>
                            <ArticleIcon sx={{ fontSize: '4rem', color: '#777777' }} />
                        </label>
                        <div className='col-12 d-flex justify-content-center custom-style-2 my-2'>
                            <label htmlFor="fileInput">فایل را انتخاب کنید</label>
                        </div>
                        <div className='col-12 d-flex justify-content-center custom-style-2'>
                            <label htmlFor="fileInput" className='bg-danger border border-0 rounded p-2 px-4 text-light'>انتخاب فایل</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FileUploadModal);