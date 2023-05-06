import React from 'react';

const ShowListItem = ({ show }) => {
    return (
        <div className="show-list-item">
            <h2>{show.name}</h2>
            <p>{show.summary}</p>
            <img src={show.image && show.image.medium} alt={show.name} />
        </div>
    );
};

export default ShowListItem;
