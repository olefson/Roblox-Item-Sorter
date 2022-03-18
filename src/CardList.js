import React from 'react';
import Card from './Card';

const CardList = ({ items }) => {
    return (
        <div>
        {
    items.map((user, i) => {
        return ( //div was here
        <Card 
        key={i}
        id={items[i].id} 
        photo={items[i].photo} 
        name={items[i].name} 
        type={items[i].type} 
        subtype={items[i].subtype}
        />
        );
    })
        }
</div>
);
}

export default CardList;