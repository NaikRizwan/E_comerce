import React from 'react';

const UserInformationForm = ({ userData, onChange }) => {
  return (
    <div className="checkout-section">
      <h2>User Information</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={onChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default UserInformationForm;
