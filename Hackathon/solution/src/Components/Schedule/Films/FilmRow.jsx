import React from 'react';

import {NavLink} from 'react-router-dom';

import {FILMIMAGES} from '../../../js/constants/images';

const FilmRow = props => {
    const releaseDateRaw = new Date(props.film.releaseDate);
    const releaseDateDisplay = `${releaseDateRaw.getDate()}-${releaseDateRaw.getMonth() + 1}-${releaseDateRaw.getFullYear()}`;
    const filmImage = FILMIMAGES[props.film.title] ? FILMIMAGES[props.film.title] : FILMIMAGES['No Image'];
    return (
        <tr>
            <td className="td-left-align">{releaseDateDisplay}</td>
            {props.film.filmStatus === 1 ?
                <td className="td-left-align">
                    {props.film.showingTimes}
                </td> : null}
            <td className="td-right-align">
                <NavLink to={`/film/${props.film._id}`}>
                    {props.film.title}
                </NavLink>
            </td>
            <td>
                <img src={filmImage.src} alt={filmImage.alt} width="10%"/>
            </td>
        </tr>

    );
}

export default FilmRow;