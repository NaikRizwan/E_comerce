
// // import { useNavigate } from 'react-router-dom';
// // import React, { useState } from 'react';
// // import styled from 'styled-components';
// // import axios from 'axios';


// // export const  RegistrationContainer = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   margin: 2rem;
// // `;

// // export const RegistrationForm = styled.form`
// //   display: flex;
// //   flex-direction: column;
// //   width: 300px;
// // `;

// // export const InputField = styled.input`
// //   margin: 0.5rem 0;
// //   padding: 0.5rem;
// //   border: 1px solid #ccc;
// //   border-radius: 4px;
// //   font-size: 16px;
// // `;

// // export const SubmitButton = styled.button`
// //   margin: 0.5rem 0;
// //   padding: 0.5rem;
// //   background-color: #007bff;
// //   color: #fff;
// //   border: none;
// //   border-radius: 4px;
// //   font-size: 16px;
// //   cursor: pointer;
// // `;

// // function Register() {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     email: '',
// //     password: '',
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };



// // const handleSubmit = async (e) => {
// //   e.preventDefault();

// //   try {
// //     const response = await axios.post('http://localhost:3001/register', formData);

// //     if (response.status === 201) {
// //      console.log("  Registration successful");
// //      alert("Registration succesfully");
// //      navigate('/login');
// //    //    Redirect or show a success message
// //     } else {
// //       // Registration failed, handle errors
// //     }
// //   } catch (error) {
// //     console.error('Error:', error);
// //     // Handle network errors
// //   }
// // };

  
// //   return (
    
// //     <RegistrationContainer>
// //       <h2>Registration</h2>
// //       <RegistrationForm onSubmit={handleSubmit}>
// //         <InputField
// //           type="text"
// //           name="username"
// //           placeholder="Username"
// //           value={formData.username}
// //           onChange={handleChange}
// //         />
// //         <InputField
// //           type="email"
// //           name="email"
// //           placeholder="Email"
// //           value={formData.email}
// //           onChange={handleChange}
// //         />
// //         <InputField
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           value={formData.password}
// //           onChange={handleChange}
         
// //         />
// //         <SubmitButton type="submit"  >Register</SubmitButton>
// //       </RegistrationForm>
// //     </RegistrationContainer>
// //   );
// // }

// // export default Register;

// import { useNavigate } from 'react-router-dom';
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

// export const RegistrationContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 2rem;
 
  
// `;
// const riz ={
//   width:"300px",
//   height:"300px",
// }
// export const GridLeft = styled.div`
//   display: flex;
//   flex-direction: column;
//   // justify-content: center;
//   // align-items: center;
//   gap: 10px;

// `;

// export const GridRight = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// // export const RegistrationForm = styled.form`
// // display: grid;
// //   flex-direction: column;
// //   width: 600px;
// // `;
// export const RegistrationForm = styled.form`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 20px;
//   width: 600px;
//  background-color:	#FFFAFA;
// `;

// export const InputField = styled.input`
//   margin: 0.5rem 0;
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 16px;
// `;

// export const ErrorText = styled.p`
//   color: red;
//   font-size: 14px;
//   margin-top: 0.2rem;
// `;
// // const riz =styled.div`
// // width:300px;
// // height:300px
// // `;
// export const SubmitButton = styled.button`
//   margin: 0.5rem 0;
//   padding: 0.5rem;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
// `;
// // const CancelButton = styled.button`
// //   margin: 0.5rem 0;
// //   padding: 0.5rem;
// //   background-color: #ccc;
// //   color: #fff;
// //   border: none;
// //   border-radius: 4px;
// //   font-size: 16px;
// //   cursor: pointer;
// // `;

// function Register() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' }); // Clear validation errors on input change
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (formData.username.length < 3) {
//       newErrors.username = 'Username must be at least 3 characters long';
//     }

//     if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters long';
//     }

//     setErrors(newErrors);

//     // Return true if there are no errors, indicating the form is valid
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       try {
//         const response = await axios.post('http://localhost:3001/regist/register', formData);

//         if (response.status === 201) {
//           console.log('Registration successful');
//           alert('Registration successfully');
//           navigate('/login');
//         } else {
//           // Registration failed, handle errors
//         }
//       } catch (error) {
//         console.error('Error:', error);
        
//         // Handle network errors
        
//       }
//     }
//   };

//   return (
//     <RegistrationContainer>
    
//       <RegistrationForm onSubmit={handleSubmit}>
       
//       <GridLeft>
//         <riz>
//           <img style={riz}  src="images/hero.jpg" alt="logoo" /></riz>
//         </GridLeft>
//         <GridRight>
//         <h2 style={{textAlign:"center"}}>Registration</h2>
//         <InputField
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         {errors.username && <ErrorText>{errors.username}</ErrorText>}
//         <InputField
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <InputField
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {errors.password && <ErrorText>{errors.password}</ErrorText>}
//         <SubmitButton type="submit">Register</SubmitButton>
//         <p style={{textAlign:"center"}}>Already have account &nbsp; &nbsp;
//            <button type='button' onClick={() => navigate('/login')}>{' '}Login</button></p>
//         </GridRight>
//       </RegistrationForm>
//     </RegistrationContainer>
//   );
// }

// export default Register;


import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import Login from './Login';


export const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
 
  
`;
const riz ={
  width:"300px",
  height:"300px",
}
export const GridLeft = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  gap: 10px;

`;

export const GridRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// export const RegistrationForm = styled.form`
// display: grid;
//   flex-direction: column;
//   width: 600px;
// `;
export const RegistrationForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 600px;
 background-color:	#FFFAFA;
`;

export const InputField = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 0.2rem;
`;
// const riz =styled.div`
// width:300px;
// height:300px
// `;
export const SubmitButton = styled.button`
  margin: 0.5rem 0;
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;
// const CancelButton = styled.button`
//   margin: 0.5rem 0;
//   padding: 0.5rem;
//   background-color: #ccc;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
// `;

function Register() {
 
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear validation errors on input change
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.full_name.length < 3) {
      newErrors.full_name = 'Username must be at least 3 characters long';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);

    // Return true if there are no errors, indicating the form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('/reg', formData);
        console.log(response.data)

        if (response.status === 201) {
          console.log('Registration successful');

          alert('Registration successfully');
        
          navigate('/login');
          
        } else {
          alert("Failed");
        }
      } catch (error) {
        console.error('Error:', error);
        
        // Handle network errors
        
      }
    }
  };

  return (
    <RegistrationContainer>
    
      <RegistrationForm onSubmit={handleSubmit}>
       
      <GridLeft>
        <riz>
          <img style={riz}  src="images/hero.jpg" alt="logoo" /></riz>
        </GridLeft>
        <GridRight>
        <h2 style={{textAlign:"center"}}>Registration</h2>
        <InputField
          type="text"
          name="full_name" 
          placeholder="full_name"
          value={formData.full_name}
          onChange={handleChange}
        />
        {errors.full_name && <ErrorText>{errors.full_name}</ErrorText>}
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
        <SubmitButton type="submit">Register</SubmitButton>
        <p style={{textAlign:"center"}}>Already have account &nbsp; &nbsp;
           <button type='button' onClick={() => navigate('/login')}>{' '}Login</button></p>
        </GridRight>
      </RegistrationForm>
    </RegistrationContainer>
  );
}

export default Register;

