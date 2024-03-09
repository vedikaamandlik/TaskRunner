import React, { useEffect } from 'react';

const RazorpayPaymentButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.setAttribute('data-payment_button_id', 'pl_NjsiS3tUblAaLJ');

    document.querySelector('form').appendChild(script);

    return () => {
      // Cleanup script when the component is unmounted
      document.querySelector('form').removeChild(script);
    };
  }, []);

  return (
    <form>
      {/* Razorpay script will be dynamically added here */}
    </form>
  );
};

export default RazorpayPaymentButton;
