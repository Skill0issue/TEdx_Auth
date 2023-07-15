import {auth,provider} from './Firebase.js';
import React,{useState,useEffect}  from 'react';
import { signInWithPopup } from 'firebase/auth';
 import { Link } from 'react-router-dom';

const SignIn = () => {
    // setting up variables for local storage
    const [Email,setEmail] = useState('');
    const [Name,setName]=useState('');
    const [Tel,setTel]=useState('');
    const [ProfilePic, setProfilePic] = useState('');

    //  google auth for sign up

    const SignInWithGoogle = () => {
        signInWithPopup(auth, provider).then(result => {
            setEmail(result.user.email);
            setName(result.user.displayName);
            setProfilePic(result.user.photoURL);
            localStorage.setItem("Name",result.user.displayName)
            localStorage.setItem("ProfilePic",result.user.photoURL)
            localStorage.setItem("Email",result.user.email)
            localStorage.setItem("Tel",Tel)
        }).catch((error)=> {
            alert(error.name , error.message)
        });
    }
    // load data after refresh
    useEffect(()=> {
                setEmail(localStorage.getItem('Email'))
                setName(localStorage.getItem('Name'))
                setProfilePic(localStorage.getItem('ProfilePic'))
                setTel(localStorage.getItem('Tel'))
        },[])


        const SumbitProfile= (Name,Tel,Block,MilanEvents,Competitions) => {
            localStorage.setItem("Block",Block)
            localStorage.setItem("Tel",Tel)
            localStorage.setItem("Name",Name)
            localStorage.setItem("MilanEvents",MilanEvents)
            localStorage.setItem("Competitions",Competitions)
        }
    return ( 
        <div className="SignIn">
            {Email ? <div className="Edit-profile">
                <div className='Signin-header'>
                    <h2>Edit Profile</h2>
                    <img src={ProfilePic} alt="profilepic.png" />
                </div>
                    <form className="Signin-body">
                        <label> Name: </label>
                        <input type="textarea" id="name" value={Name} onChange={(e)=> {e.preventDefault();setName(e.target.value)}}/>
                        <label> Phone Number:  </label>
                        <input type="tel" id="phonenumber" value={Tel} onChange={(e)=> {e.preventDefault();setTel(e.target.value)}}/>
                    </form>
                    <div className="buttons">
                    <Link to ="/Profile">
                            <button onClick={() => {SumbitProfile(Name,Tel)}}
                            > Save</button>
                        </Link >
                    </div>
                </div>
            :    <div className="google-sign-in">
                <div className="google-box">
                    <h2>Please login with google</h2>
                    <button type="button" className="login-with-google-btn" onClick={SignInWithGoogle} > Sign in with Google </button>
                </div>
            </div>
            }
        </div>
     );
}

 
export default SignIn;