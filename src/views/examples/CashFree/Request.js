import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Request = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://indian.munihaelectronics.com/public/api/initiate-payment', {
         // Change to "TEST" for test server, "PROD" for production
          appId: "TEST4390043c4b669779b747e49764400934",
          orderId: "DP00564",
          orderAmount: '5000',
          orderCurrency: "INR",
          orderNote: location?.state?.orderNote || "",
          customerName: location?.state?.customerName || "",
          customerPhone: "0178965248",
          customerEmail: location?.state?.customerEmail || "",
          returnUrl: "http://localhost:3000/user/deposit",
          notifyUrl: "http://localhost:3000/user/deposit",
        });

        if (response.data) {
          const { cashfreeUrl, postData, signature } = response.data;
          const form = document.createElement('form');
          form.setAttribute('action', cashfreeUrl);
          form.setAttribute('method', 'post');

          // Add hidden fields
          for (const [fieldName, fieldValue] of Object.entries(postData)) {
            const input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', fieldName);
            input.setAttribute('value', fieldValue);
            form.appendChild(input);
          }

          // Add the signature field
          const signatureInput = document.createElement('input');
          signatureInput.setAttribute('type', 'hidden');
          signatureInput.setAttribute('name', 'signature');
          signatureInput.setAttribute('value', signature);
          form.appendChild(signatureInput);

          document.body.appendChild(form);

          // Submit the form
          form.submit();

          setLoading(false);
        }
      } catch (error) {
        console.error("Error initiating payment:", error);
      }
    };

    fetchData();
  }, [location]);

  if (loading) {
    return <p>Please wait.......</p>;
  }

  return null;
};

export default Request;