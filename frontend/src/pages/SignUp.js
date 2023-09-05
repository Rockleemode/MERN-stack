import { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const {signup, error, loading} = useSignup();
    const handleSubmit = async (e) =>{
        e.preventDefault()
        await signup(email, password, confirmPassword)
        setPassword('');
        setConfirmPassword('');
    }
    return ( 
        <div className="signup">
            <h1>Sign Up Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) =>{setPassword(e.target.value)}}></input>
                <label>ConfirmPassword:</label>
                <input type="password" value={confirmPassword} onChange={(e) =>{setConfirmPassword(e.target.value)}}></input>
                <button type="submit" disabled={loading}>SignUp</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
     );
}
 
export default SignUp;