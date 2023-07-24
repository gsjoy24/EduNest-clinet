import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { BiSolidBank, BiSolidUser } from 'react-icons/bi';
import EventCard from "./EventCard";

const CollegeDetails = () => {
   // scroll to top automatically
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   const { _id, college_name, college_image, admission_date, events, sports, research_history } = useLoaderData()
   return (
      <div className="w-[80vw] mx-auto my-12">
         <h1 className="text-3xl font-bold flex items-center gap-3 mb-6"><BiSolidBank size={50} />{college_name}</h1>
         <img className="w-full mb-5 rounded-xl" src={college_image} alt={college_name} />
         <p className='flex items-center gap-3'><BsFillCalendarCheckFill size={16} /> Admission will be held on {admission_date}</p>

         {/* research history */}

         <div className=" border-gray-600">
            <h3 className="text-xl font-bold mt-6 mb-3 uppercase">research history</h3>
            <h4 className="font-bold text-lg">Discoveries</h4>
            <div>{research_history.notable_discoveries.map(dis => <p>{dis}</p>)}</div>
            <h4 className="font-bold text-lg mt-2">Founder</h4>
            <p className='flex items-center gap-3'><BiSolidUser />{research_history?.founder}</p>
            <h4 className="font-bold text-lg mt-2">Found Date</h4>
            <p className='flex items-center gap-3'><BsFillCalendarCheckFill />{research_history?.found_date}</p>
         </div>

         {/* events */}
         <h3 className="text-xl font-bold mt-6 mb-3 uppercase">Events</h3>
         <div className="flex flex-wrap gap-3">
            {events.map(event => <EventCard key={event.event_name} event={event} />)}
         </div>

         {/* events */}
         <h3 className="text-xl font-bold mt-6 mb-3 uppercase">Sports</h3>
         <div className="flex flex-wrap gap-3">
            {sports.map(sport => <p>{sport},</p>)}
         </div>
      </div>
   );
};

export default CollegeDetails;