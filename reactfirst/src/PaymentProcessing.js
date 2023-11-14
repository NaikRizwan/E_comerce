import React from 'react';

const PaymentProcessing = ({ paymentData, onChange }) => {
  return (
    <div className="checkout-section">
      <h2>Payment Processing</h2>
      <form>
        <div className="form-group">
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Expiration Date:</label>
          <input
            type="text"
            name="expirationDate"
            value={paymentData.expirationDate}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={paymentData.cvv}
            onChange={onChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default PaymentProcessing;
