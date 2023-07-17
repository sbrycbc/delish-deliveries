import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

const Payment = () => {
  const client_id = process.env.REACT_APP_PAYPAL_CLIENT_ID;
  console.log(client_id);

  const handleOnApprove = (data, actions) => {
    console.log("Payment completed successfully:", data);
  };

  return (
    <Helmet title="Payment">
      <CommonSection title="Payment" />
      <div className="d-flex justify-content-center align-items-center mt-3">
        <PayPalScriptProvider options={{ "client-id": client_id }}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "10.00",
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => handleOnApprove(data, actions)}
          />
        </PayPalScriptProvider>
      </div>
    </Helmet>
  );
};

export default Payment;

