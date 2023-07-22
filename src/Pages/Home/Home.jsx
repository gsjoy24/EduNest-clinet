import React, { useEffect } from 'react';
import Header from './Header';

const Home = () => {
   // scroll to top automatically
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   return (
      <div>
         <Header />

      </div>
   );
};

export default Home;