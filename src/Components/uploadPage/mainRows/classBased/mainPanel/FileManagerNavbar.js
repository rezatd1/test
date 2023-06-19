import React, { Component } from 'react';
import ViewButtonsCumponent from './ViewButtonsCumponent';
import BreadCrumbComponent from './BreadcrumbComponent';

export default class FileManagerNavbar extends Component {
    render() {
        return (
            <div className='row custom-bg-2 rounded mt-2 mx-2 justify-content-between custom-style-2 py-2'>
                <div className='w-auto d-flex align-items-center custom-style-2'>
                    <BreadCrumbComponent />
                </div>
                <div className='w-auto row align-items-center'>
                    <ViewButtonsCumponent />
                </div>
            </div>
        )
    }
}
