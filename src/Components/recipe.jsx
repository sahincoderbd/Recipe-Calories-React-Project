import React from 'react';
import '../App.css'
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
     <div className="card bg-primary dark:bg-gray-950 shadow-md p-3 gap-4 justify-between">
        
        <img 
            src={image}
            alt="Shoes"
            className="rounded-lg w-full bg-gray-100 dark:bg-gray-900 p-2 h-60 h-auto" />
       
        <div className=" items-center space-y-2 border-b border-gray-100 pb-4">
            <h2 className="text-xl font-bold">{recipe_name}</h2>
            <p>{short_description}</p> 
        </div>
        <div className='pb-3 border-b border-gray-200'>
        <h3 className='text-lg font-medium '>Ingredients: {ingredients.length} </h3>
        <ul>
            {ingredients.map(i=><li className=' '>{i}</li>)}
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