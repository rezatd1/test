import React, { Component } from 'react'
import styles from '../../functional/mainPanel/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteModal from './DeleteModal';
import { DefaultGetAPICall } from '../../API/DefaultGetAPICall';
import RenameModal from './RenameModal';

export default class FilePreview extends Component {
    constructor() {
        super();
        this.state = { isOpenDeleteModal: false, isOpenRenameModal: false, folderRenameFirstRespone: '' }
    }
    handleToggleDelete = () => this.setState({ isOpenDeleteModal: !this.state.isOpenDeleteModal })
    handleToggleRename = () => {
        this.setState({ isOpenRenameModal: !this.state.isOpenRenameModal });
        DefaultGetAPICall("/api/fa/FileManager/FileManagement/GetFileDetail?", `id=${this.props.id}`).then((response) => this.setState({ folderRenameFirstRespone: response }))
    }
    handleDeleteModalState = (data) => {
        this.setState({ isOpenDeleteModal: data });
    }
    handleRenameModalState = (renameData) => {
        this.setState({ isOpenRenameModal: renameData });
    }
    render() {
        const { imgSrc, name, resolution, height, width, volume, id, selectedObject } = this.props;
        return (
            <>
                {this.state.isOpenDeleteModal ? (
                    <DeleteModal deleteSelectedObject={selectedObject} openState={this.state.isOpenDeleteModal} name={name} id={id} deleteStateHandler={this.handleDeleteModalState} />
                ) : (null)}
                {this.state.isOpenRenameModal ? (
                    <>
                        <RenameModal openState={this.state.isOpenRenameModal} renameStateHandler={this.handleRenameModalState}
                            name={this.state.folderRenameFirstRespone ? this.state.folderRenameFirstRespone.name : null}
                            id={this.state.folderRenameFirstRespone ? this.state.folderRenameFirstRespone.id : null}
                            // folderStatus={folderRenameFirstRespone ? folderRenameFirstRespone.isFolder : null}
                            selectedObject={this.state.folderRenameFirstRespone ? this.state.folderRenameFirstRespone : null}
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
                        <Button onClick={this.handleToggleRename} variant="outlined" startIcon={<DriveFileRenameOutlineIcon sx={styles.previewButtons.startIcon} />}
                            sx={styles.previewButtons.button}>تغییر نام</Button>
                    </div>
                    <div className='w-auto px-1'>
                        <Button variant="outlined" startIcon={<BorderColorIcon sx={styles.previewButtons.startIcon} />}
                            sx={styles.previewButtons.button}>ویرایش فایل</Button>
                    </div>
                    <div className='w-auto px-0'>
                        <Button onClick={this.handleToggleDelete} variant="outlined" startIcon={<DeleteIcon sx={styles.previewButtons.startIcon} />}
                            sx={styles.previewButtons.button}>حذف</Button>
                    </div>
                </div>
            </>
        )
    }
}
