import React from 'react';

import facilities1 from '../images/InternationalHouse.jpeg';
import facilities2 from '../images/InternationalHouse2.jpeg';
import facilities3 from '../images/ReceptionHelp.jpg';

const ThreePictureSpread = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-4">
                    <img src={facilities1} alt="Facilities 1" width="100%"/>
                </div>
                <div className="col-xs-12 col-md-4">
                    <img src={facilities2} alt="Facilities 2" width="100%"/>
                </div>
                <div className="col-xs-12 col-md-4">
                    <img src={facilities3} alt="Facilities 3" width="100%"/>
                </div>
            </div>

        </div>
    )
}

export default ThreePictureSpread
