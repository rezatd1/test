import React, { useState, useEffect } from 'react'
import axios from 'axios'

import TitleAndDescription from './TitleAndDescription'
import CirculationsProcess from './CirculationsProcess'
import PrintOptions from './PrintOptions'
import DropDownTime from './DropDownTime'
import FinalResult from './FinalResult';

export default function DataSide() {

    const [productDetail, setProductDetail] = useState();
    const [productCirculationId, setProductCirculationId] = useState(1478);
    const [productCirculations, setProductCirculations] = useState();
    const [requestedPrintSeries, setRequestedPrintSeries] = useState();
    const [requestedPrintSpeed, setRequestedPrintSpeed] = useState();
    const [requestedTurnaround, setRequestedTurnaround] = useState()

    const baseAPI = 'https://api.naghshealmas.com/api/fa/Nas/Product/'
    const hardDescription = 'تعداد را وارد کنید، سیستم به صورت خودکار به صرفه ترین تیراژ را محاسبه و انتخاب میکند.'

    useEffect(() => {
        const baseURL = `${baseAPI}GetProductInfo?&id=${productCirculationId}&title=${productCirculationId}`
        axios.get(baseURL).then((response) => { setProductDetail(response.data.messageItems[0].data) })
            .catch((error) => { alert("مشکلی در عملیات رخ داده است") })
    }, [])

    const handlePrintSeriesDataReceived = (data) => {
        setRequestedPrintSeries(data)
    }

    const handleRequestedSpeedTypeDataReceived = (data) => {
        setRequestedPrintSpeed(data)
    }

    const handleRequestedTurnaroundDataReceived = (data) => {
        setRequestedTurnaround(data)
    }

    return (
        <div dir='rtl' className='col-lg-8 col-md-12 col-sm-12 my-4 row'>
            <TitleAndDescription
                title={productDetail ? productDetail.name : null}
                description={hardDescription} />
            <CirculationsProcess
                CirclutionsDetail={productDetail ? productDetail : null}
                wantedprintCirculations={productDetail && productDetail.printCirculations ? productDetail.printCirculations : null}
                printSeriesDataReceived={handlePrintSeriesDataReceived}
            />
            <PrintOptions
                RequestedSpeedTypeDataReceived={handleRequestedSpeedTypeDataReceived}
                RequestedTurnaroundReceived={handleRequestedTurnaroundDataReceived}
            />
            <DropDownTime />
            <FinalResult
                productId={productCirculationId}
                wantedPrintSeries={requestedPrintSeries ? requestedPrintSeries : null}
                wantedPrintSpeed = {requestedPrintSpeed ? requestedPrintSpeed : null}
                wantedTurnaround = {requestedTurnaround ? requestedTurnaround : null}
            />
        </div>
    )
}
