import React from 'react';
import Table from './table';

const Sidebar = ({wantToCook}) => {

    return (
        <>
        <div className='bg-gray-200 dark:bg-secondary rounded-2xl px-4 py-5 flex-1/3 flex flex-col justify-between items-stretch'>
            <h2 className='text-2xl text-secondary dark:text-primary 
            font-bold text-center border-b border-darktxt
             pb-3 px-2 dark:border-text'>Want to cook: {wantToCook.length}</h2>

             <div className='pt-3 '>
                <table className='w-full border-collapse border border-text text-left ' >
                    <thead className=''>
                        <tr className='bg-gray-800'>
                            <th className=' border border-text pl-2 font-medium py-2'>Name</th>
                            <th className=' border border-text pl-2 font-medium py-2'>Time (min)</th>
                            <th className=' border border-text pl-2 font-medium py-2'>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                    {wantToCook.map((item,idx)=><Table key={idx} wantToCookItem={item}></Table>)}
                    </tbody>
                </table>
             </div>
        </div>
        </>
        
        
    );
};

export default Sidebar;