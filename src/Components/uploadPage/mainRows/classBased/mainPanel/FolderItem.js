import React, { Component } from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

export default class FolderItem extends Component {
    render() {
        const { folderName, folderKey, onClickProps, activeStyle, doubleClick } = this.props;
        return (
            <div onDoubleClick={doubleClick} style={activeStyle} onClick={onClickProps} key={folderKey} className='col-2 h-25 mt-2 rounded ms-2 d-flex justify-content-center flex-wrap custom-bg-3' >
                <FolderIcon sx={{ fontSize: '5rem', color: '#525151' }} />
                <p className='mb-2 justify-content-center text-truncate'>{folderName}</p>
            </div>
        )
    }
}
