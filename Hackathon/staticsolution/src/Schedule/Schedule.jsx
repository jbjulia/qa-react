import React from 'react';

import Films from './Films/Films';
import OpeningTimes from './OpeningTimes/OpeningTimes';

import location from '../images/Locations.jpg';


const Schedule = () => {
    return (
        <>
            <div className="container">
                <img src={location} alt="Locations" width="100%"/>
            </div>
            <OpeningTimes/>
            <Films/>
        </>
    )
}

export default Schedule;
