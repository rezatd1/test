import React, { Component } from 'react';
import { mainPanelStyles } from '../../../../../uploadPage/Styles/mainPanelStyles';
import { styled } from '@mui/material/styles';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { connect } from 'react-redux';
import { setPrintSeries, setCustomerQuantityInput } from '../../../../../redux/RegularOrderSlice';

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
    printSeries: state.RegularOrder.printSeries,
    circulationId: state.RegularOrder.circulationId,
    customerQuantityInput: state.RegularOrder.customerQuantityInput,
    productInfo: state.RegularOrder.productInfo,
});
const mapDispatchToProps = { setPrintSeries, setCustomerQuantityInput };

class PrintSeries extends Component {

    componentDidUpdate(prevProps) {
        if ((this.props.printSeries !== prevProps.printSeries) || (this.props.circulationId !== prevProps.circulationId) ) {
            const selectedPrintCirculation = this.props.productInfo.printCirculations.find((item) => item.key === this.props.circulationId)
            this.props.setCustomerQuantityInput(this.props.printSeries * selectedPrintCirculation.value)
        }
    }
    render() {
        return (
            <div className='bg-light'>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { mt: 0.6, ml: 0, mr: 0.9, mb: 0.8, width: 'auto' },
                        border: 1,
                        height: 'fit-content',
                        width: 'fit-content',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Stack direction="row" spacing={1}>
                        <IconButton sx={{
                            height: 'fit-content',
                            backgroundColor: '#b5b3ae',
                            borderRadius: '4px',
                            width: 'fit-content'
                        }}

                            aria-label="add"
                            onClick={() => { this.props.setPrintSeries(this.props.printSeries + 1) }}
                        >
                            <AddIcon
                            />
                        </IconButton>
                        <TextField sx={{
                            padding: '0.3rem',
                        }} id="standard-basic" variant="standard" size='small' value={this.props.printSeries} onChange={(e) => { this.props.setPrintSeries(Number(e.target.value)) }}
                        />
                        <IconButton sx={{
                            height: 'fit-content',
                            backgroundColor: '#b5b3ae',
                            borderRadius: '4px',
                        }}
                            aria-label="delete"
                            onClick={
                                () => {
                                    if (this.props.printSeries > 1) {
                                        this.props.setPrintSeries(this.props.printSeries - 1)
                                    }
                                }
                            }
                        >
                            <RemoveIcon />
                        </IconButton>
                    </Stack>
                </Box >
            </div >
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PrintSeries);
