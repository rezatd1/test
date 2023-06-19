import React, { Component } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { DefaultGetAPICall } from '../../API/DefaultGetAPICall';
import FolderPreview from './FolderPreview'
import FilePreview from './FilePreview'
import NonePreveiw from './NonePreview';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles';
import { getSelectedCreateNum } from '../../../../reduxClassBased/SelectedItemSlice';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    selectedPanelObject: state.SelectedItem.selectedPanelObject
});
const mapDispatchToProps = { getSelectedCreateNum };
class NewPreviewComponent extends Component {
    constructor() {
        super();
        this.state = { registerThumbnail: '', fileInfo: '' }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.selectedPanelObject.id) {
            if (!this.props.selectedPanelObject.isFolder) {
                if ((!this.state.fileInfo) || (prevState.fileInfo.name !== this.props.selectedPanelObject.name)) {
                    DefaultGetAPICall("/api/fa/FileManager/FileManagement/GetFileInfo?", `id=${this.props.selectedPanelObject.id ? this.props.selectedPanelObject.id : null}&name=${this.props.selectedPanelObject.name ? this.props.selectedPanelObject.name : null}`)
                        .then(response => {
                            this.setState({ fileInfo: response });
                            console.log('response ok');
                            DefaultGetAPICall(this.state.fileInfo.contentUrl, "").then((response) => this.setState({ registerThumbnail: response }));
                        });
                }
            }
        }
    }

    render() {
        return (
            <div className='col-12 justify-content-center'>
                <div className='col-12 row'>
                    <Button size='small' sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.buttonArea.Button} variant='string'>
                        <CloseIcon sx={mainPanelStyles.fileManagerPanel.newPreviewComponent.buttonArea.icon} />
                    </Button>
                </div>
                {this.props.selectedPanelObject.id ? (
                    this.props.selectedPanelObject.isFolder ? (
                        <FolderPreview folderName={this.props.selectedPanelObject.name} folderId={this.props.selectedPanelObject.id} />
                    ) : (
                        this.state.fileInfo ? (
                            <FilePreview selectedObject={this.state.fileInfo}
                                imgSrc={this.state.registerThumbnail}
                                name={this.state.fileInfo.name}
                                resolution={this.state.fileInfo.resolution}
                                height={this.state.fileInfo.height}
                                width={this.state.fileInfo.width}
                                volume={this.state.fileInfo.volume}
                                id={this.state.fileInfo.id} />
                        ) : (null)
                    )
                ) : (<NonePreveiw />)
                }
            </div >
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPreviewComponent);
