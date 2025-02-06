import React from 'react';

const ConfirmedBooking = () => {
  return (
    <main
      style={{
        minHeight: 'calc(115vh - 24.25rem)',
        paddingTop: '6.25rem',
      }}>
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}>
        <h1>Booking Confirmed!</h1>
        <p>Thank you for your reservation. We look forward to seeing you!</p>
      </div>
    </main>
  );
};
export default ConfirmedBooking;
