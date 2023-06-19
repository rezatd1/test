import React, { Component } from 'react'
import TitleAndDescription from './TitleAndDescription/TitleAndDescription'
import Calculator from './Calculator/Calculator'
import PrintOptions from './PrintOptions/PrintOptions'
import TimingTable from './TimingTable/TimingTable'
import PriceTable from './PriceTable/PriceTable'
import OrderButton from './OrderButton/OrderButton'

export default class DataSide extends Component {
    render() {
        return (
            <div>
                <TitleAndDescription />
                <Calculator />
                <PrintOptions />
                <TimingTable />
                <PriceTable />
                <OrderButton />
            </div>
        )
    }
}
