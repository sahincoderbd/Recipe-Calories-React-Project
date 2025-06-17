import React from 'react';

const Table = ({wantToCookItem,handleCurrentCooking}) => {

    const {recipe_name,
        preparing_time,
        calories
            }=wantToCookItem;
    return (
       <>
        <tr>

        <td className=' border border-text px-2 font-normal py-2'><li className='list-decimal'></li></td>
        <td className=' border border-text px-2 font-normal py-2'>{recipe_name}</td>
        <td className=' border border-text px-2 font-normal py-2'>{preparing_time} min</td>
        <td className=' border border-text px-2 font-normal py-2'>{calories}</td>
        <td className=' border border-text px-2 font-normal py-2'><button onClick={()=>handleCurrentCooking(wantToCookItem)} className='btn btn-accent'>Preparing</button></td>
        </tr>
       
       </>
               
                
               
    );
};

export default Table;