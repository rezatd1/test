import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import { DefaultGetAPICall } from '../mainPanel/DefaultGetAPICall';
import { headerStyles } from '../../../Styles/headerStyles';

export default function UsedStorage() {
    const [usedStorage, setUsedStorage] = useState();

    useEffect(()=> {
        DefaultGetAPICall("/api/fa/FileManager/FileManagement/GetDiskUsage?", '').then((response) => setUsedStorage(response))
    },[])

    return (
        <div dir='rtl' className='col-6 d-flex align-items-center justify-content-end'>
            {usedStorage ? <Typography sx={headerStyles.usedStorage.typography}>
                <AddToDriveIcon sx={headerStyles.usedStorage.icon} />
                {Math.ceil(usedStorage.usedVolume / 1048569)} مگابایت استفاده شده از {Math.ceil(usedStorage.maximumVolume / 1048569)} مگابایت
            </Typography> : null}
        </div>
    )
}
