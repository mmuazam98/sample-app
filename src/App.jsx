import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";

// Additional Task: Preserve email and isLoggedIn even after page is reloaded. (Hint: use localStorage)

export default function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 return <>{isLoggedIn ? <HomePage setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}</>;
}
