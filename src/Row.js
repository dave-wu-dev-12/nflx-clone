import React from 'react';
import './Row.css';
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, shows}) {
    return (
        <div className="row">
            <h3 className="row__title">{title}</h3>
            <div className="row__shows">
                {shows.map(show => (
                    <img className="row__image" src={base_url + show.poster_path} alt={show.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row
