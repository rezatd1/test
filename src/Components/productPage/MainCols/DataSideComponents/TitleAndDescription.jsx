import React from 'react'

export default function TitleAndDescription({title, description}) {
   
    return (
        <div className='row'>
            <div className='row fs-3'>{title}</div>
            <div className='row pt-2 pb-4'>{description}</div>
        </div>
    )
}
