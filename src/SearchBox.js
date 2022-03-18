import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
        <input className='tc bg-light-green dib br3 ba3 ma2 grow bw2 shadow-5' 
        type='search' 
        placeholder='search items'
        onChange={searchChange} 
        />
        </div>
    );
}

export default SearchBox;``