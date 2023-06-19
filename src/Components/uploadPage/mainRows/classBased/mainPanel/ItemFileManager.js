import React, { Component } from 'react'
import { getSelectedPanel, getPanelAllItem, getSelectedTreeItem } from '../../../../reduxClassBased/SelectedItemSlice';
import { DefaultGetAPICall } from '../../API/DefaultGetAPICall'
import FolderItem from './FolderItem';
import FileItem from './FileItem';
import ItemTableView from './ItemTableView';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    panelAllItems: state.SelectedItem.panelAllItems,
    panelSelectedItem: state.SelectedItem.selectedPanelObject,
    treeAllItems: state.SelectedItem.treeAllItems,
    treeSelectedItem: state.SelectedItem.selectedTreeObject,
    selectedNum: state.SelectedItem.selectedCreateNum,
    fileManagerView: state.SelectedItem.itemFileManagerView,
    checkedFileItems: state.SelectedItem.checkedFileItems,
});
const mapDispatchToProps = { getSelectedPanel, getPanelAllItem, getSelectedTreeItem };

class ItemFileManager extends Component {
    CSSActiveStyle = {
        backgroundColor: '#d9d9d9',
        border: '1px solid #A6A6A6'
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.props.panelAllItems || (this.props.treeAllItems !== prevProps.treeAllItems) || (this.props.selectedNum !== prevProps.selectedNum) || (this.props.treeSelectedItem !== prevProps.treeSelectedItem)) {
            DefaultGetAPICall("/api/fa/FileManager/FolderManagement/GetFileAndFolders?", `parentId=${this.props.treeSelectedItem.id ? this.props.treeSelectedItem.id : ""}`).then((response) => this.props.getPanelAllItem(response))
        }
    }
    render() {
        return (
            <div className='row custom-style-2'>
                {this.props.fileManagerView == 1 ?
                    (this.props.panelAllItems.map((item) =>
                        item.isFolder ? (
                            <FolderItem doubleClick={() => this.props.getSelectedTreeItem(item)} activeStyle={item.id == this.props.panelSelectedItem.id ? this.CSSActiveStyle : null} folderName={item.name} folderKey={item.key} onClickProps={() => this.props.getSelectedPanel(item)} />
                        ) : (
                            <FileItem activeStyle={item.id == this.props.panelSelectedItem.id ? this.CSSActiveStyle : null} fileKey={item.key} fileLabel={item.name} onClickProps={() => this.props.getSelectedPanel(item)} draftLink={item.thumbnail}
                                checkedStatus={this.props.checkedFileItems.length > 0 ? (this.props.checkedFileItems.find((data) => data.id == item.id ? true : false)) : null} />
                        )
                    )) : (
                        <ItemTableView />
                    )
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemFileManager);