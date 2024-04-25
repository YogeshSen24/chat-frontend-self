import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import currentUser from "../DummyData/currentUser";
import Container  from "../components/Container.jsx";
import UserFirstLookCard from "../components/cards/UserFirstLookCard.jsx";

const Home = () => {
  //logic to fetch the current user data and store it in the redux store
  // useEffect(()=>{
  //   const url = "https://mean-chat-app-backend.onrender.com/api/v1/user/";
  //   const currentUser  =  axios.get(url)
  //   user&& console.log(user);
  // } , [])
  const copyTOClipboard = (content)=> {return(
  <div class="grid grid-cols-8 gap-2 w-full max-w-[23rem]">
      <label for="npm-install" class="sr-only">{content}</label>
      <input id="npm-install" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={content} disabled readonly />
      <button data-copy-to-clipboard-target="npm-install" class="col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center">
          <span id="default-message">Copy</span>
          <span id="success-message" class="hidden inline-flex items-center">
              <svg class="w-3 h-3 text-white me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
              </svg>
              Copied!
          </span>
      </button>
  </div>)}
  
  return (
    <Container>
      <div className="flex flex-col w-full h-full items-center ">
      {/* <img src={currentUser?.data?.profileImage} class="object-cover h-48 aspect-[4/3] rounded-xl "></img>
      <h2 className="text-white text-3xl font-bold text-center my-5">Welcome back ,  {currentUser?.data?.username} </h2>
      {copyTOClipboard(currentUser?.data?._id)} */}
      </div>
      <UserFirstLookCard name={currentUser?.data.username} email={currentUser?.data.email} bio={currentUser?.data.bio} profielImg={currentUser?.data.profileImage} mutuals={currentUser?.data.friends} />
    </Container>
  );
};

export default Home;
