import React from 'react';
import '../app.css'
import { CiStopwatch } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({recipe,handleWantToCookBtn}) => {
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
        
       <div className=' rounded-lg bg-gray-100 dark:bg-gray-900 p-2 flex flex-col items-center' >
       <img 
            src={image}
            alt="Shoes"
            className=" w-50 object-cover  h-auto" />
       
       </div>
        <div className=" items-center space-y-2 border-b border-darktxt dark:border-text pb-4">
            <h2 className="text-xl font-bold text-accent">{recipe_name}</h2>
            <p className='text-text dark:text-darktxt'>{short_description}</p> 
        </div>
        <div className='pb-3 border-b border-darktxt dark:border-text'>
        <h3 className='text-xl font-medium'>Ingredients: {ingredients.length} </h3>
        <ul className='list-disc list-inside'>
            {ingredients.map((i,idx)=><li key={idx}  className='text-text dark:text-darktxt'>{i}</li>)}
        </ul>
        </div>
       
        <div className='flex gap-3'>
        <div className='flex gap-1 justify-center items-center'><CiStopwatch className='text-lg'></CiStopwatch><span className='text-text dark:text-darktxt'>{preparing_time}</span> </div>
        <div className='flex gap-1 justify-center items-center'><AiOutlineFire className='text-lg'></AiOutlineFire><span className='text-text dark:text-darktxt'>{calories}</span> </div>

        </div>
        <button onClick={()=>handleWantToCookBtn(recipe)} className="btn btn-accent">Want to Cook</button>
     </div>
        
        
    </>
    );
};

export default Recipe;