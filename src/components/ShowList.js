import React from 'react';
import ShowListItem from './ShowListItem';

const ShowList = ({ shows }) => {
    return (
        <div className="show-list">
            {shows.map((show) => (
                <ShowListItem key={show.show.id} show={show.show} />
            ))}
        </div>
    );
};

export default ShowList;
