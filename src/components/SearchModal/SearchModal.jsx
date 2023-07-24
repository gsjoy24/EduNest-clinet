import React from 'react';

const SearchModal = () => {
   return (
      <dialog id="my_modal_3" className="modal">
         <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <p className='text-center mb-5'>Which college are you looking for?</p>
            <div className="join flex justify-center">
               <input className="input input-bordered join-item input-md w-3/5 focus:outline-0" placeholder="Email" />
               <button className="btn btn-md join-item rounded-r-full ">search</button>
            </div>
         </form>
      </dialog>
   );
};

export default SearchModal;