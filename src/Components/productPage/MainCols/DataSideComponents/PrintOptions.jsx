import React, { useState, useEffect } from 'react';
import CirculationsNumbers from './CirculationsNumbers';
import axios from 'axios';
import Stack from '@mui/material/Stack';


export default function PrintOptions({ RequestedSpeedTypeDataReceived, RequestedTurnaroundReceived }) {

  const [printOptions, setPrintOptions] = useState();
  const [printSpeedDataReceived, setPrintSpeedDataReceived] = useState(1)
  const [turnaroundDataReceived, setTurnaroundDataReceived] = useState(1)


  useEffect(() => {
    const baseURL = 'https://api.naghshealmas.com/api/fa/Nas/Product/GetPrintingFeature?&Id=1478';
    axios.get(baseURL).then((response) => { setPrintOptions(response.data.messageItems[0].data); })
      .catch((error) => { alert("مشکلی در عملیات رخ داده است") })
  }, [])

  const handlePrintSpeedDataReceived = (data) => {
    setPrintSpeedDataReceived(data)
  }

  useEffect(() => {
    RequestedSpeedTypeDataReceived(printSpeedDataReceived);
  }, [printSpeedDataReceived])

  const handleTurnaroundDataReceived = (data) => {
    setTurnaroundDataReceived(data)
  }
  
  useEffect(() => {
    RequestedTurnaroundReceived(turnaroundDataReceived)
  }, [turnaroundDataReceived])

  return (
    <div className='row pb-4'>
      <div className='col-5'>
        <CirculationsNumbers
          itemDataSender={handlePrintSpeedDataReceived}
          CirculationsNumbersPartObject={printOptions ? printOptions : null}
          CirculationsNumbersPart={printOptions ? printOptions.printedSideTypes : null}
          selectedButtonId={printSpeedDataReceived ? printSpeedDataReceived : null}
        />
      </div>
      <div className='col-5'>
        <CirculationsNumbers
          itemDataSender={handleTurnaroundDataReceived}
          CirculationsNumbersPartObject={printOptions ? printOptions : null}
          CirculationsNumbersPart={printOptions ? printOptions.turnaroundTypes : null}
          selectedButtonId={turnaroundDataReceived ? turnaroundDataReceived : null}/>
      </div>
    </div>
  )
}
