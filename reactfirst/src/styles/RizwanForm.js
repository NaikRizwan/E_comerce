import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RizwanForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //const handleSubmit = async (e) => {
  //  e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:3001/saveUser', formData);
  
  //     if (response.status === 200) {
  //       console.log("   successful");
  //       // Login successful
  //       // Redirect to a dashboard or do something else
  //       alert(" succefully");
  //       // setIsAuthenticated(true);
  //       // localStorage.setItem('authToken', 'yourAuthToken'); // Replace with the actual token
  //   //  setIsAuthenticated(true);
  //   //    localStorage.setItem('authToken', 'yourAuthToken'); // Replace with the actual token
   
  //     } else {
  //       console.log("not ");
  //       alert("username mismatch or password mismatchh");
  //       // Login failed, handle errors
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     // Handle network errors or invalid login
  //   }
  // };
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const saveData = () => {
    // Send the formData to your backend API (Node.js) to save it to MongoDB
    try {
      const response = axios.post('http://localhost:3001/saveUser', formData);
  
      if (response.status === 200) {
        console.log("   successful");
        // Login successful
        // Redirect to a dashboard or do something else
        alert(" succefully");
        // setIsAuthenticated(true);
        // localStorage.setItem('authToken', 'yourAuthToken'); // Replace with the actual token
    //  setIsAuthenticated(true);
    //    localStorage.setItem('authToken', 'yourAuthToken'); // Replace with the actual token
   
      } else {
        console.log("not ");
        alert("username mismatch or password mismatchh");
        // Login failed, handle errors
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors or invalid login
    }
  
    console.log('Form Data to Save:', formData);
  };

  return (
    <Container >
      <h1>Multi-Step Form</h1>
      <StepContainer>
        {step === 1 && (
          <div>
            <h2>Step 1: User Information</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <button onClick={nextStep}>Next</button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Step 2: Address Information</h2>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={handleInputChange}
            />
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>Step 3: Review</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Address: {formData.address}</p>
            <p>City: {formData.city}</p>
            <p>State: {formData.state}</p>
            <p>ZIP Code: {formData.zip}</p>
            <button onClick={prevStep}>Previous</button>
            <button  onClick={saveData}>Save</button>
          </div>
        )}
      </StepContainer>
    </Container>
  );
};

export default RizwanForm;
