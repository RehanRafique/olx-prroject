import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../config/firebase"


function Register() {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signup = () => {
        register({ fullname, age, email, password, })
    }

    return (
        <div>
            <h2>Register</h2>
            <input placeholder="Name" onChange={(e) => setFullname(e.target.value)} />
            <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
            <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="password" onChange={(e) => setPassword(e.target.value)} />

            <br />
            <button onClick={signup}>Register</button>
            <p>
                Already you have an account
                <span onClick={() => navigate('/login')}><b>Click Here</b></span>
            </p>
        </div>
    )
}
export default Register;