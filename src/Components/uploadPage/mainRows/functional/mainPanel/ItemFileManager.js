import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSelectedPanel, getPanelAllItem, getSelectedTreeItem } from '../../../../redux/SelectedItemSlice';
import { DefaultGetAPICall } from './DefaultGetAPICall'
import { useEffect } from 'react';
import FolderItem from '../../classBased/mainPanel/FolderItem';
import FileItem from '../../classBased/mainPanel/FileItem';
import ItemTableView from '../../classBased/mainPanel/ItemTableView';

export default function ItemFileManager() {
  const wantedPanelAllItems = useSelector((state) => state.SelectedItem.panelAllItems);
  const wantedTreeSelectedItem = useSelector((state) => state.SelectedItem.selectedTreeObject);
  const wantedPanelSelectedItem = useSelector((state) => state.SelectedItem.selectedPanelObject);
  const wantedCreateSelectedNum = useSelector((state) => state.SelectedItem.selectedCreateNum);
  const wantedItemFileManagerView = useSelector((state) => state.SelectedItem.itemFileManagerView);
  const wantedCheckedItems = useSelector((state) => state.SelectedItem.checkedFileItems);

  const dispatch = useDispatch()

  const CSSActiveStyle = {
    backgroundColor: '#d9d9d9',
    border: '1px solid #A6A6A6'
  }

  useEffect(() => {
    DefaultGetAPICall("/api/fa/FileManager/FolderManagement/GetFileAndFolders?", `parentId=${wantedTreeSelectedItem.id ? wantedTreeSelectedItem.id : ""}`).then((response) => dispatch(getPanelAllItem(response)))
  }, [wantedTreeSelectedItem, wantedCreateSelectedNum])

  return (
    <div className='row custom-style-2'>
      {wantedItemFileManagerView == 1 ?
        (wantedPanelAllItems.map((item) =>
          item.isFolder ? (
            <FolderItem doubleClick={() => dispatch(getSelectedTreeItem(item))} activeStyle={item.id == wantedPanelSelectedItem.id ? CSSActiveStyle : null} folderName={item.name} folderKey={item.key} onClickProps={() => dispatch(getSelectedPanel(item))} />
          ) : (
            <FileItem activeStyle={item.id == wantedPanelSelectedItem.id ? CSSActiveStyle : null} fileKey={item.key} fileLabel={item.name} onClickProps={() => dispatch(getSelectedPanel(item))} draftLink={item.thumbnail} 
            checkedStatus={wantedCheckedItems.length > 0 ? (wantedCheckedItems.find((data)=> data.id == item.id ? true : false)) : null}/>
          )
        )) : (
          <ItemTableView />
        )
      }
    </div>
  )
}
