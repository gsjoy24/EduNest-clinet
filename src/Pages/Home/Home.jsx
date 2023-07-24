import React, { useEffect } from 'react';
import Header from './Header';
import CollegePreview from './CollegePreview';
import CollegeDetails from '../CollegeDetails/CollegeDetails';

const Home = () => {
   // scroll to top automatically
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   return (
      <div>
         <Header />
         <CollegePreview />

      </div>
   );
};

export default Home;