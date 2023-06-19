import React, { Component } from 'react'
import Button from '@mui/material/Button';
import CachedIcon from '@mui/icons-material/Cached';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import ItemFileManagerView from './ItemFileManagerView';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { getSelectedCreateNum, getCheckedFileItems, getItemFileManagerView } from '../../../../reduxClassBased/SelectedItemSlice';
import ArrayDeleteModal from './ArrayDeleteModal';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles';
import { connect } from 'react-redux';

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
const mapStateToProps = (state) => ({ panelAllItems: state.SelectedItem.panelAllItems });
const mapDispatchToProps = { getSelectedCreateNum, getCheckedFileItems, getItemFileManagerView };
class ViewButtonsCumponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisibleDeleteIcon: false,
            isVisibleSelectAllIcon: false,
            filteredAllDeleteItems: [],
            isOpenDeleteModal: false,
        }
    }

    handleRefresh = () => {
        this.props.getSelectedCreateNum(new Date())
    }

    handleSelectAll = () => {
        this.setState({ isVisibleDeleteIcon: !this.state.isVisibleDeleteIcon });
        this.setState({ isVisibleSelectAllIcon: !this.state.isVisibleSelectAllIcon });
        this.props.getCheckedFileItems(this.state.filteredAllDeleteItems)
    }

    handleFilteredArrayIsOpenStatus = (data) => {
        this.setState({ isOpenDeleteModal: data })
    }

    handleIsVisibleDeleteIconStatus = (data) => {
        this.setState({ isVisibleDeleteIcon: data })
        this.setState({ isVisibleSelectAllIcon: data })
    }

    handleDeselectCheckedItems = () => {
        this.props.getCheckedFileItems([])
    }

    filterDeleteItems = () => {
        const filteredDeleteItems = this.props.panelAllItems.filter((item) => item.isFolder == false);
        this.setState({ filteredAllDeleteItems: filteredDeleteItems });
    }

    componentDidMount() {
        this.filterDeleteItems();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.panelAllItems !== this.props.panelAllItems) {
            this.filterDeleteItems();
        }
    }

    render() {
        return (
            <div className='row flex-nowrap custom-style-2 align-items-center'>
                <div className='w-auto d-flex align-items-center px-1 custom-style-2'>
                    <ItemFileManagerView onClickToggleOne={() => this.props.getItemFileManagerView(1)} onClickToggleTwo={() => this.props.getItemFileManagerView(2)} />
                </div>
                <div style={this.state.isVisibleDeleteIcon == true ? style1 : null} onClick={() => this.setState({ isOpenDeleteModal: true })} className='w-auto align-items-center px-1 custom-style-3'>
                    <Button size='small' variant="outlined"
                        sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.conditionalDeleteButton.deleteIcon}>
                        <DeleteIcon sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.conditionalDeleteButton.icon} />
                    </Button>
                </div>
                {this.state.isVisibleSelectAllIcon == true ? (
                    <div onClick={this.handleDeselectCheckedItems} className='w-auto d-flex align-items-center px-1 custom-style-2'>
                        <Button onClick={this.handleSelectAll} size='small' variant="outlined" startIcon={<CreateNewFolderIcon sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.selectAllButton.icon} />}
                            sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.selectAllButton.Button}>لغو انتخاب همه</Button>
                    </div>
                ) : (
                    <div className='w-auto d-flex align-items-center px-1 custom-style-2'>
                        <Button onClick={this.state.filteredAllDeleteItems.length > 0 ? this.handleSelectAll : null} size='small' variant="outlined" startIcon={<CreateNewFolderIcon sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.selectAllButton.icon} />}
                            sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.selectAllButton.Button}>انتخاب همه</Button>
                    </div>
                )}
                <div className='w-auto d-flex align-items-center px-1 custom-style-2'>
                    <Button onClick={this.handleRefresh} size='small' sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.refreshButton} variant='outlined'>
                        <CachedIcon />
                    </Button>
                    {this.state.isOpenDeleteModal & this.state.filteredAllDeleteItems.length > 0 ? (
                        <ArrayDeleteModal openState={this.state.isOpenDeleteModal} filteredArray={this.state.filteredAllDeleteItems} deleteStateHandler={this.handleFilteredArrayIsOpenStatus} selectAllButtonControl={this.handleIsVisibleDeleteIconStatus} />
                    ) : (null)}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewButtonsCumponent);
