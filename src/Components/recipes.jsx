import React, { useEffect, useState } from 'react';
import Recipe from './recipe';
import '../App.css'

const Recipes = ({handleWantToCookBtn}) => {
    
    const [recipes,setRecipes]=useState([]);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))


    },[]);
    

    return (
        <div className='flex-3/5 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6'>
            {
                recipes.map((recipe,idx)=><Recipe handleWantToCookBtn={handleWantToCookBtn} key={idx} recipe={recipe}></Recipe>)

            }
        </div>
    );
};

export default Recipes;