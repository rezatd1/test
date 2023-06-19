import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function FinalResult({ productId, wantedPrintSeries, wantedPrintSpeed, wantedTurnaround }) {

  const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjM3NzEyIiwicm9sZSI6IjIiLCJuYmYiOjE2ODMxOTg4NzYsImV4cCI6MTY4NTc5MDg3NiwiaWF0IjoxNjgzMTk4ODc2fQ.jqGqsz8DNQmob5QTN9b56CM9y36VXhetSuvCxNex-bs'
  const [resultData, setResultData] = useState();

  useEffect(() => {
    const baseURL = 'https://api.naghshealmas.com/api/fa-IR-IRT/Order/SharedSheetOrder/GetBasicPrice?';
    axios.post(baseURL, {
      "productId": productId,
      "series": wantedPrintSeries,
      "turnaroundType": wantedPrintSpeed,
      "twoSidePrintingType": wantedTurnaround,
      "width": null,
      "height": null
    }, {
      headers: {
        Authorization: `Bearer ${bearerToken}`
      }
    }).then((response) => { setResultData(response.data.messageItems[0].data) }).catch((error) => { alert("مشکلی در عمیات رخ داده است") })
  }, [productId, wantedPrintSeries, wantedPrintSpeed, wantedTurnaround])

  useEffect(() => {
    console.log(resultData);
  }, [resultData])

  const resultDataMap = () => {
    return resultData && resultData.map((item) =>
      <tr>
        <td className='border border-dark p-2'>A6 تراکتی ( 14.5 × 10 ) cm ({item.width}×{item.height} میلیمتر)</td>
        <td className='border border-dark p-2'>{item.basePrice} تومان (بدون احتساب مالیات)</td>
      </tr>
    )}

  return (
    <div className='pb-2'>
      <div>ابعاد موجود</div>
      <table className='entire-table border' data-bs-toggle="collapse">
        <thead className='light-background'>
          <tr>
            <th className='border border-dark p-2'>ابعاد (میلیمتر)</th>
            <th className='border border-dark p-2'>قیمت</th>
          </tr>
        </thead>
        <tbody>
          {resultDataMap()}
        </tbody>
      </table>
    </div>
  )
}
