import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import CollegeCard from '../../components/CollegeCard/CollegeCard';

const CollegePreview = () => {
   const { colleges } = useContext(AuthContext)

   return (
      <>
         <h1 className='text-2xl md:text-4xl font-bold text-center pt-12'>Some of the best colleges!</h1>
         <div className='flex flex-wrap m-12 gap-6'>
            {colleges.slice(0, 3).map(college => <CollegeCard key={college._id} college={college} />)}
         </div>
      </>
   );
};

export default CollegePreview;