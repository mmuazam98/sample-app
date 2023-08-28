// Home page should show the loggedIn email ID, and have a button called logout.
import React, { useState } from "react";

export default function HomePage({ setIsLoggedIn }) {
 const [mouse, setMouse] = useState(false);
 const Info = () => {
  setMouse(true);
 };
 const revInfo = () => {
  setMouse(false);
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
    <div className="text-lg text-white flex  justify-center items-center z-10" onMouseEnter={Info} onMouseLeave={revInfo}>
     <span className="material-symbols-outlined">person</span> About
     {mouse ? (
      <div className="absolute w-60 h-40 right-20 top-12 bg-gray-500 rounded-tr-lg p-2 text-white text-sm shadow-custom">
       <img src="user.png" alt="user" className="inline-block w-7 mx-2" />
       About User
       <div className="my-5 mx-2">User Email</div>
       <div className="my-5 mx-2 flex  items-center">
        User password
        <span className="material-symbols-outlined hidden mx-2">visibility</span>
        <span className="material-symbols-outlined mx-2">visibility_off</span>
       </div>
      </div>
     ) : (
      ""
     )}
    </div>
   </nav>

   <footer>
    <button onClick={logOut} className="absolute bottom-0 right-0 bg-red-600 text-white w-48 h-10 m-3 rounded-sm hover:bg-gray-400 duration-300 ease-in-out flex  justify-center items-center">
     <span className="material-symbols-outlined">logout</span> Log Out
    </button>
   </footer>
  </section>
 );
}
