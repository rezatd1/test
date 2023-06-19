import React, { useEffect, useState } from 'react'
import FileTree from '../../classBased/mainPanel/FileTree'
import FileManagerPanel from '../../classBased/mainPanel/FileManagerPanel'
import FileManagerNavBar from '../../classBased/mainPanel/FileManagerNavbar'


export default function MainPanel() {
  const [renameFinalState, setRenameFinalState] = useState();

  const wantedRenameStateHandler = (finalRenameState) => {
    setRenameFinalState(finalRenameState)
  }

  return (
    <div className='row w-100 px-5 rounded'>
      <div dir='rtl' className='col-10 rounded row mt-2 my-2 d-flex justify-content-center pe-2 ms-0 bg-light c-s-5 h-auto'>
        <FileManagerNavBar />
        <FileManagerPanel RenameStateData={wantedRenameStateHandler}  />
      </div>
      <div dir='rtl' className='col-2 rounded pe-0 ms-2'>
        <FileTree />
      </div>
    </div>
  )
}
