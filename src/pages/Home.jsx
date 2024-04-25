import React, { useEffect } from "react";
import currentUser from "../DummyData/currentUser";
import Container  from "../components/Container.jsx";
import UserFirstLookCard from "../components/cards/UserFirstLookCard.jsx";

const Home = () => {


  
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
