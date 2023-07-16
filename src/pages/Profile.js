import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    const [Name,setName] =useState('');
    const [Tel,setTel] =useState('');

    const [Email,setEmail] = useState('');

    useEffect(()=> {
        setName(localStorage.getItem('Name'))
        setTel(localStorage.getItem('Tel'))
        setEmail(localStorage.getItem('Email'))
        },[]);


                // log out function (clears cache)
                const LogOut = () => {
                  localStorage.clear();
              }

              

    return ( 
        <div className="return-profile">
        {Email?
        <div className="Profile">
            <h1>Profile Details </h1>
            <div className="Profile-body">
            <span>Name: {Name}</span>
            <span>Tel:{Tel}</span>
            </div>
            <Link to="/SignIn">
            <button>Edit Profile</button>
            </Link>
            <Link to ="/">
                    <button onClick={LogOut}>LogOut</button>
            </Link>
        </div>
        : <div className="Not-signedin-profile">
            <h1>You are Not Signed In</h1>
            <Link to="/SignIn"><button>Click to Sign In</button></Link>
         </div>
        } 
        </div>
     );
}
 
export default Profile;