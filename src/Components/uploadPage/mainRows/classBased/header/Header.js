import React, { Component } from 'react';
import UsedStorage from './UsedStorage';
import CreateAndUpload from './CreateAndUpload';

export default class Header extends Component {
    render() {
        return (
            <div className='h-auto row py-2 bg-light rounded container'>
                <UsedStorage />
                <CreateAndUpload />
            </div>
        )
    }
}
