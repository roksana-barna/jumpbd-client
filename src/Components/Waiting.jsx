import React from 'react';

const Waiting = () => {
  return (
    <div>
      <h1 className='text-red-600 text-xl font-bold'>Awaiting Approval</h1>
      <p className='text-xl'>Your registration is pending approval from the admin. Please wait for confirmation.</p>
      {/* You can also provide a link to the homepage or display a message with instructions. */}
    </div>
  );
};

export default Waiting;
