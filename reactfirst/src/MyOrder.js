import React from 'react'
import { Wrapper } from './Cart';
import FormatPrice from './Helpers/FormatPrice';
import { useAuth } from './context/AuthContext';
import axios from 'axios';
import {  useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TrackPakage from './components/TrackPakage';
import { useUser } from './context/UserContext';
const MyOrder = () => {
     const { user,myorder, display} = useAuth();
  


     console.log(user);
     const  navigate=useNavigate();
     const [loading, setLoading] = useState(true);
     const { state, dispatch } = useUser();

  const callAbout = async () => {
    try {
      // ... your existing code to fetch user data
      
                const response =await fetch ('/about',{
                method:"GET",
                headers: {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials :"include"
                }
                );
        
        const data = await response.json();
      if (response.status === 400 || !data) {
        dispatch({ type: 'CLEAR_USER' });
        navigate('/login');

      } else {
        dispatch({ type: 'SET_USER', payload: { name: data.full_name, email: data.email } });
       
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: 'CLEAR_USER' });
      navigate('/login');
    }
  };
  // useEffect(() => {
  //   if (state.loggedIn) {
  //     callAbout();
  //   }
  // }, [state.loggedIn]);
  useEffect(() => {
    callAbout();
  }, [state.loggedIn]);
  function formatDateToCustomString(date) {
    const options = {
      weekday: 'short',    // Abbreviated weekday name (e.g., "Mon")
      month: 'short',      // Abbreviated month name (e.g., "Oct")
      day: 'numeric',      // Day of the month (e.g., "16")
      year: 'numeric',     // Four-digit year (e.g., "2023")
      hour: '2-digit',     // Two-digit hour (e.g., "17")
      minute: '2-digit',   // Two-digit minute (e.g., "53")
      second: '2-digit',   // Two-digit second (e.g., "40")
      timeZoneName: 'long', // Full time zone name (e.g., "India Standard Time")
    };
  
    const customDateString = date.toLocaleString('en-US', options);
    return customDateString;
  }
  
  const now = new Date();
  const formattedDate = formatDateToCustomString(now);
  
     const getDeliveryStatus = (formattedDate,deliveryDate) => {
        function parseDate(dateString) {
            const [, month, day, year, time, ampm, timeZone] = dateString.match(/(\w+), (\w+) (\d+), (\d+), (\d+:\d+:\d+ [APM]+) ([\w\s]+)$/);
            const date = new Date(`${month} ${day}, ${year} ${time} ${ampm} UTC+05:30`);
            return date;
          }
      const deliveryDateTime=deliveryDate;
      const formattedDatee=formattedDate;

      
    const formattedDateObj = parseDate(formattedDatee);
const deliveryDateObj = parseDate(deliveryDateTime);
        if (formattedDateObj < deliveryDateObj) {
           
          return 'Pending';
        } else  {
           
          return 'Succes';
        }
       
      };
    
    //   const [name,setname] =useState();
    //   const [email1,setemail] =useState();
    //   const [data1,setdata]=useState();
    //   const callAbout = async ()=>{
    //     try {
    //         const response =await fetch ('/about',{
    //         method:"GET",
    //         headers: {
    //             Accept : "application/json",
    //             "Content-Type" : "application/json"
    //         },
    //         credentials :"include"
    //         }
    //         );
    
    // const data = await response.json();
    // setdata(data);
    
    // // setname(data.full_name);
    // // console.log("setname",data.full_name);
    // // console.log(name);
    // // setemail(data.email);
    // // if(!response.status===200){
    // // const error= new Error(response.error);
    // // throw error;
    // // dispatch({type:"USER",payload:false});
    // // }
    // // if(response.status===400 || !data){
    // //   dispatch({type:"USER",payload:false})
     
    // // }
    // // else{
    // //   dispatch({type:"USER",payload:true})
    
     
    
    // // }
    
    //     } catch (error) {
    //         console.log(error);
    //         // navigate('/login');
           
           
    //     }
    // }
    //   const token = localStorage.getItem('authToken');
     // const usernn = JSON.parse(localStorage.getItem('user'));
      useEffect(() => {
    //   if (!token) {
    //     // Token not found, redirect to login page
    //     navigate('/login');
    //   } else {
        // Token found, make the API request
     
        const sendPostRequest = async () => {
          try {
            const formData = {
              email:state.email,
              username: state.name,
            };
           
            const response = await axios.post('/myorder', formData);
            display(response.data);
            setLoading(false);
          } catch (error) {
            console.error(error);
            setLoading(false);
          }
        };
       
         sendPostRequest();
      
    }, []);
    //token, navigate, user, display
    // const sendPostRequest = async () => {
    //     try {
         
    //         const formData ={
    //             email: user.email,
    //              username:user.username,
    //         }
    //         const response = await axios.post('http://localhost:3001/myord/myorder', formData  );
            
    //         display(response.data);
            
           
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // useEffect(() => {
    // //     sendPostRequest(); // Send the POST request when the component mounts
    // // }, []);
    return (
        <div>



            <div>
                {/* {lord && lord.length > 0 && ( */}
                {myorder && myorder.length > 0 && (

                    <div  >
                        {/* <h1 style={{ textAlign: "center", fontSize: "25px" }}> Your Order:</h1> */}
                        <Wrapper>
                            <div className="container">
                                <h1 style={{ textAlign: "center", fontSize: "25px" }}> Your Order Status</h1>
                                <br />

                                <div className="cart_heading grid1 grid-seven-column">
                                    <p className="cart-hide">Item</p>
                                    <p className="cart-hide">Price</p>
                                    <p className="cart-hide">Amount</p>
                                    <p className="cart-hide">Subtotal</p>
                                  
                                    <p className="cart-hide">Order On</p>
                                    <p className="cart-hide">Delivar On</p>
                                    <p className="cart-hide">Status</p>
                                </div>
                                <hr />
                                <div className="cart-item">
                                    {myorder.reverse().map((cartArray, index) => (
                                        <div key={index}>
                                            {/* <h2>Items {index + 1}</h2> */}
                                            {/* <ul> */}

                                            {cartArray.cart.map((cartItem) => (
                                                <span key={cartItem.id}>
                                                    {/* <img style ={imagee} src={cartItem.image} alt={cartItem.name} /> */}
                                                    <div className="cart_heading grid1 grid-seven-column">
                                                        <div className="cart-image--name">
                                                            <div>
                                                                <figure>
                                                                    <img src={cartItem.image} alt={cartItem.name} />
                                                                </figure>
                                                            </div>
                                                            <div>
                                                                <p>{cartItem.name}</p>
                                                                <div className="color-div">
                                                                    <p>color:</p>
                                                                    <div
                                                                        className="color-style"
                                                                        style={{ backgroundColor: cartItem.color, color: cartItem.color }}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cart-hide">
                                                            <p>

                                                                <FormatPrice price={cartItem.price} />
                                                            </p>
                                                        </div>
                                                        <div className="cart-hide">
                                                            <p>
                                                                {cartItem.amount}
                                                            </p>
                                                        </div>
                                                        <div className="cart-hide">
                                                            <p>
                                                                {/* {cartItem.amount * CartItem.price} */}
                                                                <FormatPrice price={cartItem.amount * cartItem.price} />
                                                            </p>
                                                        </div>
                                                        <div className="cart-hide">
                                                            <p style={{color:"green",fontSize:"15px"}}>
                                                                {cartArray.createdAt}
                                                            </p>

                                                        </div>
                                                        <div className="cart-hide">
                                                            <p style={{color:"green",fontSize:"15px"}} >
                                                              
                                                                {cartArray.delivarDate}
                                                            </p>

                                                        </div>
                                                        <div className="cart-hide">
                                                            <p>
                                                        {/* {getDeliveryStatus(cartArray.delivarDate)} */}
                                                        {getDeliveryStatus(formattedDate, cartArray.delivarDate)}
                                                        </p>
                                                        </div>
                                                      
                                                    </div>
                                                  <div style={{maxWidth:"90%"}}>{TrackPakage (cartArray.createdAt,cartArray.delivarDate)}</div>
                                                    <hr />
                                                  
                                                </span>
                                            ))}

                                                  
                                           
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </Wrapper>
                    </div>
                )}
            </div>
        </div>
    );
}


export default MyOrder;