import { GiPartyPopper, GiArchiveResearch, GiCalendar } from 'react-icons/gi';

const EventCard = ({ event }) => {
   return (
      <div className='w-[330px] p-3 border border-gray-500 rounded-xl'>
         <h4 className='flex items-center text-xl font-bold gap-3 mb-3'><GiPartyPopper size={25} />{event.event_name}</h4>
         <p className='flex items-center gap-3'><GiCalendar size={20}/>{event.date}</p>
         <p className='text-justify'>{event.description}</p>
      </div>
   );
};

export default EventCard;