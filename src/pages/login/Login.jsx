import "./login.css"
import { useState } from "react"
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"
// import {useNavigate} from "react-router-dom"; bunu aç

const Login = () => {
    const[error,setError] = useState(false);
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    // const navigate = useNavigate() (bunu aç kodları atarken)

    const handleLogin = (e)=> {
      e.preventDefault()

      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // navigate("/") bunu da aç

    // ...
  })
  .catch((error) => {
    setError(true)
    // ..
  });
    }

    return (
       <div className="login">
        <form className="form" onSubmit={handleLogin}>
            <input type="email" placeholder="email" className="input" 
            onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="password" className="input"
            onChange={e=>setPassword(e.target.value)}/>
            <button type="submit" className="button">Login</button>
           { error && <span className="span">Wrong email or password!</span>}
        </form>
       </div>
    )
}

export default Login