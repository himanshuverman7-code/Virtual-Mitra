import React from "react";
import { BiUser } from "react-icons/bi";

const MyAccount = ({name}) => {
  return (
    <div className='flex items-center space-x-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700'>
      {/* <User className='w-4 h-4 text-blue-400' /> */}
      <BiUser className='w-4 h-4 text-blue-400' />
      <span className='text-sm text-slate-100'>
        {name.split(" ")[0]}
      </span>
    </div>
  );
};

export default MyAccount;
