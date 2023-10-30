import React,{useCallback, useState} from "react";
import  './MyForm.css';
import validator from 'validator';

function MyForm(){
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[id, setId] = useState('');
    const[error, setError]= useState(false);
    const[errorEmail, setErrorEmail] = useState(false);
    const[idError, setIdError] = useState(false);
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const idRegex = /^[a-zA-Z0-9]+$/
    const handleName = (e) =>{
        let name = e.target.value;
        if(name.length < 3){
            setError(true);
        } else{
            setError(false);
        }
    }
    const handleEmail = (e) => {
        let email = e.target.value;
        if(!email.match(emailRegex)){
            setErrorEmail(true);
        }else{
            setErrorEmail(false);
        }
    }
    const handleId = (e) =>{
        let id = e.target.value
        if(!id.match(idRegex)){
            setIdError(true)
        }else{
            setIdError(false)
        }
    }

    function loginHandle(e)
    {
        e.preventDefault()
    }
   
    
    return(
    <div >
       
         <form onSubmit={loginHandle} className="form-border">
             <label>Registration Form</label>
            <br/> <br/> 
        <span> ID :   </span>
            <input type="text" placeholder="Enter Id"  onChange={handleId}/>
            <br/>
            {idError? <span style={{color:'red'}}>Id contain only number and letters</span> : " "}
             <br/>
            <label htmlFor="">Name : </label>
            <input type="text" name='Name' placeholder="Enter Name" onChange={handleName} required/>
            <br/>
            {error?<span style={{color:'red'}}> Name length must be greater than 2 character</span>: " "}
             <br/>
            <span>ADDRESS: </span>
            <input type="text" placeholder="Enter Address"/>
            <br/> <br/>
            <span>CITY: </span>
            <input type="text"  placeholder="Enter City"/>
            <br /> <br />
            <label htmlFor="">Email : </label>
            <input type="text" name='Email' placeholder="Enter Email" onChange={handleEmail} required/>
            <br/>
            {errorEmail? <span style={{color:'red'}}> Invalid email</span> : " "} 
            <br/>
            <span>MOBILE NO: </span>
            <input type="text" id="userPhone" placeholder="Enter Mobile no"/>
            <br /> <br />
            <button type="submit">Register</button>
        </form>
        </div>
  
    );
}


export default  MyForm;