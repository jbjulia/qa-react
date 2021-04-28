import React, {useEffect, useState} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import {GETSINGLEFILM} from "../../../js/constants/urls";
import ReleaseDateDisplay from "./ReleaseDateDisplay";

const Film = props => {
    const filmId = props.match.params.id;
    const [film, setFilm] = useState({});

    useEffect(() => {
        const getFilm = async () => {
            try {
                const fetchedFilm = await axios(`${GETSINGLEFILM}/${filmId}`);
                setFilm(fetchedFilm.data);
            } catch (e) {
                setFilm(e.message);
            }
        };
        getFilm();
    }, []);

    //   const setFilmComponentErrorContent = () => {
    //     console.log(`Setting error content`);
    //     if () {
    //       console.log(`Setting loader`);
    //       filmComponentContentError.push(

    //       );
    //     } else if (typeof film[0] === "string") {
    //       console.log(`Setting no film found`);
    //       filmComponentContentError.push(
    //         <>
    //           <h1>No film found</h1>
    //           <p>That film reel appears to have been lost</p>
    //         </>
    //       );
    //     }
    //   };

    return (
        <div className="container">
            {Object.entries(film).length === 0 && film.constructor === Object ? (
                <Loader type="Watch" color="rgb(0, 0, 255)" height={30} width={30}/>
            ) : typeof film[0] === "string" ? (
                <>
                    <h1>No film found</h1>
                    <p>That film reel appears to have been lost</p>
                </>
            ) : (
                <>
                    <h1>{film.title}</h1>
                    <div className="row">
                        <div className="col-md-10 col-xs-12">
                            <p>{film.synopsis}</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                                culpa optio impedit odit eligendi non veniam aut enim assumenda,
                                natus, voluptates dignissimos velit ad officiis rerum quos
                                sapiente quibusdam ex. Excepturi adipisci dolore libero ex
                                perspiciatis odit, eveniet beatae enim minus. Quae cupiditate
                                harum at placeat. Nam fugit qui voluptates.
                            </p>
                        </div>
                        <div className="col-md-2 col-xs-12">
                            <img src={`../images/${film.img}`} alt={film.title}/>
                        </div>
                    </div>
                    <div className="row">
                        <p>{film.cast}</p>
                    </div>
                    <div className="row">
                        <p>{film.directors}</p>
                    </div>
                    <div className="row">
                        <ReleaseDateDisplay date={film.releaseDate}/>
                    </div>
                    {film.showingTimes ? (
                        <div className="row">
                            <p>Showing at: {film.showingTimes}</p>
                        </div>
                    ) : null}
                </>
            )}
        </div>
    );
};

export default Film;
