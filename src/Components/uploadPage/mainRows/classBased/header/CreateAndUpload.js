import React, { Component } from 'react'
import Button from '@mui/material/Button';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CreateFolderModal from '../../classBased/header/CreateFolderModal';
import { headerStyles } from '../../../Styles/headerStyles'

export default class CreateAndUpload extends Component {
    constructor() {
        super();
        this.state = { isOpenCreateFolderModal: false }
    }
    handleToggleCreateFolder = () => this.setState({ isOpenCreateFolderModal: !this.state.isOpenCreateFolderModal });
    handleCreateFolderModalState = (deleteData) => {
        this.setState({ isOpenCreateFolderModal: deleteData });
    }

    render() {
        return (
            <div className=' col-6 d-flex justify-content-end px-0'>
                {this.state.isOpenCreateFolderModal ? (
                    <CreateFolderModal openState={this.state.isOpenCreateFolderModal} createFolderStateHandler={this.handleCreateFolderModalState} />
                ) : (null)}
                <div dir='rtl' className='col-6 d-flex'>
                    <div className='col-6 w-auto'>
                        <Button onClick={this.handleToggleCreateFolder} variant="outlined" startIcon={<CreateNewFolderIcon sx={headerStyles.createAndUpload.outlinedButtonIcon} />}
                            sx={headerStyles.createAndUpload.outlinedButton}>ایجاد پوشه</Button>
                    </div>
                    <div className='col-6 w-auto px-3'>
                        <Button variant="outlined" startIcon={<CloudUploadIcon sx={headerStyles.createAndUpload.containedButtonIcon} />}
                            sx={headerStyles.createAndUpload.containedButton}>بارگذاری فایل</Button>
                    </div>
                </div>
            </div>
        )
    }
}
