import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { DefaultPostAPICall } from '../mainPanel/DefaultPostAPICall';
import { useDispatch } from "react-redux";
import { getSelectedTreeItem, getSelectedCreateNum } from '../../../../redux/SelectedItemSlice';
import { useState } from 'react';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import { headerStyles } from '../../../Styles/headerStyles'

export default function CreateFolderModal({ openState, createFolderStateHandler }) {
    const [customerInput, setCustomerInput] = useState();
    const dispatch = useDispatch();

    const wantedTreeItemSelected = useSelector((state) => state.SelectedItem.selectedTreeObject);
    const handleCreateFolder = () => {
        DefaultPostAPICall("/api/fa/FileManager/FolderManagement/Create?", {
            "name": customerInput,
            "parentId": wantedTreeItemSelected.id,
        }).then((response) => {
            console.log(response);
            dispatch(getSelectedTreeItem(wantedTreeItemSelected))
            createFolderStateHandler(false)
            dispatch(getSelectedCreateNum(new Date()))
        })
    }

    const theme = createTheme({
        direction: 'rtl',
    });
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

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
                            ایجاد پوشه جدیدprops
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
                                        onChange={(e) => setCustomerInput(e.target.value)}
                                    />
                                </div>
                            </ThemeProvider>
                        </CacheProvider>
                    </div>
                    <div className='d-flex justify-content-end ms-3 mb-3'>
                        <Button onClick={handleCreateFolder}
                            variant="outlined" sx={headerStyles.createAndUpload.createFolderModal.containedButton}>ایجاد</Button>
                        <Button onClick={() => createFolderStateHandler(false)} variant="outlined" sx={headerStyles.createAndUpload.createFolderModal.outlinedButton}>انصراف</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
