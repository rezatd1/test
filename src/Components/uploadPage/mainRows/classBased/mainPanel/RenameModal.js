import React, { Component } from 'react'
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
import { DefaultPostAPICall } from '../../API/DefaultPostAPICall';
import { getSelectedTreeItem, getSelectedPanel, getSelectedCreateNum } from '../../../../reduxClassBased/SelectedItemSlice';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles';
import { connect } from 'react-redux';

const theme = createTheme({
  direction: 'rtl',
});
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const mapStateToProps = (state) => ({ panelAllItems: state.SelectedItem.panelAllItems, panelSelectedItem: state.SelectedItem.selectedPanelObject });
const mapDispatchToProps = { getSelectedTreeItem, getSelectedPanel, getSelectedCreateNum };
class RenameModal extends Component {

  constructor(props) {
    super(props);
    this.state = { customerInput: '' };
  }

  handleFinalFolderRename = () => {
    if (this.props.panelSelectedItem.id) {
      if (this.props.panelSelectedItem.isFolder === true) {
        DefaultPostAPICall("/api/fa/FileManager/FolderManagement/Rename?", {
          "id": this.props.id,
          "name": this.props.name,
          "newName": this.state.customerInput,
        }).then((response) => {
          this.props.getSelectedPanel({})
          this.props.renameStateHandler(false);
          this.props.getSelectedTreeItem({});
        })
      } else {
        DefaultPostAPICall("/api/fa/FileManager/FileManagement/Rename?", {
          "id": this.props.id,
          "name": this.props.name,
          "newName": `${this.state.customerInput}.pdf`,
        }).then((response) => {
          this.props.getSelectedPanel({})
          this.props.renameStateHandler(false);
          this.props.getSelectedTreeItem({});
        })
      }
    }
  }

  render() {
    const { openState, renameStateHandler, name, id, selectedObject } = this.props;
    console.log("***this.props.selectedObject", this.props.panelSelectedItem);
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
                    onChange={(e) => this.setState({ customerInput: e.target.value })}
                  />
                </div>
              </ThemeProvider>
            </CacheProvider>
          </div>
          <div className='d-flex justify-content-end ms-3 mb-3'>
            <Button onClick={this.handleFinalFolderRename}
              variant="outlined" sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.renameModal.containedButton}>تغییر</Button>
            <Button onClick={() => renameStateHandler(false)} variant="outlined" sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.FolderPreview.renameModal.outlinedButton}>انصراف</Button>
          </div>
        </Box>
      </Modal>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RenameModal);
