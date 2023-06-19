import React, { useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DropDownComponent({ TimingObject }) {
    const SampleText = `مقدار زمان آماده شدن سفارش شما با توجه به گزینه های انتخاب شده برابر است با ${2} روز کاری`


    const data1 = [
        { id: 1, name: 'dvsfssdf' },
        { id: 2, name: 'dvsfssdf' },
        { id: 3, name: 'dvsfssdf' },
        { id: 4, name: 'dvsfssdf' },
        { id: 5, name: 'dvsfssdf' },
    ]

    const data2 = [
        { id: 1, name: 'dvsfssdf' },
        { id: 2, name: 'dvsfssdf' },
        { id: 3, name: 'dvsfssdf' },
        { id: 4, name: 'dvsfssdf' },
        { id: 5, name: 'dvsfssdf' },
    ]

    const creatHeader = () => {
        let headers = ['یکرو یا دورو', 'فوری', 'معمولی']
        return <thead>
            <tr>
                {headers.map(item =>
                    <th className='p-2 border border-dark'>{item}</th>
                )}
            </tr>
        </thead>

    }

    const firstCreateBody = () => {
        let firstTypes = ["یکرو", "دورو"]
        return firstTypes.map((item) => {
            return <tr key={item}>
                <td>{item}</td>
            </tr>
        })
    }

    const createBody = () => {
        return data1.map(item => {
            return <tr key={item.id}>
                <td>{item.name}</td>

            </tr>
        })
    }


    return (
        <div className='pb-4' dir='rtl'>
            <Accordion sx={{
                backgroundColor: '#e0ded7'
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                >
                    <Typography sx={{
                        fontFamily: 'Yekan Bakh'
                    }} >{SampleText}</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <table>
                        <thead>
                            <tr>
                                <th className='p-2 border border-dark'>یکرو یا دورو</th>
                                <th className='p-2 border border-dark'>معمولی</th>
                                <th className='p-2 border border-dark'>فوری</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TimingObject && TimingObject.printingSideProductFeature ? TimingObject.map((item) =>
                                <tr>
                                    <td></td>
                                </tr>
                            )
                                : null}

                        </tbody>
                    </table>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
