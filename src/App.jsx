import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";

export default function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [emailInput, setEmailInput] = useState("");
 const [passInput, setPassInput] = useState("");

 return (
  <>
   {isLoggedIn ? (
    <HomePage setIsLoggedIn={setIsLoggedIn} emailInput={emailInput} passInput={passInput} />
   ) : (
    <LoginForm setIsLoggedIn={setIsLoggedIn} emailInput={emailInput} setEmailInput={setEmailInput} passInput={passInput} setPassInput={setPassInput} />
   )}
  </>
 );
}
