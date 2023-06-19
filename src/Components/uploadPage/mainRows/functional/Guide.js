import React from 'react';
import Button from '@mui/material/Button';
import HelpIcon from '@mui/icons-material/Help';

export default function Guide() {
  return (
    <div dir='rtl' className='w-100 d-flex justify-content-end'>
      <Button variant="string" startIcon={<HelpIcon sx={{
        width: '1rem',
        marginLeft: '0.7rem',
      }} />} sx={{
        color: '#666666',
        fontFamily: 'Yekan Bakh',
        paddingLeft: '3rem'
      }}>
        راهنما
      </Button>
    </div>
  )
}
