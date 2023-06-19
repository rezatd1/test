import React, { Component } from 'react'

export default class MultiSpeedTable extends Component {
    render() {
        const { timingObject } = this.props;
        return (
            <table>
                <tr>
                    <th>یکرو یا دورو</th>
                    <th>معمولی</th>
                    <th>فوری</th>
                </tr>
                <tr>
                    <td>یکرو</td>
                    <td>{timingObject[0].printingSideProductFeature[0].processHours/24} روز کاری</td>
                    <td>{timingObject[0].printingSideProductFeature[1].processHours/24} روز کاری</td>
                </tr>
                <tr>
                    <td>دورو</td>
                    <td>{timingObject[1].printingSideProductFeature[0].processHours/24} روز کاری</td>
                    <td>{timingObject[1].printingSideProductFeature[1].processHours/24} روز کاری</td>
                </tr>
            </table>
        )
    }
}
