import * as React from 'react';
import { TreeItem, TreeView } from '@mui/lab';
import FolderIcon from '@mui/icons-material/Folder';
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSelectedTreeItem, getTreeAllItem } from '../../../../redux/SelectedItemSlice';
import { DefaultGetAPICall } from './DefaultGetAPICall';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles';

export default function FileTree() {
    const [treeMainFolders, setTreeMainFolders] = useState();

    const dispatch = useDispatch();
    const wantedTreeSelectedItem = useSelector((state) => state.SelectedItem.selectedTreeObject);
    const wantedTreeAllItems = useSelector((state) => state.SelectedItem.treeAllItems);
    const wantedCreateSelectedNum = useSelector((state) => state.SelectedItem.selectedCreateNum);

    useEffect(() => {
        DefaultGetAPICall("/api/fa/FileManager/FolderManagement/GetTreeView?", "").then((response) => dispatch(getTreeAllItem(response)))
    }, [wantedTreeSelectedItem, wantedCreateSelectedNum])

    useEffect(() => {
        if (Array.isArray(wantedTreeAllItems)) {
            setTreeMainFolders(wantedTreeAllItems.filter((item) => item.parentId == null));
        }
    }, [wantedTreeAllItems]);

    const treeChild = (item) => {
        const filtered = (wantedTreeAllItems.filter((child) => child.parentId === item.id));
        return (filtered.length > 0) ? filtered.map((item) =>
            <TreeItem onClick={() => {
                dispatch(getSelectedTreeItem(item))
            }} key={item.id} endIcon={<FolderIcon sx={mainPanelStyles.fileTree.icon} />} sx={mainPanelStyles.fileTree.treeItem} nodeId={item.id} label={item.name} >
                {treeChild(item)}
            </TreeItem>
        )
            : null
    }

    const handleMainFolderTree = () => {
        dispatch(getSelectedTreeItem({}))
    }
    
    return (
        <div className='bg-light rounded my-2 pt-3 pe-2'>
            <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<SnippetFolderIcon />}
                defaultExpandIcon={<FolderIcon />}
                sx={mainPanelStyles.fileTree.treeView}
            >
                <TreeItem sx={{ fontFamily: 'Yekan Bakh' }} nodeId="1" onClick={handleMainFolderTree} label="پوشه اصلی">
                    {wantedTreeAllItems && treeMainFolders ? treeMainFolders.map((item) =>
                        <TreeItem key={item.id} onClick={() => {
                            dispatch(getSelectedTreeItem(item))
                        }} endIcon={<FolderIcon sx={mainPanelStyles.fileTree.icon} />} sx={mainPanelStyles.fileTree.treeItem} nodeId={item.id} label={item.name} >
                            {treeChild(item)}
                        </TreeItem>
                    ) : null}
                </TreeItem>
            </TreeView>
        </div>
    );
}