import {useDeletedUserMutation} from "../../redux/api/users-api.jsx";
import {message} from "antd";
import {Link} from "react-router-dom";

const RenderCard = ({data, type}) => {
  const [deleted] = useDeletedUserMutation()
  const deleteUser = (id) => {
    try {
      deleted(id);
      message.success("User deleted successfully");
    } catch (error) {
      message.error("Failed delete user:");
    }
  };

  return (
      <div
          className="p-5 flex justify-center items-center flex-col border w-[350px] mx-auto bg-indigo-300 rounded-2xl shadow-2xl group hover:scale-105 transition duration-700">
        <div className="p-1 border border-indigo-600 bg-white rounded-full">
          <img className="group-hover:scale-95 transition duration-700 rounded-full" src={data?.avatar} alt=""/>
        </div>
        <div className="text-white py-3 text-[20px]">
          <h2>{data?.first_name} {data?.last_name}</h2>
          <p className="py-2">{data?.email}</p>
        </div>
        {
          type === "I" ? <></> :
              <div className="flex justify-around items-center gap-4">
                <Link to={`/details-page/${data?.id}`}
                      className="text-[14px] rounded-xl py-1 px-4 border border-cyan-400 bg-cyan-300 text-white hover:!border-cyan-400 hover:bg-white hover:!text-indigo-700 transition duration-700">More
                  info
                </Link>
                <button
                    onClick={() => deleteUser(data?.id)}
                    className="text-[14px] rounded-xl py-1 px-4 border border-red-500 bg-red-600 text-white hover:!border-red-400 hover:bg-red-500 hover:!text-black transition duration-700">Delete
                </button>
              </div>
        }
      </div>
  )
}
export default RenderCard
