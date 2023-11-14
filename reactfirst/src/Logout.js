import React,{useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from './context/UserContext';

const Logout = () => {
   
    const {  dispatch } = useUser();
useEffect(()=>{

    fetch ('/logout',{
        method:"GET",
        headers: {
            Accept : "application/json",
            "Content-Type" : "application/json"
        },
        credentials :"include"
        }).then((res)=> {
            //  dispatch1({type:"USER",payload:false})
            dispatch({ type: 'CLEAR_USER' });
            
navigate('/login')
if(!res.status===200){
    const error= new Error(res.error);
    throw error;
    }
        }).catch((err)=>{
console.log(err);
        })

});

const navigate =useNavigate();
  return (
    <div>Logout</div>
  )
}

export default Logout;