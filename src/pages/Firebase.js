import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';



const firebaseConfig = {

// error persits woth dot env file can't config webpack



//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGE,
//   appId: process.env.REACT_APP_APP_ID

apiKey: "AIzaSyD8vFhVujnQ77kMMuxxu52BD2xU60a9pbU",
authDomain: "tedx-auth-24a56.firebaseapp.com",
projectId: "tedx-auth-24a56",
storageBucket: "tedx-auth-24a56.appspot.com",
messagingSenderId: "597758551933",appId: "1:597758551933:web:abf5138dfeeedf82d88e14"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export{auth,provider};