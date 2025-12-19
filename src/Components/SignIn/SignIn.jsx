import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import './SignIn.css'
import { useState } from 'react'
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const {login} = useAuth();
  const navigate = useNavigate();
  const handleLogin =()=>{
    const success = login(email,password)
if(success) navigate("/");
else alert("Invalid Credentials")
  }
  return (
    <div className='Signin-Section'>
       <h2 className='title'>Sign In</h2>
       <input type='text'placeholder='Email'className='inp' onChange={(e)=>setEmail(e.target.value)}></input>
       <input type='password'placeholder='Password'className='inp' onChange={(e)=>setPassword(e.target.value)}></input>
       <button className='signin-btn' onClick={handleLogin}>Sign In</button>
    </div>
  )
}

export default SignIn
