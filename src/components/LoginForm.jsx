import { useState, useRef } from "react";

export default function LoginForm({ setIsLoggedIn }) {
 const handleSubmit = (e) => {
  e.preventDefault();
 };

 const [emailInput, setEmailInput] = useState("");
 const updateEmail = (e) => {
  setEmailInput(e.target.value);
 };

 const [passInput, setPassInput] = useState("");
 const updatePass = (e) => {
  setPassInput(e.target.value);
 };

 const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
 const onSubmit = () => {
  if (!validEmail.test(emailInput)) {
   alert("Invalid Email Format");
  } else if (emailInput === "test@example.com" || passInput === "Abcd123") {
   setIsLoggedIn(true);
  } else {
   alert("Invalid Username or Password");
  }
 };

 const [eye, setEye] = useState(true);
 const [passwordType, setPasswordType] = useState("password");
 const visibilityOn = () => {
  setPasswordType("text");
  setEye(false);
 };
 const visibilityOff = () => {
  setPasswordType("password");
  setEye(true);
 };

 return (
  <section className="bg-gray-50 dark:bg-gray-900 h-screen">
   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
     <span className="material-symbols-outlined mx-2">diversity_1</span>
     MnM
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
     <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in to your account</h1>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
       <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
         Your email
        </label>
        <input
         type="email"
         name="email"
         id="email"
         value={emailInput}
         onChange={updateEmail}
         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="name@company.com"
         required=""
        />
       </div>
       <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
         <div className="flex justify-between">
          Password
          {eye ? (
           <span className="material-symbols-outlined self-baseline mx-2" onClick={visibilityOn}>
            visibility
           </span>
          ) : (
           <span className="material-symbols-outlined mx-2" onClick={visibilityOff}>
            visibility_off{" "}
           </span>
          )}
         </div>
        </label>
        <input
         type={passwordType}
         name="password"
         id="password"
         value={passInput}
         onChange={updatePass}
         placeholder="••••••••"
         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         required=""
        />
       </div>
       <div className="flex items-center justify-between">
        <div className="flex items-start">
         <div className="flex items-center h-5">
          <input
           id="remember"
           aria-describedby="remember"
           type="checkbox"
           className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
           required=""
          />
         </div>
         <div className="ml-3 text-sm">
          <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
           Remember me
          </label>
         </div>
        </div>
        <a href="#" className="text-sm font-medium text-gray-500 hover:underline dark:text-primary-500">
         Forgot password?
        </a>
       </div>
       <button type="submit" className="text-dark font-bold w-36 h-8 m-auto block rounded-md  bg-gray-400 hover:bg-gray-900 hover:text-white duration-300" onClick={onSubmit}>
        Sign in
       </button>
       <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don't have an account yet?
        <a href="#" className="font-medium text-primary-600 hover:underline hover:text-white dark:text-primary-500 inline-block ml-2">
         Sign up
        </a>
       </p>
      </form>
     </div>
    </div>
   </div>
  </section>
 );
}
