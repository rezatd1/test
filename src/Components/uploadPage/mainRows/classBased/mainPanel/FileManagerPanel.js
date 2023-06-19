import React, { Component } from 'react';
import ItemFileManager from './ItemFileManager';
import NewPreviewComponent from './NewPreviewComponent';

export default class FileManagerPanel extends Component {
    render() {
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
}
