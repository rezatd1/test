import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    width: 'max-content',
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

export default function CirculationsNumbers({ CirculationsNumbersPart, CirculationsNumbersPartObject, selectedButtonId, itemDataSender }) {
  const [clickButtonActive, setClickButtonActive] = useState(5542);
  const [printOptionKey, setPrintOptionKey] = useState(1);

  return (
    <div className='col-3'>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: CirculationsNumbersPartObject && CirculationsNumbersPart && CirculationsNumbersPart.length > 1 ? "transparent" : "#e0dedf",
          display: 'flex',
          height: 'max-content',
          width: 'fit-content',
          marginRight: '0.6rem',
          paddingLeft: '0.2rem',
          marginTop: '0.1rem',
          border: CirculationsNumbersPartObject && CirculationsNumbersPart && CirculationsNumbersPart.length > 1 ? "1px solid black" : "0px solid white",
          flexWrap: 'nowrap',
        }}
      >

        {CirculationsNumbersPartObject && CirculationsNumbersPart && CirculationsNumbersPart.length > 1 ? CirculationsNumbersPart.map((item) =>
          <StyledToggleButtonGroup
            size="small"
            exclusive
          >
            <ToggleButton
              key={item.key}
              onClick={() => {
                setClickButtonActive(item.key)
                setPrintOptionKey(item.key)
                itemDataSender(item.key)
              }}
              sx={{
                bgcolor: selectedButtonId === item.key ? "#000000" : "#ffffff",
                color: selectedButtonId === item.key ? "#ffffff" : "#000000",
                fontFamily: 'Yekan Bakh',
              }}
            >
              {item.value}
            </ToggleButton>
          </StyledToggleButtonGroup>
        ) : CirculationsNumbersPartObject && CirculationsNumbersPart && CirculationsNumbersPart.length === 1 ? CirculationsNumbersPart.map((item) =>
          <StyledToggleButtonGroup
            size="small"
            exclusive
          >
            <Box>
              <Typography sx={{
                fontFamily: 'Yekan Bakh',
                color: '#626363',
              }} variant='body2'>یکرو یا دورو</Typography>
              <Typography pt={1} sx={{
                fontFamily: 'Yekan Bakh'
              }} variant='body1'>{item.value}</Typography>
            </Box>
          </StyledToggleButtonGroup>
        ) : null}


      </Paper>
    </div >
  )
}