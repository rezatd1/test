import * as React from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedTreeItem } from '../../../../redux/SelectedItemSlice';
import { useEffect, useState } from 'react';
import { mainPanelStyles } from '../../../Styles/mainPanelStyles'

const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

export default function BreadcrumComponent() {
    const [localBreadcrumbData, setLocalBreadcrumbData] = useState()
    const dispatch = useDispatch();
    const wantedTreeSelectedItem = useSelector((state) => state.SelectedItem.selectedTreeObject);
    const wantedTreeAllItems = useSelector((state) => state.SelectedItem.treeAllItems);

    useEffect(() => {
        setLocalBreadcrumbData(wantedTreeSelectedItem)
    }, [wantedTreeSelectedItem])

    useEffect(() => {
        setLocalBreadcrumbData(wantedTreeSelectedItem)
    }, [])

    useEffect(()=> {
        console.log("***wantedTreeSelectedItem", wantedTreeSelectedItem);
    },[wantedTreeSelectedItem])

    const breadcrumbBuilder = (currentItem) => {
        if (currentItem?.parentId != null) {
            const filteredParent = wantedTreeAllItems.find((el) => el.id == currentItem.parentId)
            return (<>{breadcrumbBuilder(filteredParent)}
                <MenuItem sx={{ fontFamily: 'Yekan Bakh' }} value={filteredParent.name}>{filteredParent.name}</MenuItem>
            </>)
            //setLocalBreadcrumbData(filteredParent)
        }
    }

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
                    <MenuItem sx={mainPanelStyles.FileManagerNavBar.BreadcrumbComponent.menuItem} onClick={() => dispatch(getSelectedTreeItem({}))} value='mainFolder'>پوشه اصلی</MenuItem>
                    {breadcrumbBuilder(wantedTreeSelectedItem)}
                    <MenuItem sx={mainPanelStyles.FileManagerNavBar.BreadcrumbComponent.menuItem} onClick="" value={wantedTreeSelectedItem.name}>{wantedTreeSelectedItem.name}</MenuItem>
                </TextField>
            </ThemeProvider>
        </CacheProvider>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick=''
            sx={mainPanelStyles.FileManagerNavBar.BreadcrumbComponent.link}
        >
            Core
        </Link>,
        <Typography sx={mainPanelStyles.FileManagerNavBar.BreadcrumbComponent.typography} key="3" color="text.primary">
            Breadcrumb
        </Typography>,
    ];

    return (
        <Stack spacing={2}>
            <Breadcrumbs separator=">" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    );
}