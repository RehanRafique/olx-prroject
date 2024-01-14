import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../config/firebase"


function LogIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signIn = () => {
        login({ email, password })
    }

    return (
        <div>
<h2>Log In</h2>
    <input placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
    <input placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>

    <br/>
    <button onClick={signIn}>Log In</button>
    <p>
        Don't you have an account
        <span onClick={()=> navigate('/')}><b>Click Here</b></span>
    </p>
        </div>
    )
}
export default LogIn;