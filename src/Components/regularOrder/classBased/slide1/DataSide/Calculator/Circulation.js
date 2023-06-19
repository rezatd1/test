import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { mainPanelStyles } from '../../../../../uploadPage/Styles/mainPanelStyles';
import { connect } from 'react-redux';
import { setProductInfo, setCirculationId } from '../../../../../redux/RegularOrderSlice';

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
  productInfo: state.RegularOrder.productInfo,
  circulationId: state.RegularOrder.circulationId,

});
const mapDispatchToProps = { setProductInfo, setCirculationId };

class Circulation extends Component {

  CSSActiveStyle = {
    backgroundColor: 'black',
    color: 'white'
  }

  render() {
    return (
      <div className='bg-light h-100'>
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            border: '2px solid black',
            flexWrap: 'wrap',
            width: 'auto',
            height: '100%',
          }}
        >
          <StyledToggleButtonGroup
            size="small"
            value=""
            exclusive
            aria-label="text alignment"
            sx={{ padding: '0.3rem' }}
          >
            {this.props.productInfo.printCirculations &&
              this.props.productInfo.printCirculations.map((button) =>
                <ToggleButton key={button.key}
                  onClick={() => { this.props.setCirculationId(button.key) }}
                  sx={button.key == this.props.circulationId ? this.CSSActiveStyle : mainPanelStyles.FileManagerNavBar.ViewButtonsCumponent.itemFileManager.toggleButtonSection.toggleButton}
                  size='small'
                  value={button.value}>
                  {button.value}
                </ToggleButton>
              )
            }
          </StyledToggleButtonGroup>
        </Paper>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Circulation);
