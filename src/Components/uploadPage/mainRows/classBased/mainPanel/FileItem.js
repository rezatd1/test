import React, { Component } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import { DefaultGetAPICall } from '../../API/DefaultGetAPICall';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles';

export default class FileItem extends Component {
    constructor() {
        super();
        this.state = { thumbnailSrc: "" };
    }
    componentDidMount() {
        DefaultGetAPICall(this.props.draftLink, "").then((response) => this.setState({ thumbnailSrc: response }))
    }
    render() {
        const { fileLabel, onClickProps, fileKey, draftLink, activeStyle, checkedStatus } = this.props;
       const truncatedLabel = fileLabel.length > 15 ? fileLabel.slice(0, 15) + '...' : fileLabel;
        return (
            <div style={activeStyle} key={fileKey} onClick={onClickProps} className='col-2 h-25 mt-2 rounded ms-2 d-flex justify-content-center flex-wrap custom-bg-3'>
                <img src={this.state.thumbnailSrc} className='row w-50 my-2'></img>
                <FormControlLabel
                    sx={mainPanelStyles.fileManagerPanel.itemFileManager.fileItem.form}
                    checked={checkedStatus}
                    control={<Checkbox size='small' sx={mainPanelStyles.fileManagerPanel.itemFileManager.fileItem.control} />}
                    label={<Typography sx={mainPanelStyles.fileManagerPanel.itemFileManager.fileItem.label}>{truncatedLabel}</Typography>}
                />
            </div>
        )
    }
}
