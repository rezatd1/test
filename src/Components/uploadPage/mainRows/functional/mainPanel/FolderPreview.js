import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import FolderIcon from '@mui/icons-material/Folder';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteModal from '../../classBased/mainPanel/DeleteModal';
import RenameModal from '../../classBased/mainPanel/RenameModal';
import { DefaultGetAPICall } from './DefaultGetAPICall';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles';

export default function FolderPreview({ folderName, folderId }) {
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [isOpenRenameModal, setIsOpenRenameModal] = useState(false);
    const [folderRenameFirstRespone, setFolderRenameFirstRespone] = useState();

    const handleToggleDelete = () => setIsOpenDeleteModal(!isOpenDeleteModal)
    const handleToggleRename = () => {
        setIsOpenRenameModal(!isOpenRenameModal);
        DefaultGetAPICall("/api/fa/FileManager/FolderManagement/GetFolderDetail?", `id=${folderId}`).then((response) => setFolderRenameFirstRespone(response))
    }
    const handleDeleteModalState = (deleteData) => {
        setIsOpenDeleteModal(deleteData);
    }
    const handleRenameModalState = (renameData) => {
        setIsOpenRenameModal(renameData);
    }

    return (
        <>
            {isOpenDeleteModal ? (
                <>
                    <DeleteModal openState={isOpenDeleteModal} name={folderName} id={folderId} deleteStateHandler={handleDeleteModalState} />
                </>
            ) : (null)}
            {isOpenRenameModal ? (
                <>
                    <RenameModal openState={isOpenRenameModal} renameStateHandler={handleRenameModalState}
                        name={folderRenameFirstRespone ? folderRenameFirstRespone.name : null}
                        id={folderRenameFirstRespone ? folderRenameFirstRespone.id : null} />
                </>
            ) : (null)}
            <div>
                <Grid container justifyContent='center'>
                    <Grid item>
                        <Box sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.grid.box}>
                            <FolderIcon sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.grid.icon} />
                        </Box>
                    </Grid>
                </Grid>
                <div className='col-12 row pt-4'>
                    <div className='col-12 row pe-4'>نام : {folderName}</div>
                </div>
            </div>
            <div className='col-12 row w-auto mt-4 mb-3 justify-content-center'>
                <div className='w-auto px-0'>
                    <Button variant="outlined" startIcon={<DriveFileRenameOutlineIcon sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.buttons.changeNameIcon} />}
                        onClick={handleToggleRename}
                        sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.buttons.changeName}>تغییر نام</Button>
                </div>
                <div className='w-auto px-0'>
                    <Button variant="outlined" startIcon={<DeleteIcon sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.buttons.deleteIcon} />}
                        onClick={handleToggleDelete}
                        sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.buttons.delete}>حذف</Button>
                </div>
            </div>
        </>
    )
}
