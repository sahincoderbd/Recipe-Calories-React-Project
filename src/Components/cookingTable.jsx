import React from 'react';

const CookingTable = ({currentCookItem}) => {

    const {image,
        recipe_name,
        preparing_time,
        calories

    }=currentCookItem;

 


    return (
     <>
      <tr>

        <td className=' border border-text px-2 font-normal py-2'>{<img className='w-10 h-auto' src={image}></img>}</td>
        <td className=' border border-text px-2 font-normal py-2'>{recipe_name}</td>
        <td className=' border border-text px-2 font-normal py-2'>{preparing_time} min</td>
        <td className=' border border-text px-2 font-normal py-2'>{calories}</td>
        </tr>
     </>
    );
};

export default CookingTable;