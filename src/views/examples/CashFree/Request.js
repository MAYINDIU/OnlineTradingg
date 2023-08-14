import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Request = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    amount: '',
  });
 const location = useLocation()
 console.log(location.state)

  const [paymentLink, setPaymentLink] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post('https://indian.munihaelectronics.com/public/api/create-payment', formData);
      const paymentLink = response.data.payment_link;
      window.location.href = paymentLink;
    } catch (error) {
      console.error('Error creating payment:', error);
      // Handle error here
    }
  };

  return (
    <div>
       <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white mb-0">My Plan</h2>
      </div>
      <form>
      <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile"
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <button type="button" onClick={handlePayment}>
          Pay Now
        </button>
      </form>

      {paymentLink && (
        <div>
          <h2>Payment Link</h2>
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">
            {paymentLink}
          </a>
        </div>
      )}
    </div>
  );
};

export default Request;