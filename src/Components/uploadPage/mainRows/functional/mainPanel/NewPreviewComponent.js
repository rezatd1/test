import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { DefaultGetAPICall } from './DefaultGetAPICall';
import FolderPreview from '../../classBased/mainPanel/FolderPreview'
import FilePreview from '../../classBased/mainPanel/FilePreview'
import NonePreveiw from '../../classBased/mainPanel/NonePreview';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles';

export default function NewPreviewComponent() {
    const [registerThumbnail, setRegisterThumbnail] = useState();
    const [fileInfo, setFileInfo] = useState();

    const dispatch = useDispatch();
    const wantedPanelItemSelected = useSelector((state) => state.SelectedItem.selectedPanelObject);

    useEffect(() => {
        if (wantedPanelItemSelected) {
            if (!wantedPanelItemSelected.isFolder) {
                DefaultGetAPICall("/api/fa/FileManager/FileManagement/GetFileInfo?", `id=${wantedPanelItemSelected.id}&name=${wantedPanelItemSelected.name}`)
                    .then(response => {
                        setFileInfo(response);
                    });
            }
        }
    }, [wantedPanelItemSelected])

    useEffect(() => {
        if (fileInfo) {
            DefaultGetAPICall(fileInfo.contentUrl, "").then((response) => setRegisterThumbnail(response))
        }
    }, [fileInfo])

    return (
        <div className='col-12 justify-content-center'>
            <div className='col-12 row'>
                <Button size='small' sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.buttonArea.Button} variant='string'>
                    <CloseIcon sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.buttonArea.icon} />
                </Button>
            </div>
            {wantedPanelItemSelected.id ? (
                wantedPanelItemSelected.isFolder ? (
                    <FolderPreview folderName={wantedPanelItemSelected.name} folderId={wantedPanelItemSelected.id} />
                ) : (
                    fileInfo ? (
                        <FilePreview selectedObject={fileInfo} 
                        imgSrc={registerThumbnail} 
                        name={fileInfo.name} 
                        resolution={fileInfo.resolution} 
                        height={fileInfo.height} 
                        width={fileInfo.width} 
                        volume={fileInfo.volume} 
                        id={fileInfo.id} />
                    ) : (null)
                )
            ) : (<NonePreveiw />)
            }
        </div >
    )
}
