import {useGetAllUserQuery} from "../../redux/api/users-api.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import {Container} from "../../utils/index.jsx";
import RenderCard from "../../components/render-card/RenderCard.jsx";

const Home = () => {

  const {data} = useGetAllUserQuery()

  return (
      <Container>
        <Navbar/>
        <div className="max-w-[1200px] grid grid-cols-3 gap-4 mt-[30px] mx-auto">
          {
            data?.data?.map(user =>
                <RenderCard key={user.id} data={user}/>
            )}
        </div>
      </Container>
  )
}
export default Home
