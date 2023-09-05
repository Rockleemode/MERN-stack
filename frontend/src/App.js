import {BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import useAuth from "./hooks/useAuth";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  const { user } = useAuth();
  return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route index element={user ? <Home/>: <Navigate to='/login'/>} />
        <Route path="login" element={!user ? <Login/>: <Navigate to='/'/>} />
        <Route path="/login/signup" element={!user? <SignUp/> : <Navigate to='/'/>} />
        </Routes>
        <Footer />
        </BrowserRouter>
      </div>
  )
}


export default App;
