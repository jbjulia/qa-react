import React from 'react';

import OpeningTimesRow from './OpeningTimesRow';

const openingTimes = [{
    "_id": "5ca730905f52db3c8f637a34",
    "day": "Monday",
    "opening": "11:00",
    "close": "00:00"
}, {
    "_id": "5ca730905f52db3c8f637a35",
    "day": "Friday",
    "opening": "11:00",
    "close": "02:00"
}, {
    "_id": "5ca730905f52db3c8f637a36",
    "day": "Sunday",
    "opening": "11:00",
    "close": "23:00"
}];

const OpeningTimesTable = () => {
    const openingTimesRows = openingTimes.map(openingTime => <OpeningTimesRow openingTime={openingTime}
                                                                              key={openingTime._id}/>);

    return (
        <div className="table-responsive">
            <table className="table table-borderless">
                <thead>
                <tr>
                    <th></th>
                    <th className="td-right-align">Opens</th>
                    <th className="td-left-align">Closes</th>
                </tr>
                </thead>
                <tbody>
                {openingTimesRows}
                </tbody>
            </table>
        </div>
    );
}

export default OpeningTimesTable;
