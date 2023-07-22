import { Link } from 'react-router-dom';
import signupImg from '../../assets/signup.jpg'
import SocialAuth from '../../components/SocialAuth/SocialAuth';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const Signup = () => {
   const { name } = useContext(AuthContext)
   console.log(name);
   // scroll to top automatically
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   return (
      <div className='py-12 px-3 flex justify-center items-center gap-8'>
         <div className='max-w-sm hidden md:block'>
            <img className='w-96' src={signupImg} alt="signup" />
         </div>
         {/* sign up form */}
         <form className='min-w-[300px] md:min-w-[500px]'>
            <h2 className="uppercase text-2xl font-bold text-center mb-12">sign up now</h2>
            {/* name */}
            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">What is your name?</span>
               </label>
               <input type="text" placeholder="Name" className="input input-bordered w-full" />
            </div>

            {/* photo */}
            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">Your photo URL</span>
               </label>
               <input type="text" placeholder="Photo URL" className="input input-bordered w-full" />
            </div>

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
            <button type='submit' className="btn btn-block mt-5">Sign Up</button>

            <div className='text-sm py-3 text-center'>
               Already have an account? <Link className='text-green-600' to='/login'>Login Now</Link>
            </div>
            <SocialAuth />
         </form>
      </div>
   );
};

export default Signup;