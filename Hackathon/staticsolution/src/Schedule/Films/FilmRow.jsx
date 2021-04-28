import React from 'react';

const FilmRow = props => {
    const filmImageSrc = props.film.title.replace(/\s+/g, '');
    return (
        <tr>
            <td className="td-left-align">{new Date(props.film.releaseDate).toString()}</td>
            {props.film.filmStatus === "1" ? <td className="td-left-align">{props.film.showingTimes}</td> : null}
            <td className="td-left-align">{props.film.title}</td>
            <td className="td-left-align">
                <img src={require(`../../images/${filmImageSrc}.jpg`)} alt={props.film.title}/>
            </td>
        </tr>
    );
}

export default FilmRow;
