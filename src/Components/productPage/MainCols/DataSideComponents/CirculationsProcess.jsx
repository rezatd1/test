import React, { useEffect, useState } from 'react'
import CirculationsNumbers from './CirculationsNumbers'
import CirculationsCustomerInput from './CirculationsCustomerInput'
import Stack from '@mui/material/Stack';

export default function CirculationsProcess({ CirclutionsDetail, wantedprintCirculations, printSeriesDataReceived }) {

    const [customerInput, setCustomerInput] = useState(1000);
    const [circulationsId, setCirculationsId] = useState();
    const [printSeries, setPrintSeries] = useState(1);
    const [circleValue, setCircleValue] = useState();
    const [printSeriesKeyDataReceived, setPrintSeriesKeyDataReceived] = useState();

    useEffect(() => {
        if (wantedprintCirculations) {
            if (customerInput % wantedprintCirculations[2].value === 0) {
                setCirculationsId(wantedprintCirculations[2].key)
                setPrintSeries(customerInput / wantedprintCirculations[2].value)
                setCircleValue(wantedprintCirculations[2].value)
            } else if (customerInput % wantedprintCirculations[1].value === 0) {
                setCirculationsId(wantedprintCirculations[1].key)
                setPrintSeries(customerInput / wantedprintCirculations[1].value)
                setCircleValue(wantedprintCirculations[1].value)
            } else if (customerInput % wantedprintCirculations[0].value === 0) {
                setCirculationsId(wantedprintCirculations[0].key)
                setPrintSeries(customerInput / wantedprintCirculations[0].value)
                setCircleValue(wantedprintCirculations[0].value)
            }
        }
    }, [customerInput, wantedprintCirculations])



    const inputOnChangeEventHandler = (e) => {
        setCustomerInput(Number(e.target.value))
    }
    const addButtonEventHandler = () => {
        setCustomerInput(customerInput + 1000)
    }

    const removeButtonEventHandler = () => {
        setCustomerInput(customerInput - 1000)
    }

    const seriesInputHandler = (e) => {
        setPrintSeries(Number(e.target.value));
    };

    useEffect(() => {
        setCustomerInput(printSeries * circleValue);
    }, [printSeries])


    useEffect(() => {
        setCustomerInput(customerInput)
    }, [customerInput])

    const seriesAddButtonEventHandler = () => {
        setPrintSeries(printSeries + 1)

    }
    const seriesRemoveButtonEventHandler = () => {
        setPrintSeries(printSeries - 1)

    }

    const handlePrintSeriesKeyDataReceived = (data) => {
        setPrintSeriesKeyDataReceived(data)
    }

    useEffect(() => {
        printSeriesDataReceived(printSeries)
    }, [printSeries])

    return (
        <div dir='rtl' className='row pt-1 pb-5'>

                <div className='col-lg-4 col-md-4 col-sm-11 pb-2'>
                    <CirculationsCustomerInput
                        customerInputProps={customerInput ? customerInput : null}
                        onChangeProps={inputOnChangeEventHandler}
                        addOnClickProps={addButtonEventHandler}
                        removeOnClickProps={removeButtonEventHandler} />
                </div>
                <div className='col-lg-5 col-md-5 col-sm-11 row pb-2 w-auto'>
                    <div className='col-3 m-0 d-flex justify-content-center align-items-center w-auto'>=</div>
                    <div className='col-6 w-auto p-0'>
                        <CirculationsNumbers
                            itemDataSender={handlePrintSeriesKeyDataReceived}
                            CirculationsNumbersPartObject={CirclutionsDetail ? CirclutionsDetail : null}
                            CirculationsNumbersPart={CirclutionsDetail ? CirclutionsDetail.printCirculations : null}
                            selectedButtonId={circulationsId ? circulationsId : null}
                        />
                    </div>
                    <div className='col-3 m-0 d-flex justify-content-center align-items-center w-auto m-0'>*</div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-11'>
                    <CirculationsCustomerInput
                        customerInputProps={printSeries ? printSeries : null}
                        onChangeProps={seriesInputHandler}
                        addOnClickProps={seriesAddButtonEventHandler}
                        removeOnClickProps={seriesRemoveButtonEventHandler}
                    />
                </div>

        </div >
    )
}
