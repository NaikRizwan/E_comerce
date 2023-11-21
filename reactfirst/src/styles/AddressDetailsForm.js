import React from 'react';

const AddressDetailsForm = ({ addressData, onChange }) => {
  return (
    <div className="checkout-section">
      <h2>Address Details</h2>
      <form>
        <div className="form-group">
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={addressData.street}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={addressData.city}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={addressData.state}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={addressData.postalCode}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={addressData.country}
            onChange={onChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default AddressDetailsForm;
