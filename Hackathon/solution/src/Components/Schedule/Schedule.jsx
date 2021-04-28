import React, {useEffect, useState} from "react";
import axios from "axios";
import ImageContainer from "../Content/ImageContainer";
import {IMAGES} from "../../js/constants/images";
// import { films } from '../../js/constants/films';
import OpeningTimes from "./OpeningTimes/OpeningTimes";

import Films from "./Films/Films";

import {GETALLFILMS} from "../../js/constants/urls";

const Schedule = () => {
    const [currentFilms, setCurrentFilms] = useState([]);
    const [futureFilms, setFutureFilms] = useState([]);
    const current = {status: "1", heading: `What's On`};
    const future = {status: "2", heading: `Coming Soon`};

    useEffect(() => {
        const getCurrentFilms = async () => {
            try {
                const fetchedCurrentFilms = await axios(
                    `${GETALLFILMS}/${current.status}`
                );
                setCurrentFilms(fetchedCurrentFilms.data);
            } catch (e) {
                setCurrentFilms([e.message]);
            }
        };
        const getFutureFilms = async () => {
            try {
                const fetchedFutureFilms = await axios(
                    `${GETALLFILMS}/${future.status}`
                );
                setFutureFilms(fetchedFutureFilms.data);
            } catch (e) {
                setFutureFilms([e.message]);
            }
        };
        getCurrentFilms();
        getFutureFilms();
    }, []);

    return (
        <>
            <div className="container">
                <ImageContainer image={IMAGES.locations} width="100%"/>
            </div>
            <OpeningTimes/>
            <div className="container">
                <Films
                    films={currentFilms}
                    heading={current.heading}
                    status={current.status}
                />
                <Films
                    films={futureFilms}
                    heading={future.heading}
                    status={future.status}
                />
            </div>
        </>
    );
};

export default Schedule;
