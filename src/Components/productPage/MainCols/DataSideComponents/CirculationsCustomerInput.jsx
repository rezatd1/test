import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import RemoveIcon from '@mui/icons-material/Remove';

export default function CirculationsCustomerInput({ customerInputProps, onChangeProps, addOnClickProps, removeOnClickProps }) {

  return (
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
          onClick={addOnClickProps}
        >
          <AddIcon
          />
        </IconButton>
        <TextField sx={{
          padding: '0.3rem',
        }} id="standard-basic" variant="standard" size='small' value={customerInputProps} onChange={onChangeProps}
        />
        <IconButton sx={{
          height: 'fit-content',
          backgroundColor: '#b5b3ae',
          borderRadius: '4px',
        }}
          aria-label="delete"
          onClick={removeOnClickProps}>
          <RemoveIcon />
        </IconButton>
      </Stack>
    </Box >
  )
}
