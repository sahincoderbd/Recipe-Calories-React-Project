import React from 'react';
import '../app.css'
import { CiStopwatch } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({recipe}) => {
    const {recipe_name,
          image,
          short_description,
          ingredients,
          recipe_id,
          preparing_time,
          calories}=recipe;
    return (
    <>
     <div id={recipe_id} className=" card bg-primary dark:bg-gray-950 shadow-md p-3 gap-4 justify-between">
        
        <img 
            src={image}
            alt="Shoes"
            className="rounded-lg w-full bg-gray-100 dark:bg-gray-900 p-2 h-60 h-auto" />
       
        <div className=" items-center space-y-2 border-b border-text pb-4">
            <h2 className="text-2xl font-bold text-accent">{recipe_name}</h2>
            <p className='text-text dark:text-darktxt'>{short_description}</p> 
        </div>
        <div className='pb-3 border-b border-text'>
        <h3 className='text-xl font-medium'>Ingredients: {ingredients.length} </h3>
        <ul>
            {ingredients.map(i=><li className='text-text dark:text-darktxt'>{i}</li>)}
        </ul>
        </div>
       
        <div className='flex gap-3'>
        <div className='flex gap-1 justify-center items-center'><CiStopwatch className='text-lg'></CiStopwatch><span>{preparing_time}</span> </div>
        <div className='flex gap-1 justify-center items-center'><AiOutlineFire className='text-lg'></AiOutlineFire><span>{calories}</span> </div>

        </div>
        <button className="btn btn-accent">Want to Cook</button>
     </div>
        
        
    </>
    );
};

export default Recipe;