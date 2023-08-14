import React, { useEffect } from 'react';

const PaymentSuccessComponent = () => {
  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);

    // Get specific parameters like 'order_id' and 'order_token'
    const orderId = params.get('order_id');
    const orderToken = params.get('order_token');

    // Do something with the parameters
    console.log('Order ID:', orderId);
    console.log('Order Token:', orderToken);

    // Perform additional actions, e.g., update UI, show a success message, etc.
  }, []);

  return (
    <div>
      <h1>Payment Success</h1>
      {/* You can display a success message or UI elements here */}
    </div>
  );
};

export default PaymentSuccessComponent;