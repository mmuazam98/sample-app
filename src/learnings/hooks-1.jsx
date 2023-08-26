import { useEffect, useRef, useState } from "react";

function Hooks1() {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState("");
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    avatar: "",
    isSaved: false,
  });

  const handleChange = (e, key) => {
    const copy = {
      ...profile,
    }; // ====> {}
    copy[key] = e.target.value; // ====> copy["name"] = muazam ===> { name: "muazam" }
    copy.isSaved = false;
    setProfile(copy);
  };


  // const [count, setCount] = useState(0);
  // const countRef = useRef(0);

  // useEffect(() => {
  //   console.log("Component rendered because of countRef")
  //   countRef.current = Math.random();
  // }, [countRef.current]);

  // useEffect(()=>{
  //   console.log("Component rendered because of count")
  //   countRef.current = count;
  //   console.log("Countref value is:",countRef.current);
  //   const myInterval = setInterval(() => {
  //     setCount(count + 1)
  //   }, 1000);

  //   // cleanup function
  //   return () => clearInterval(myInterval)
  // }, [count])

  const nameInputRef = useRef(null);

  useEffect(() => {
    // console.log(nameInputRef.current);
    nameInputRef.current.focus();
  }, []);  

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5">
      {/* Count is: {count} */}
      {profile.isSaved ? (
        <div className="absolute top-5 right-5 flex items-center gap-2.5">
          <img src={profile?.avatar} alt="" height={30} width={30} />
          <div className="flex flex-col">
            <span>{profile?.name}</span>
            <span className="text-gray-400">{profile?.username}</span>
          </div>
        </div>
      ) : (
        <div className="absolute top-5 right-5 flex items-center gap-2.5">Please save details</div>
      )}
      <input
        type="text"
        id="name"
        ref={nameInputRef}
        className="focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder="Enter your name"
        value={profile?.name}
        onChange={(e) => handleChange(e, "name")}
      />
      <input
        type="text"
        className="focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder="Enter your avatar url"
        value={profile?.avatar}
        onChange={(e) => handleChange(e, "avatar")}
      />
      <input
        type="text"
        className="focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder="Enter your username"
        value={profile?.username}
        onChange={(e) => handleChange(e, "username")}
      />
      <button
      className="bg-blue-500 text-white px-3 py-2 rounded-md focus:bg-red-400"
        onClick={() =>
          setProfile({
            ...profile,
            isSaved: true,
          })
        }>
        Save details
      </button>
    </div>
  );
}

export default Hooks1;

/* 
function useState(initialState) {
  let state = initialState || null;
  const setState = (x) => {
    state = x;
  }

  return [
    state,
    setState
  ]
}

Nullable operator

const data = {
  name: "Muazam",
  age: 12,
  class: 10
} || {
  age: null,
  class: null
}

{data?.name?.toLowerCase()}
*/
