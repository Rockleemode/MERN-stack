import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    await login(email, password);
    if(!error){
     setEmail(email)
     setPassword('')
    } 
    setPassword("")
   
  };
  return (
    <div className="login">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button type="submit" disabled={loading}>Login</button>
        <span className="span">Dont have an Account? <Link to="signup">signup</Link></span>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
