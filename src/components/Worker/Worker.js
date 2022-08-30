import React from 'react';

import './Worker.css'

const Worker = props => {


    return (
        <div className='worker'>
            <p>{props.id + 1}.</p>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.department}</p>
            <p>{props.salary} USD</p>
        </div>
    )
}

export default Worker;