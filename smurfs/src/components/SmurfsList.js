import React from 'react';

const SmurfsList = ({ item, deleteSmurf }) => {
    return (
        <div>
            <h3>Name: {item.name}</h3>
            <p>Age: {item.age}</p>
            <p>Height: {item.height}</p>
            <button onClick={() => deleteSmurf(item.id)}>{`Delete ${item.name}`}</button>
        </div>
    )
}

export default SmurfsList;