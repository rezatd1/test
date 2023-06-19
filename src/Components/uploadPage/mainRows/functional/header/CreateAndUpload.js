import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CreateFolderModal from '../../classBased/header/CreateFolderModal';
import { useSelector } from 'react-redux';
import { headerStyles } from '../../../Styles/headerStyles'

export default function CreateAndUpload() {
    const [isOpenCreateFolderModal, setIsOpenCreateFolderModal] = useState();

    const handleToggleCreateFolder = () => setIsOpenCreateFolderModal(!isOpenCreateFolderModal)
    const handleCreateFolderModalState = (deleteData) => {
        setIsOpenCreateFolderModal(deleteData);
    }
    const wantedTreeItemSelected = useSelector((state) => state.SelectedItem.selectedTreeObject);

    return (
        <div className=' col-6 d-flex justify-content-end px-0'>
            {isOpenCreateFolderModal ? (
                <CreateFolderModal openState={isOpenCreateFolderModal} createFolderStateHandler={handleCreateFolderModalState} />
            ) : (null)}
            <div dir='rtl' className='col-6 d-flex'>
                <div className='col-6 w-auto'>
                    <Button onClick={handleToggleCreateFolder} variant="outlined" startIcon={<CreateNewFolderIcon sx={headerStyles.createAndUpload.outlinedButtonIcon} />}
                        sx={headerStyles.createAndUpload.outlinedButton}>ایجاد پوشه</Button>
                </div>
                <div className='col-6 w-auto px-3'>
                    <Button variant="outlined" startIcon={<CloudUploadIcon sx={headerStyles.createAndUpload.containedButtonIcon} />}
                        sx={headerStyles.createAndUpload.containedButton}>بارگذاری فایل</Button>
                </div>
            </div>
        </div>)
}
