import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import FolderIcon from '@mui/icons-material/Folder';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteModal from '../../classBased/mainPanel/DeleteModal';
import RenameModal from '../../classBased/mainPanel/RenameModal';
import { DefaultGetAPICall } from '../../API/DefaultGetAPICall';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles';

export default class FolderPreview extends Component {
    constructor() {
        super();
        this.state = {
            isOpenDeleteModal: false,
            isOpenRenameModal: false,
            folderRenameFirstRespone: ''
        }
    }
    handleToggleDelete = () => this.setState({ isOpenDeleteModal: !this.state.isOpenDeleteModal })
    handleToggleRename = () => {
        this.setState({ isOpenRenameModal: !this.state.isOpenRenameModal });
        DefaultGetAPICall("/api/fa/FileManager/FolderManagement/GetFolderDetail?", `id=${this.props.folderId}`).then((response) => this.setState({ folderRenameFirstRespone: response }))
    }
    handleDeleteModalState = (deleteData) => {
        this.setState({ isOpenDeleteModal: deleteData });
    }
    handleRenameModalState = (renameData) => {
        this.setState({ isOpenRenameModal: renameData });
    }
    render() {
        const { folderName, folderId } = this.props;
        return (
            <>
                {this.state.isOpenDeleteModal ? (
                    <>
                        <DeleteModal openState={this.state.isOpenDeleteModal} name={folderName} id={folderId} deleteStateHandler={this.handleDeleteModalState} />
                    </>
                ) : (null)}
                {this.state.isOpenRenameModal ? (
                    <>
                        <RenameModal openState={this.state.isOpenRenameModal} renameStateHandler={this.handleRenameModalState}
                            name={this.state.folderRenameFirstRespone ? this.state.folderRenameFirstRespone.name : null}
                            id={this.state.folderRenameFirstRespone ? this.state.folderRenameFirstRespone.id : null} />
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
                            onClick={this.handleToggleRename}
                            sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.buttons.changeName}>تغییر نام</Button>
                    </div>
                    <div className='w-auto px-0'>
                        <Button variant="outlined" startIcon={<DeleteIcon sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.buttons.deleteIcon} />}
                            onClick={this.handleToggleDelete}
                            sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.buttons.delete}>حذف</Button>
                    </div>
                </div>
            </>
        )
    }
}
