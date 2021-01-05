import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    const allCards = robots.map((user, j) => {
        return (<Card 
        id={robots[j].id}
        name={robots[j].name} 
        email={robots[j].email}/>
        );
    });
    return(
        <div className='flex justify-center flex-wrap'>
            {allCards}
    </div>
    );
}

export default CardList