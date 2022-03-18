import React from 'react';

const Card = (props) => {
    const {name, type, subtype, photo} = props;
    return (
<div className='tc bg-light-blue dib br3 ba3 ma2 grow bw2 shadow-5'>
    <p>{photo}</p>
<div>
<h2>{name}</h2>
<h3>{type}</h3>
<h3>{subtype}</h3>
</div>
</div>
    );
}

export default Card;