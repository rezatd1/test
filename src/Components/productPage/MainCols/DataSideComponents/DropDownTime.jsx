import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DropDownComponent from './DropDownComponent';

export default function DropDownTime() {

  const [processTime, setProcessTime] = useState()

  useEffect(() => {
    const baseURL = 'https://api.naghshealmas.com/api/fa/Nas/Product/GetPrintingProcessTime?&id=1478';
    axios.get(baseURL).then((response) => { setProcessTime(response.data.messageItems[0].data); })
      .catch((error) => { alert("مشکلی در عملیات رخ داده است") })
  }, [])

  return (
    <DropDownComponent TimingObject={processTime ? processTime : null} />
  )
}
