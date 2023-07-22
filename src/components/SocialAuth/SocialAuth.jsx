import { useContext } from 'react';
import { AiOutlineGoogle, AiFillGithub } from 'react-icons/ai'
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const SocialAuth = () => {
   const { continueWithGoogle, continueWithGitHub, setLoading } = useContext(AuthContext);
   const navigate = useNavigate();

   const handleGoogleAuth = () => {
      continueWithGoogle().then((data) => {
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

   const handleGitHubAuth = () => {
      continueWithGitHub().then((data) => {
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
      <>
         <div className="divider text-sm">OR</div>
         <p className='text-sm text-center mb-4'>Continue with</p>
         <div className='flex justify-center items-center gap-5'>
            <AiOutlineGoogle onClick={handleGoogleAuth} className='cursor-pointer hover:scale-95 duration-200' size={45} />
            <AiFillGithub onClick={handleGitHubAuth} className='cursor-pointer hover:scale-95 duration-200' size={45} />
         </div>
      </>
   );
};

export default SocialAuth;