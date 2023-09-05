import { useState } from "react";
import useAuth from "./useAuth";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuth();

  const signup = async (email, password, confirmPassword) => {
    setLoading(true);
    setError(null)
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, confirmPassword}),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      setLoading(false);
    }

    if (response.ok) {
        //save the token to local storage
        localStorage.setItem("user", JSON.stringify(data))
      dispatch({type: "LOGIN", payload: data });
      setLoading(false);
    }
  };
  return { signup, error, loading };
};
export default useSignup;
