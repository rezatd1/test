import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { mainPanelStyles } from '../../../../../uploadPage/Styles/mainPanelStyles';
import { connect } from 'react-redux';
import { setPrintOptions, setPrintSpeed } from '../../../../../redux/RegularOrderSlice';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {

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

const mapStateToProps = (state) => ({
    printOptions: state.RegularOrder.printOptions,
    printSpeed: state.RegularOrder.printSpeed,
});
const mapDispatchToProps = { setPrintOptions, setPrintSpeed };

class PrintMultiOption extends Component {

    CSSActiveStyle = {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Yekan Bakh',
    }

    render() {
        const { title, toggleMapData, onClickHandler, activeStyleObject } = this.props;
        return (
            <div>
                <p className='mb-2 h6 text-secondary'>{title}</p>
                <Paper
                    elevation={0}
                    sx={{
                        display: 'flex',
                        border: '2px solid black',
                        flexWrap: 'wrap',
                        width: 'auto',
                        height: 'auto'
                    }}
                >
                    <StyledToggleButtonGroup
                        size="small"
                        value=""
                        exclusive
                        sx={{ padding: '0.3rem' }}
                        onChange=""
                        aria-label="text alignment"
                    >
                        {toggleMapData.map((item) =>
                            <ToggleButton key={item.key}
                                onClick={() => onClickHandler(item.key)}
                                sx={activeStyleObject === item.key ?
                                    mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.activeItemToggleButton.toggleButtonSection.toggleButton :
                                    mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.ItemToggleButton.toggleButtonSection.toggleButton} size='small'>
                                {item.value}
                            </ToggleButton>
                        )}
                    </StyledToggleButtonGroup>
                </Paper>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PrintMultiOption);
