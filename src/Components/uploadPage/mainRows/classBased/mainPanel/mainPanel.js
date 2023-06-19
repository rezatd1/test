import React, { Component } from 'react';
import FileTree from './FileTree'
import FileManagerPanel from './FileManagerPanel'
import FileManagerNavBar from './FileManagerNavbar'

export default class mainPanel extends Component {
    constructor() {
        super();
        this.state = { renameFinalState: '' }
    }
    wantedRenameStateHandler = (finalRenameState) => {
        this.setState({ renameFinalState: finalRenameState })
    }
    render() {
        return (
            <div className='row w-100 px-5 rounded'>
                <div dir='rtl' className='col-10 rounded row mt-2 my-2 d-flex justify-content-center pe-2 ms-0 bg-light c-s-5 h-auto'>
                    <FileManagerNavBar />
                    <FileManagerPanel RenameStateData={this.wantedRenameStateHandler} />
                </div>
                <div dir='rtl' className='col-2 rounded pe-0 ms-2'>
                    <FileTree />
                </div>
            </div>
        )
    }
}
