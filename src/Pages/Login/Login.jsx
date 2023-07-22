import { Link } from 'react-router-dom';
import loginImg from '../../assets/login.jpg'
import SocialAuth from '../../components/SocialAuth/SocialAuth';
import { useEffect } from 'react';
const Login = () => {
   // scroll to top automatically
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   return (
      <div className='py-12 px-3 flex justify-center items-center gap-8'>
         <div className='max-w-sm hidden md:block'>
            <img className='w-72' src={loginImg} alt="login" />
         </div>
         {/* login form */}
         <form className='min-w-[300px] md:min-w-[500px]'>
            <h2 className="uppercase text-2xl font-bold text-center mb-12">login now</h2>
            {/* email */}
            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">What is your email?</span>
               </label>
               <input type="email" placeholder="Email" className="input input-bordered w-full" />
            </div>

            {/* password */}
            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">Create a new password</span>
               </label>
               <input type="password" placeholder="Password" className="input input-bordered w-full" />
            </div>
            <button type='submit' className="btn btn-block mt-5">login</button>
            <div className='text-sm py-3 text-center'>
               New Here? <Link className='text-green-600' to='/signup'>Sign Up Now</Link>
            </div>
            <SocialAuth />
         </form>
      </div>
   );
};

export default Login;