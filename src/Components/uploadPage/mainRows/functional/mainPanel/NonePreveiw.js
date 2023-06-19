import React from 'react'
import styles from './styles'
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import FolderIcon from '@mui/icons-material/Folder';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles';

export default function NonePreveiw() {
  return (
    <>
    <div>
        <Grid container justifyContent='center'>
            <Grid item>
                <Box sx={styles.previewIcon.box}>
                    <FolderIcon sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.nonePreview.color} />
                </Box>
            </Grid>
        </Grid>
        <div className='col-12 row pt-4 justify-content-center w-auto'>
            <div className='col-12 row pe-4 justify-content-center'>آیتمی انتخاب نشده است</div>
        </div>
    </div>
</>
  )
}
