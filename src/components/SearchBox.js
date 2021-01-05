import React from 'react'

const SearchBox = ({searchbar, searchchange}) => {
    return(
        <div className=' tc'>
            <input className='pa3 ba b--blue bg-washed-green'
            type='search' placeholder='Search Robots'
                onChange= {searchchange}
            />
        </div>
        
    );
}



export default SearchBox;