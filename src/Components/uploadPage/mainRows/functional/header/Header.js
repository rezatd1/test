import React from 'react';
import UsedStorage from '../../classBased/header/UsedStorage';
import CreateAndUpload from '../../classBased/header/CreateAndUpload'

export default function Header() {
  return (
    <div className='h-auto row py-2 bg-light rounded container'>
      <UsedStorage />
      <CreateAndUpload />
    </div>
  )
}
