import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '../../functional/mainPanel/styles';
import { CacheProvider } from '@emotion/react';
import ReportProblemSharpIcon from '@mui/icons-material/ReportProblemSharp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { DefaultPostAPICall } from '../../API/DefaultPostAPICall';
import { getSelectedTreeItem, getSelectedPanel } from '../../../../reduxClassBased/SelectedItemSlice';
import { connect } from 'react-redux';

const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const mapStateToProps = (state) => ({ selectedTreeObject: state.SelectedItem.selectedTreeObject });
const mapDispatchToProps = { getSelectedTreeItem, getSelectedPanel };

class DeleteModal extends Component {

    handleDeleteSubmit = () => {
        if (this.props.deleteSelectedObject == undefined) {
            DefaultPostAPICall("/api/fa/FileManager/FileManagement/Delete?", [{
                "id": this.props.id,
                "name": this.props.name,
            }]).then((response) => {
                if (response !== null) { alert(response) };
                this.props.deleteStateHandler(false);
                this.props.getSelectedTreeItem({});
                this.props.getSelectedPanel({});
            })
        } else {
            DefaultPostAPICall("/api/fa/FileManager/FileManagement/Delete?", [{
                "id": this.props.id,
                "name": this.props.name,
            }]).then((response) => {
                if (response !== null) { alert(response) };
                this.props.deleteStateHandler(false);
                this.props.getSelectedTreeItem({});
                this.props.getSelectedPanel({});
            })
        }

    }

    render() {
        const { openState, name, id, deleteStateHandler, deleteSelectedObject } = this.props;
        return (
            <div>
                <Modal
                    onClose={() => deleteStateHandler(false)}
                    open={openState}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styles.modal.box}>
                        <CacheProvider value={cacheRtl}>
                            <ThemeProvider theme={theme}>
                                <div className='row h-auto col-12 w-auto p-2'>
                                    <div className='col-2 ps-0'><ReportProblemSharpIcon sx={{ fontSize: '70px', color: 'orange' }} /></div>
                                    <div className='col-10 mt-2 pe-0'>
                                        تمامی فایلها و پوشه های داخل این پوشه حذف خواهند شد، آیا از حذف پوشه {name} اطمینان دارید؟</div>
                                </div>
                                <div className='d-flex justify-content-end ms-3 mb-3 mt-5'>
                                    <div className='ms-2'>
                                        <Button onClick={this.handleDeleteSubmit}
                                            variant="outlined" sx={styles.rename.buttons.buttonOne}>تایید</Button>
                                    </div>
                                    <div>
                                        <Button onClick={() => deleteStateHandler(false)} variant="outlined" sx={styles.rename.buttons.buttonTwo}>انصراف</Button>
                                    </div>
                                </div>
                            </ThemeProvider>
                        </CacheProvider>
                    </Box>
                </Modal>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
