import React, { useState } from 'react';
import Table from './table';
import CookingTable from './cookingTable';


const Sidebar = ({wantToCook,setWantToCook}) => {

const [currentCooking,setCurrentCooking]=useState([]);

const handleCurrentCooking=(item)=>{
    // console.log(item,'added')
   if(!currentCooking.includes(item)){

    const newCookingArray=[...currentCooking,item];    
    setCurrentCooking(newCookingArray);
   }
   else{
    alert('this recipe already preparing');
   }
    removeItemFromWantToCookArray(item);
        
}
const removeItemFromWantToCookArray=(item)=>{
    const newWantToCookArray=wantToCook.filter((i)=>i!==item);
    setWantToCook(newWantToCookArray);
   
}
// total time to preapring
const totalPreparingTimes=currentCooking.map((i)=>i.preparing_time);

// total calories
const totalCalories=currentCooking.map((i)=>i.calories);

    return (
        <>
        <div className='bg-gray-200 dark:bg-secondary rounded-2xl px-4 py-5 flex-2/5 flex flex-col items-center'>
            <h2 className='text-2xl text-secondary dark:text-primary 
            font-bold text-center border-b border-darktxt
             pb-3 px-2 dark:border-text'>Want to cook : {wantToCook.length}</h2>

             <div className='pt-3 w-full overflow-auto'>
                <table className='w-full border-collapse border border-text text-left ' >
                    <thead className=''>
                        <tr className='bg-gray-800'>
                            <th className=' border border-text pl-2 font-medium py-2'>No.</th>
                            <th className=' border border-text pl-2 font-medium py-2'>Name</th>
                            <th className=' border border-text pl-2 font-medium py-2'>Time (min)</th>
                            <th className=' border border-text pl-2 font-medium py-2'>Calories</th>
                            <th className=' border border-text pl-2 font-medium py-2'>Status</th>

                        </tr>
                    </thead>
                    <tbody className='text-base'>
                    {wantToCook.map((item,idx)=><Table handleCurrentCooking={handleCurrentCooking} key={idx} wantToCookItem={item}></Table>)}
                    </tbody>
                </table>
             </div>
             <h2 className='text-2xl text-secondary dark:text-primary 
            font-bold text-center border-b border-darktxt
             py-3 px-2 dark:border-text'>Currently Cooking : {currentCooking.length}</h2>

            <div className='pt-3 w-full overflow-auto'>
                <table className='text-[14px] w-full border-collapse border border-text text-left ' >
                    <thead className=''>
                        <tr className='bg-gray-800'>
                            
                            <th className=' border border-text pl-2 font-medium py-2'>Recipe</th>
                            <th className=' border border-text pl-2 font-medium py-2'>Name</th>
                            <th className=' border border-text pl-2 font-medium py-2'>Time (min)</th>
                            <th className=' border border-text pl-2 font-medium py-2'>Calories</th>


                        </tr>
                    </thead>
                    <tbody className=''>
                    {
                        currentCooking.map((currenCookItem,idx)=><CookingTable key={idx} currentCookItem={currenCookItem}></CookingTable>)
                    }
                    <tr>
                    
                        <td className='border border-text pl-2 py-2 '> Total</td>
                        <td className='border border-text pl-2 py-2 '>==</td>
                        <td className='text-accent border border-text pl-2 py-2 '>Time : {
                       
                            totalPreparingTimes.reduce((sum,num)=> sum+parseInt(num), 0)

                           } 
                            </td>
                        <td className='text-accent Cooking border border-text pl-2 py-2 '>Calories : {
                            
                            totalCalories.reduce((sum,num)=> sum+parseInt(num), 0)

                            
                            } </td>

                    </tr>
                    </tbody>
                </table>
            </div>
          
        </div>
    
        </>
        
        
    );
};

export default Sidebar;