import React, { Component } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { getSelectedTreeItem, getSelectedCreateNum } from '../../../../reduxClassBased/SelectedItemSlice';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles';
import { connect } from 'react-redux';

const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});
const mapStateToProps = (state) => ({
    selectedTreeObject: state.SelectedItem.selectedTreeObject,
    treeAllItems: state.SelectedItem.treeAllItems
});
const mapDispatchToProps = { getSelectedTreeItem, getSelectedCreateNum };

class BreadcrumbComponent extends Component {

    breadcrumbBuilder = (currentItem) => {
        if (currentItem?.parentId != null) {
            const filteredParent = this.props.treeAllItems.find((el) => el.id == currentItem.parentId)
            return (<>{this.breadcrumbBuilder(filteredParent)}
                <MenuItem sx={{ fontFamily: 'Yekan Bakh' }} value={filteredParent.name}>{filteredParent.name}</MenuItem>
            </>)
        }
    }
    rowBreadcrumbBuilder = (currentItem) => {
        if (currentItem?.parentId != null) {
            const filteredParent = this.props.treeAllItems.find((el) => el.id == currentItem.parentId)
            return (<>{this.rowBreadcrumbBuilder(filteredParent)}
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                    onClick={this.props.getSelectedTreeItem(filteredParent)}
                    sx={mainPanelStyles.FileManagerNavBar.BreadcrumbComponent.link}
                >
                    {filteredParent.name}
                </Link>
            </>)
        }
    }

    render() {
        const breadcrumbs = [
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <TextField
                        select
                        size='small'
                        sx={mainPanelStyles.FileManagerNavBar.BreadcrumbComponent.TextField}
                        InputProps={{
                            startAdornment: (
                                <HomeIcon fontSize='small' />
                            ),
                        }}
                        variant="outlined"
                    >
                        <MenuItem sx={mainPanelStyles.FileManagerNavBar.BreadcrumbComponent.menuItem} onClick={() => this.props.getSelectedTreeItem({})} value='mainFolder'>پوشه اصلی</MenuItem>
                        {this.breadcrumbBuilder(this.props.selectedTreeObject)}
                        <MenuItem sx={mainPanelStyles.FileManagerNavBar.BreadcrumbComponent.menuItem} onClick="" value={this.props.selectedTreeObject.name}>{this.props.selectedTreeObject.name}</MenuItem>
                    </TextField>
                </ThemeProvider>
            </CacheProvider>,
            <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                sx={mainPanelStyles.FileManagerNavBar.BreadcrumbComponent.link}
            >
                {this.props.selectedTreeObject.name}
                {this.rowBreadcrumbBuilder(this.props.selectedTreeObject)}
            </Link>,
        ];

        return (
            <div>
                <Stack spacing={2}>
                    <Breadcrumbs separator=">" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbComponent);
