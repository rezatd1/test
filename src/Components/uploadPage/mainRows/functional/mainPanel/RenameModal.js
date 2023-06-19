import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CacheProvider } from '@emotion/react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { useState } from 'react';
import { DefaultPostAPICall } from './DefaultPostAPICall';
import { useDispatch } from 'react-redux';
import { getSelectedTreeItem, getSelectedPanel } from '../../../../redux/SelectedItemSlice';
import { useEffect } from 'react';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles';

export default function RenameModal({ openState, renameStateHandler, name, id, selectedObject }) {
    const [customerInput, setCustomerInput] = useState();

    const dispatch = useDispatch();
    const theme = createTheme({
        direction: 'rtl',
    });
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    const handleFinalFolderRename = () => {
        if (selectedObject) {
            DefaultPostAPICall("/api/fa/FileManager/FileManagement/Rename?", {
                "id": id,
                "name": name,
                "newName": `${customerInput}.pdf`,
            }).then((response) => {
                renameStateHandler(false);
                dispatch(getSelectedTreeItem({}));
                dispatch(getSelectedPanel({}))
            })
        } else {
            DefaultPostAPICall("/api/fa/FileManager/FolderManagement/Rename?", {
                "id": id,
                "name": name,
                "newName": customerInput,
            }).then((response) => {
                renameStateHandler(false);
                dispatch(getSelectedTreeItem({}));
                dispatch(getSelectedPanel({}))
            })
        }
    }
    
    return (
        <Modal
            open={openState}
            onClose={() => renameStateHandler(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.renameModal.box}>
                <div>
                    <Typography sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.renameModal.typography} id="modal-modal-title" variant="h6" component="h2">
                        تغییر نام ({name})
                    </Typography>
                </div>
                <div dir='rtl'>
                    <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                            <div dir="rtl" className='my-5 me-3 custom-style-4'>
                                <TextField
                                    label="نام جدید"
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
                    <Button onClick={handleFinalFolderRename}
                        variant="outlined" sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.renameModal.containedButton}>تغییر</Button>
                    <Button onClick={() => renameStateHandler(false)} variant="outlined" sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.renameModal.outlinedButton}>انصراف</Button>
                </div>
            </Box>
        </Modal>
    )
}
