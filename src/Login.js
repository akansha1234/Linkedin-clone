import React,{useState} from 'react'
import './Login.css';
import {useDispatch} from 'react-redux';
import {login} from './features/userSlice';
import {auth} from './firebase';
function Login() {
    const[name,setName]=useState('');
    const[profileUrl,setProfileUrl]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const dispatch=useDispatch();
    const register=()=>{
        if(!name){
            return alert("Please enter a full Name!");
        }
        auth.createUserWithEmailAndPassword(email,password).then(
            (userAuth)=>{
                userAuth.user.updateProfile({
                    displayName:name,
                    photoURL:profileUrl,
                })
                .then(()=>{
                       dispatch(login({
                           email:userAuth.user.email,
                           uid:userAuth.user.uid,
                           displayName:name,
                           photoURL:profileUrl
                       })
                       );
                })
            }
        ).catch((error)=>alert(error.message))
         
    }
    const loginToApp=(e)=>{
                e.preventDefault();
                auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
                    dispatch(login({
                        email:userAuth.user.email,
                           uid:userAuth.user.uid,
                           displayName:userAuth.user.displayName,
                           photoURL:userAuth.user.photoUrl
                    }))
                }).catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
            <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="logo"/>
            <form>
                <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} placeholder="FullName(required)"/>
                <input type="text" value={profileUrl} onChange={(e)=>setProfileUrl(e.target.value)} placeholder="Profile pic url(optinal)"/>
                <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?
                <span className="login-register" onClick={register}>Register Now</span>
            </p>
            
        </div>
    )
}

export default Login
