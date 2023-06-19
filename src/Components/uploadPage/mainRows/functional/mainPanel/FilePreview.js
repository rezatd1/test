import React, { useState } from 'react';
import styles from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteModal from './DeleteModal';
import { DefaultGetAPICall } from './DefaultGetAPICall';
import RenameModal from './RenameModal';

export default function FilePreview({ imgSrc, name, resolution, height, width, volume, id, selectedObject }) {
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [isOpenRenameModal, setIsOpenRenameModal] = useState(false);
    const [folderRenameFirstRespone, setFolderRenameFirstRespone] = useState();

    const handleToggleDelete = () => setIsOpenDeleteModal(!isOpenDeleteModal)
    const handleToggleRename = () => {
        setIsOpenRenameModal(!isOpenRenameModal);
        DefaultGetAPICall("/api/fa/FileManager/FileManagement/GetFileDetail?", `id=${id}`).then((response) => setFolderRenameFirstRespone(response))
    }

    const handleDeleteModalState = (data) => {
        setIsOpenDeleteModal(data);
    }
    const handleRenameModalState = (renameData) => {
        setIsOpenRenameModal(renameData);
    }

    return (
        <>
            {isOpenDeleteModal ? (
                <DeleteModal deleteSelectedObject={selectedObject} openState={isOpenDeleteModal} name={name} id={id} deleteStateHandler={handleDeleteModalState} />
            ) : (null)}
            {isOpenRenameModal ? (
                <>
                    <RenameModal openState={isOpenRenameModal} renameStateHandler={handleRenameModalState}
                        name={folderRenameFirstRespone ? folderRenameFirstRespone.name : null}
                        id={folderRenameFirstRespone ? folderRenameFirstRespone.id : null}
                        // folderStatus={folderRenameFirstRespone ? folderRenameFirstRespone.isFolder : null}
                        selectedObject={folderRenameFirstRespone ? folderRenameFirstRespone : null}
                    />
                </>
            ) : (null)}
            <div>
                <div className='col-12 row w-auto justify-content-center'>
                    <img className='w-50' src={imgSrc}></img>
                </div>
                <div className='col-12 row pt-4'>
                    <div className='col-12 row pe-4'>نام : {name}</div>
                    <div className='col-12 row pe-4 pt-1'>رزولوشن : DPI {resolution}</div>
                    <div className='col-12 row pe-4 pt-1'>ابعاد : {height}x{width} میلیمتر</div>
                    <div className='col-12 row pe-4 pt-1'>حجم : {Math.ceil(volume / 1048553)} مگابایت</div>
                </div>
            </div>
            <div className='col-12 row w-auto mt-4 mb-3 justify-content-center'>
                <div className='w-auto px-0'>
                    <Button onClick={handleToggleRename} variant="outlined" startIcon={<DriveFileRenameOutlineIcon sx={styles.previewButtons.startIcon} />}
                        sx={styles.previewButtons.button}>تغییر نام</Button>
                </div>
                <div className='w-auto px-1'>
                    <Button variant="outlined" startIcon={<BorderColorIcon sx={styles.previewButtons.startIcon} />}
                        sx={styles.previewButtons.button}>ویرایش فایل</Button>
                </div>
                <div className='w-auto px-0'>
                    <Button onClick={handleToggleDelete} variant="outlined" startIcon={<DeleteIcon sx={styles.previewButtons.startIcon} />}
                        sx={styles.previewButtons.button}>حذف</Button>
                </div>
            </div>
        </>
    )
}
