import React from 'react';

import FilmRow from './FilmRow';

const FilmsTable = props => {
    const films = props.films.map(film => <FilmRow film={film} key={film._id}/>);

    return (
        <div className="table-responsive">
            <p>Click on a Film to see more</p>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Release Date</th>
                    {props.status === "1" ? <th>Show Times</th> : null}
                    <th>Title</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {films}
                </tbody>
            </table>
        </div>
    );
}

export default FilmsTable;