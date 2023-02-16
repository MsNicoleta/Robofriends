import React from "react";

const SearchBox = ({searchfield,searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-light-yellow '
                type='search'
                placeholder='Search Robot' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;