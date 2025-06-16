import React from 'react';

const Table = ({wantToCookItem}) => {

    const {recipe_name,
        preparing_time,
        calories
            }=wantToCookItem;
    return (
       <>
        <tr>
        <td className=' border border-text pl-2 font-normal py-2'>{recipe_name}</td>
        <td className=' border border-text pl-2 font-normal py-2'>{preparing_time}</td>
        <td className=' border border-text pl-2 font-normal py-2'>{calories}</td>
        </tr>
       
       </>
               
                
               
    );
};

export default Table;