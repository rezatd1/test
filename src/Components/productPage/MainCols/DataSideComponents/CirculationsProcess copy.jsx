import React, { useEffect, useState } from 'react'
import CirculationsNumbers from './CirculationsNumbers'
import CirculationsCustomerInput from './CirculationsCustomerInput'
import Stack from '@mui/material/Stack';

export default function CirculationsProcess({ CirclutionsDetail, wantedprintCirculations }) {

    const [customerInput, setCustomerInput] = useState(1000);
    const [circulationsId, setCirculationsId] = useState();
    const [printSeries, setPrintSeries] = useState();

    useEffect(() => {
        if (wantedprintCirculations) {
            if (customerInput % wantedprintCirculations[2].value === 0) {
                setCirculationsId(wantedprintCirculations[2].key)
                setPrintSeries(customerInput / wantedprintCirculations[2].value)
            } else if (customerInput % wantedprintCirculations[1].value === 0) {
                setCirculationsId(wantedprintCirculations[1].key)
                setPrintSeries(customerInput / wantedprintCirculations[1].value)
            } else if (customerInput % wantedprintCirculations[0].value === 0) {
                setCirculationsId(wantedprintCirculations[0].key)
                setPrintSeries(customerInput / wantedprintCirculations[0].value)
            }
        }
    }, [customerInput, wantedprintCirculations])


    useEffect(()=> {
        console.log(circulationsId);
    },[circulationsId])


    const inputOnChangeEventHandler = (e) => {
        setCustomerInput(Number(e.target.value))
    }

    const addButtonEventHandler = () => {
        setCustomerInput(customerInput + 1000)
    }

    const removeButtonEventHandler = () => {
        setCustomerInput(customerInput - 1000)
    }

    return (
        <div className='row pt-1'>
            <Stack direction='row' spacing={2} >
                <CirculationsCustomerInput
                    customerInputProps={customerInput ? customerInput : null}
                    onChangeProps={inputOnChangeEventHandler} addOnClickProps={addButtonEventHandler} removeOnClickProps={removeButtonEventHandler} />
                <div className='col-1 m-0 d-flex justify-content-center align-items-center plus-iconsc'>=</div>
                <CirculationsNumbers CirculationsNumbersPartObject={CirclutionsDetail ? CirclutionsDetail : null} CirculationsNumbersPart={CirclutionsDetail ? CirclutionsDetail.printCirculations : null}
                    activeCirculationId={circulationsId ? circulationsId : null}
                />
                <div className='col-1 m-0 d-flex justify-content-center align-items-center plus-iconsc'>*</div>
                <CirculationsCustomerInput customerInputProps={printSeries} />
            </Stack>
        </div >
    )
}
