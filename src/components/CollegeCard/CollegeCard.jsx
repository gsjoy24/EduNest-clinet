import { BsFillCalendarCheckFill, BsFillTrophyFill } from 'react-icons/bs';
import { GiPartyPopper, GiArchiveResearch } from 'react-icons/gi';
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
   const { _id, college_name, college_image, admission_date, events, sports } = college

   return (
      <div className="card min-w-[300px] max-w-[350px] bg-base-100 shadow-xl m-auto">
         <figure>
            <img className='h-52 w-full object-cover' src={college_image} alt={college_name} /></figure>
         <div className="card-body">
            <h2 className="card-title flex items-center gap-2 mb-2"> <FaGraduationCap size={30} />{college_name}</h2>
            <p className='text-sm flex items-center gap-3'><BsFillCalendarCheckFill size={16} /> Admission will be held on {admission_date}</p>
            <p className='text-sm flex items-center gap-3'><GiPartyPopper size={20} />{events.length} upcoming events</p>
            <p className='text-sm flex items-center gap-3'><GiArchiveResearch size={20} />available research history</p>
            <p className='text-sm flex items-center gap-3'><BsFillTrophyFill size={20} />{sports.length} sports categories</p>
            <div className="card-actions justify-end">
               <Link to={`colleges/${_id}`} className="btn btn-sm">Details</Link>
            </div>
         </div>
      </div>
   );
};

export default CollegeCard;