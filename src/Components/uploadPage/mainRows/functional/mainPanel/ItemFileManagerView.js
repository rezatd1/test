import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import ViewCompactRoundedIcon from '@mui/icons-material/ViewCompactRounded';
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

export default function ItemFileManagerView({ onClickToggleOne, onClickToggleTwo }) {
    const [alignment, setAlignment] = React.useState('left');
    const [formats, setFormats] = React.useState(() => ['italic']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div>
            <Paper
                elevation={0}
                sx={{
                    display: 'flex',
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    flexWrap: 'wrap',
                }}
            >
                <StyledToggleButtonGroup
                    size="small"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton onClick={onClickToggleOne} sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.itemFileManager.toggleButtonSection.toggleButton} size='small' value="left" aria-label="left aligned">
                        <ViewCompactRoundedIcon sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.itemFileManager.toggleButtonSection.icon} />
                    </ToggleButton>
                    <ToggleButton onClick={onClickToggleTwo} sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.itemFileManager.toggleButtonSection.toggleButton} size='small' value="right" aria-label="right aligned">
                        <ViewListRoundedIcon sx={mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.itemFileManager.toggleButtonSection.icon} />
                    </ToggleButton>
                </StyledToggleButtonGroup>
            </Paper>
        </div>
    );
}
