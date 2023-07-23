import { Link, useNavigate } from 'react-router-dom';
import signupImg from '../../assets/signup.jpg'
import SocialAuth from '../../components/SocialAuth/SocialAuth';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
const Signup = () => {
   const { createUser, setLoading, loading, updateUserProfile } = useContext(AuthContext)
   const navigate = useNavigate();
   // scroll to top automatically
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   const handleSignUp = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const photoURL = event.target.photoURL.value;
      const email = event.target.email.value;
      const password = event.target.password.value;

      createUser(email, password).then((data) => {
         if (data?.user) {
            updateUserProfile(name, photoURL)
               .then(() => { console.log('name and photo added!') })
               .catch((err) => { console.log(err) })
         }
         setLoading(false);
         toast.success('successfully signed up!');
         navigate('/');
      })
         .catch((err) => {
            setLoading(false);
            console.log(err.message);
            toast.error(err.message);
         });
   }

   return (
      <div className='py-12 px-3 flex justify-center items-center gap-8'>
         <div className='max-w-sm hidden md:block'>
            <img className='w-96' src={signupImg} alt="signup" />
         </div>
         {/* sign up form */}
         <form onSubmit={handleSignUp} className='min-w-[300px] md:min-w-[500px]'>
            <h2 className="uppercase text-2xl font-bold text-center mb-12">sign up now</h2>
            {/* name */}
            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">What is your name?</span>
               </label>
               <input type="text" placeholder="Name" name='name' className="input input-bordered w-full" required />
            </div>

            {/* photo */}
            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">Your photo URL</span>
               </label>
               <input type="text" placeholder="Photo URL" name='photoURL' className="input input-bordered w-full" required />
            </div>

            {/* email */}
            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">What is your email?</span>
               </label>
               <input type="email" placeholder="Email" name='email' className="input input-bordered w-full" required />
            </div>

            {/* password */}
            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">Create a new password</span>
               </label>
               <input type="password" placeholder="Password" name='password' className="input input-bordered w-full" autoComplete='true' required />
            </div>
            <button type={loading ? 'button' : 'submit'} className="btn btn-block mt-5">{loading ? 'Please wait!' : 'Sign Up'}</button>

            <div className='text-sm py-3 text-center'>
               Already have an account? <Link className='text-green-600' to='/login'>Login Now</Link>
            </div>
            <SocialAuth />
         </form>
      </div>
   );
};

export default Signup;