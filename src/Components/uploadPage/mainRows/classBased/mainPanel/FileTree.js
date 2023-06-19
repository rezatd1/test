import React, { Component } from 'react'
import { TreeItem, TreeView } from '@mui/lab';
import FolderIcon from '@mui/icons-material/Folder';
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';
import { getSelectedTreeItem, getTreeAllItem,getSelectedCreateNum } from '../../../../reduxClassBased/SelectedItemSlice';
import { DefaultGetAPICall } from '../../API/DefaultGetAPICall';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    selectedTreeObject: state.SelectedItem.selectedTreeObject,
    allTreeObject: state.SelectedItem.treeAllItems,
    selectedCreateNum: state.SelectedItem.selectedCreateNum
});
const mapDispatchToProps = { getSelectedTreeItem, getTreeAllItem,getSelectedCreateNum };
class FileTree extends Component {
    constructor() {
        super();
        this.state = { treeMainFolders: [] };
    }
    handleGetTreeView = () => {
        DefaultGetAPICall("/api/fa/FileManager/FolderManagement/GetTreeView?", "")
            .then((response) => {
                this.props.getTreeAllItem(response);
                this.props.getSelectedCreateNum(new Date());
            });
    }
    componentDidMount() {
        this.handleGetTreeView();
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('***selectedTreeObject', this.props.selectedTreeObject);
        if ((this.props.selectedTreeObject.id !== prevProps.selectedTreeObject.id)) {
            this.handleGetTreeView()
        }
    }
    treeChild = (item) => {
        console.log('***item', item);
        const filtered = (this.props.allTreeObject.filter((child) => child.parentId === item.id));
        return (filtered.length > 0) ? filtered.map((item) =>
            <TreeItem onClick={() => { this.props.getSelectedTreeItem(item) }} key={item.id} endIcon={<FolderIcon sx={mainPanelStyles.fileTree.icon} />} sx={mainPanelStyles.fileTree.treeItem} nodeId={item.id} label={item.name} >
                {this.treeChild(item)}
            </TreeItem>
        )
            : null
    }
    handleMainFolderTree = () => {
        this.props.getSelectedTreeItem({})
    }
    render() {
        const treeMainFolders = this.props.allTreeObject.filter((item) => item.parentId == null);
        if (treeMainFolders.length === 0) {
            return <div>Loading...</div>;
        }
        return (
            <div className='bg-light rounded my-2 pt-3 pe-2'>
                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<SnippetFolderIcon />}
                    defaultExpandIcon={<FolderIcon />}
                    sx={mainPanelStyles.fileTree.treeView}
                >
                    <TreeItem sx={{ fontFamily: 'Yekan Bakh' }} nodeId="1" onClick={this.handleMainFolderTree} label="پوشه اصلی">
                        {this.props.allTreeObject && treeMainFolders ? treeMainFolders.map((item) =>
                            <TreeItem key={item.id} onClick={() => {
                                this.props.getSelectedTreeItem(item)
                            }} endIcon={<FolderIcon sx={mainPanelStyles.fileTree.icon} />} sx={mainPanelStyles.fileTree.treeItem} nodeId={item.id} label={item.name} >
                                {this.treeChild(item)}
                            </TreeItem>
                        ) : null}
                    </TreeItem>
                </TreeView>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FileTree);
