import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import CachedIcon from '@mui/icons-material/Cached';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import ItemFileManagerView from '../../classBased/mainPanel/ItemFileManagerView';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { getSelectedCreateNum, getCheckedFileItems, getItemFileManagerView } from '../../../../redux/SelectedItemSlice';
import ArrayDeleteModal from '../../classBased/mainPanel/ArrayDeleteModal';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border: 0,
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}));

const style1 = {
    display: 'flex'
}

export default function ViewButtonsCumponent() {
    const [isVisibleDeleteIcon, setIsVisibleDeleteIcon] = useState(false);
    const [isVisibleSelectAllIcon, setIsVisibleSelectAllIcon] = useState(false);
    const [filteredAllDeleteItems, setFilteredAllDeleteItems] = useState([]);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

    const dispatch = useDispatch();
    const wantedPanelItems = useSelector((state) => state.SelectedItem.panelAllItems);

    useEffect(() => {
        const filteredAllDeleteItems = wantedPanelItems.filter((item) => item.isFolder == false);
        setFilteredAllDeleteItems(filteredAllDeleteItems);
    }, [wantedPanelItems]);

    const handleRefresh = () => {
        dispatch(getSelectedCreateNum(new Date()))
    }
    const handleSelectAll = () => {
        setIsVisibleDeleteIcon(!isVisibleDeleteIcon);
        setIsVisibleSelectAllIcon(!isVisibleSelectAllIcon);
        dispatch(getCheckedFileItems(filteredAllDeleteItems))
    }

    const handleFilteredArrayIsOpenStatus = (data) => {
        setIsOpenDeleteModal(data)
    }
    const handleIsVisibleDeleteIconStatus = (data) => {
        setIsVisibleDeleteIcon(data)
        setIsVisibleSelectAllIcon(data)
    }

    const handleDeselectCheckedItems = () => {
        dispatch(getCheckedFileItems([]))
    }

    return (
        <div className='row flex-nowrap custom-style-2 align-items-center'>
            <div className='w-auto d-flex align-items-center px-1 custom-style-2'>
                <ItemFileManagerView onClickToggleOne={() => dispatch(getItemFileManagerView(1))} onClickToggleTwo={() => dispatch(getItemFileManagerView(2))} />
            </div>
            <div style={isVisibleDeleteIcon == true ? style1 : null} onClick={() => setIsOpenDeleteModal(true)} className='w-auto align-items-center px-1 custom-style-3'>
                <Button size='small' variant="outlined"
                    sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.conditionalDeleteButton.deleteIcon}>
                    <DeleteIcon sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.conditionalDeleteButton.icon} />
                </Button>
            </div>
            {isVisibleSelectAllIcon == true ? (
                <div onClick={handleDeselectCheckedItems} className='w-auto d-flex align-items-center px-1 custom-style-2'>
                    <Button onClick={handleSelectAll} size='small' variant="outlined" startIcon={<CreateNewFolderIcon sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.selectAllButton.icon} />}
                        sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.selectAllButton.Button}>لغو انتخاب همه</Button>
                </div>
            ) : (
                <div className='w-auto d-flex align-items-center px-1 custom-style-2'>
                    <Button onClick={filteredAllDeleteItems.length > 0 ? handleSelectAll : null} size='small' variant="outlined" startIcon={<CreateNewFolderIcon sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.selectAllButton.icon} />}
                        sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.selectAllButton.Button}>انتخاب همه</Button>
                </div>
            )}
            <div className='w-auto d-flex align-items-center px-1 custom-style-2'>
                <Button onClick={handleRefresh} size='small' sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.refreshButton} variant='outlined'>
                    <CachedIcon />
                </Button>
                {isOpenDeleteModal & filteredAllDeleteItems.length > 0 ? (
                    <ArrayDeleteModal openState={isOpenDeleteModal} filteredArray={filteredAllDeleteItems} deleteStateHandler={handleFilteredArrayIsOpenStatus} selectAllButtonControl={handleIsVisibleDeleteIconStatus} />
                ) : (null)}
            </div>
        </div>
    )
}
