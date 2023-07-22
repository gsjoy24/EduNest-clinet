import headerImg from '../../assets/header.jpg';

const Header = () => {
   return (
      <div className='relative flex justify-center items-center min-h-[90vh]'>
         <img className='blur-sm brightness-50 w-full h-full object-cover absolute top-0 right-0 -z-10' src={headerImg} alt="people" />

         <div className='text-white md:max-w-[700px] space-y-9 text-center px-4'>
            <h1 className='text-3xl md:text-5xl leading-tight font-bold'>Welcome to EduNEST: Your One-Stop College Booking Solution</h1>
            <p>Discover hassle-free college bookings with CampusReserve+. Find comfortable dorms, event spaces, and sports facilities, all in one place. Join today for a seamless campus experience!</p>
         </div>
      </div>
   );
};

export default Header;