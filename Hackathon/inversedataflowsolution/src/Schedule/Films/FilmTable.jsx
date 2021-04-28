import React from 'react';

import FilmRow from './FilmRow';

const FilmTable = props => {
    const status = props.films[0].filmStatus;
    const films = status !== null ? props.films.map(film => <FilmRow film={film} key={film._id}/>) : []
    return (
        <div className="container">
            <h1>{props.title}</h1>
            {props.films.length === 0 ?
                <p>There are no {props.title} films at the moment</p> :
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Release Date</th>
                            {status === "1" ? <th>Show Times</th> : null}
                            <th>Title</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>{films}</tbody>
                    </table>
                </div>
            }
        </div>
    );
}

export default FilmTable;
