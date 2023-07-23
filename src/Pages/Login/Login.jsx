import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login.jpg'
import SocialAuth from '../../components/SocialAuth/SocialAuth';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
const Login = () => {
   // scroll to top automatically
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   const { loginWithEmail, setLoading, loading } = useContext(AuthContext)
   const navigate = useNavigate();

   const handleLogin = (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;

      loginWithEmail(email, password).then(() => {
         setLoading(false);
         toast.success('successfully logged in!');
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
            <img className='w-72' src={loginImg} alt="login" />
         </div>
         {/* login form */}
         <form onSubmit={handleLogin} className='min-w-[300px] md:min-w-[500px]'>
            <h2 className="uppercase text-2xl font-bold text-center mb-12">login now</h2>
            {/* email */}
            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">What is your email?</span>
               </label>
               <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required/>
            </div>

            {/* password */}
            <div className="form-control w-full">
               <label className="label">
                  <span className="label-text">Create a new password</span>
               </label>
               <input type="password" name='password' placeholder="Password" className="input input-bordered w-full" autoComplete='true' required/>
            </div>
            <button type={loading ? 'button' : 'submit'} className="btn btn-block mt-5">{loading ? 'Please wait!' : 'Login'}</button>
            <div className='text-sm py-3 text-center'>
               New Here? <Link className='text-green-600' to='/signup'>Sign Up Now</Link>
            </div>
            <SocialAuth />
         </form>
      </div>
   );
};

export default Login;