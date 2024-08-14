import {useGetUserQuery} from "../../redux/api/users-api.jsx";
import {useParams} from "react-router-dom";
import RenderCard from "../../components/render-card/RenderCard.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

const DetailsPage = () => {
  const {id} = useParams()
  const {data} = useGetUserQuery(id)
  const user = data?.data
  const type = "I"
  return (
     <div>
       <Navbar/>
       <div className='mt-[100px]'>
         <RenderCard data={user} type={type}/>
       </div>
     </div>
  )
}
export default DetailsPage
