import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from './styles';
import { CacheProvider } from '@emotion/react';
import ReportProblemSharpIcon from '@mui/icons-material/ReportProblemSharp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { DefaultPostAPICall } from './DefaultPostAPICall';
import { useDispatch, useSelector } from "react-redux";
import { getSelectedTreeItem, getSelectedPanel } from '../../../../redux/SelectedItemSlice';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles';

const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

export default function ArrayDeleteModal({ openState, filteredArray, deleteStateHandler, selectAllButtonControl }) {
    const dispatch = useDispatch();

    const handleDeleteSubmit = () => {
        DefaultPostAPICall("/api/fa/FileManager/FileManagement/Delete?", filteredArray).then((response) => {
            dispatch(getSelectedTreeItem({}))
            deleteStateHandler(false);
            selectAllButtonControl(false)
        });
    }

    return (
        <div>
            <Modal
                onClose={() => deleteStateHandler(false)}
                open={openState}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.arrayDeleteModal.box}>
                    <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                            <div className='row h-auto col-12 w-auto p-2 ms-5 me-2'>
                                <div className='col-2 ps-5'><ReportProblemSharpIcon sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.arrayDeleteModal.modal} /></div>
                                {
                                    filteredArray && filteredArray.length > 0 &&
                                    <div className='col-10 mt-2 pe-5 pt-2'>
                                        آیا از حذف {filteredArray.length} فایل اطمینان دارید؟
                                    </div>
                                }

                            </div>
                            <div className='d-flex justify-content-end ms-3 mb-3 mt-5'>
                                <div className='ms-2'>
                                    <Button onClick={handleDeleteSubmit}
                                        variant="outlined" sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.arrayDeleteModal.containedButton}>تایید</Button>
                                </div>
                                <div>
                                    <Button onClick={() => deleteStateHandler(false)} variant="outlined" sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.arrayDeleteModal.outlinedButton}>انصراف</Button>
                                </div>
                            </div>
                        </ThemeProvider>
                    </CacheProvider>
                </Box>
            </Modal>
        </div>
    )
}
