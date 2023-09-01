import React, { useState } from "react";
import Cards from "./Cards";

export default function HomePage({ setIsLoggedIn, emailInput, passInput }) {
 const [mouse, setMouse] = useState(false);
 const Info = () => {
  setMouse((prevMouse) => {
   return !prevMouse;
  });
 };
 const trueInfo = () => {
  setMouse(true);
 };

 const [eye, setEye] = useState(false);
 const visibility = () => {
  setEye((prevEye) => {
   return !prevEye;
  });
 };

 const logOut = () => {
  setIsLoggedIn(false);
 };

 return (
  <section className="bg-gray-50 dark:bg-gray-900 h-screen">
   <nav className="flex justify-between py-6 px-3 bg-gray-950 items-center">
    <div className="text-lg text-white flex  justify-center items-center">
     <span className="material-symbols-outlined">home</span> Home Page
    </div>
    <div className="flex flex-row gap-6">
     <div className="text-lg text-white flex  justify-center items-center">
      <span class="material-symbols-outlined">shopping_cart</span> Cart
     </div>
     <div className="text-lg text-white flex  justify-center items-center z-10" onMouseEnter={Info} onMouseLeave={Info}>
      <span className="material-symbols-outlined">person</span> About
      {mouse ? (
       <div className="absolute w-60 h-40 right-20 top-12 bg-gray-500 rounded-tr-lg p-2 text-white text-sm shadow-custom" onMouseEnter={trueInfo}>
        <img src="user.png" alt="user" className="inline-block w-7 mx-2" />
        About User
        <div className="my-5 mx-2">{emailInput}</div>
        {eye ? (
         <div className="flex items-center mx-2" onClick={visibility}>
          {passInput}
          <span className="material-symbols-outlined mx-2">visibility</span>
         </div>
        ) : (
         <div className="flex items-center mx-2" onClick={visibility}>
          User Password
          <span className="material-symbols-outlined mx-2">visibility_off</span>
         </div>
        )}
       </div>
      ) : (
       ""
      )}
     </div>
    </div>
   </nav>

   <main>
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
   </main>

   <footer>
    <button onClick={logOut} className="absolute bottom-0 right-0 bg-red-600 text-white w-48 h-10 m-3 rounded-sm hover:bg-gray-400 duration-300 ease-in-out flex  justify-center items-center">
     <span className="material-symbols-outlined">logout</span> Log Out
    </button>
   </footer>
  </section>
 );
}
