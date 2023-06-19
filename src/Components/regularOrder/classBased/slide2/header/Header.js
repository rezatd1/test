import React, { Component } from 'react'
import Title from './title/Title'
import Feautures from './title/feautures/Feautures'

export default class Header extends Component {
    render() {
        return (
            <div className='row mx-1'>
                <div className='col-5 d-flex'>
                    <Title />
                </div>
                <div className='col-7'>
                    <Feautures />
                </div>
            </div>
        )
    }
}
