import React, { Component } from 'react';
import { headerStyles } from '../../../Styles/headerStyles';
import { DefaultGetAPICall } from '../../API/DefaultGetAPICall';
import { Typography } from '@mui/material';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';

export default class UsedStorage extends Component {
    constructor() {
        super();
        this.state = { usedStorage: "" }
    }
    componentDidMount() {
        DefaultGetAPICall("/api/fa/FileManager/FileManagement/GetDiskUsage?", '').then((response) => this.setState({usedStorage: response}))
    }
    render() {
        return (
            <div dir='rtl' className='col-6 d-flex align-items-center justify-content-end'>
                {this.state.usedStorage ? <Typography sx={headerStyles.usedStorage.typography}>
                    <AddToDriveIcon sx={headerStyles.usedStorage.icon} />
                    {Math.ceil(this.state.usedStorage.usedVolume / 1048569)} مگابایت استفاده شده از {Math.ceil(this.state.usedStorage.maximumVolume / 1048569)} مگابایت
                </Typography> : null}
            </div>
        )
    }
}
