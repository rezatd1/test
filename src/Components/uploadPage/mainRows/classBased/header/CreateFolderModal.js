import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { DefaultPostAPICall } from '../../API/DefaultPostAPICall';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import { headerStyles } from '../../../Styles/headerStyles'
import { connect } from 'react-redux';
import { getSelectedTreeItem, getSelectedCreateNum } from '../../../../reduxClassBased/SelectedItemSlice'

const mapStateToProps = (state) => ({
    selectedTreeObject: state.SelectedItem.selectedTreeObject
});
const mapDispatchToProps = { getSelectedTreeItem, getSelectedCreateNum };

const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

class CreateFolderModal extends Component {

    constructor() {
        super();
        this.state = { customerInput: "" };
    }
    handleCreateFolder = () => {
        DefaultPostAPICall("/api/fa/FileManager/FolderManagement/Create?", {
            "name": this.state.customerInput,
            "parentId": this.props.selectedTreeObject.id 
        }).then((response) => {
            console.log(response);
            this.props.getSelectedTreeItem(this.props.selectedTreeObject)
            this.props.createFolderStateHandler(false)
            this.props.getSelectedCreateNum(new Date())
        })
    }

    render() {
        const { openState, createFolderStateHandler } = this.props;
        return (
            <div>
                <Modal
                    open={openState}
                    onClose={() => createFolderStateHandler(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={headerStyles.createAndUpload.createFolderModal.box}>
                        <div>
                            <Typography sx={headerStyles.createAndUpload.createFolderModal.typography} id="modal-modal-title" variant="h6" component="h2">
                                ایجاد پوشه 
                            </Typography>
                        </div>
                        <div dir='rtl'>
                            <CacheProvider value={cacheRtl}>
                                <ThemeProvider theme={theme}>
                                    <div dir="rtl" className='my-5 me-3 custom-style-4'>
                                        <TextField
                                            label="نام پوشه"
                                            variant="standard"
                                            sx={{ width: '95%' }}
                                            InputLabelProps={{
                                                sx: { fontFamily: 'Yekan Bakh' }
                                            }}
                                            onChange={(e) => this.setState({ customerInput: e.target.value })}
                                        />
                                    </div>
                                </ThemeProvider>
                            </CacheProvider>
                        </div>
                        <div className='d-flex justify-content-end ms-3 mb-3'>
                            <Button onClick={this.handleCreateFolder}
                                variant="outlined" sx={headerStyles.createAndUpload.createFolderModal.containedButton}>ایجاد</Button>
                            <Button onClick={() => createFolderStateHandler(false)} variant="outlined" sx={headerStyles.createAndUpload.createFolderModal.outlinedButton}>انصراف</Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CreateFolderModal);
