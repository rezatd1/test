import React from 'react'
import ItemFileManager from '../../classBased/mainPanel/ItemFileManager';
import NewPreviewComponent from '../../classBased/mainPanel/NewPreviewComponent';

export default function FileManagerPanel() {

  return (
    <div className='row my-2 justify-content-between'>
      <div className='col-8 row c-s-3'>
        <ItemFileManager />
      </div>
      <div className='col-4 custom-bg-2 row rounded'>
        <NewPreviewComponent />

      </div>
    </div>
  )
}
