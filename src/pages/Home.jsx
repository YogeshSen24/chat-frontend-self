
import currentUser from "../DummyData/currentUser.js";
import Container  from "../components/Container.jsx";
import UserFirstLookCard from "../components/cards/UserFirstLookCard.jsx";

const Home = () => {


  
  return (
    <Container>
      <div className="flex flex-col w-full h-full items-center ">
      <UserFirstLookCard name={currentUser?.data.username} email={currentUser?.data.email} bio={currentUser?.data.bio} profielImg={currentUser?.data.profileImage} mutuals={currentUser?.data.friends} />
      </div>
    </Container>
  );
};

export default Home;
