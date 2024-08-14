import {LuSettings2} from "react-icons/lu";
import {AutoComplete, Button, Form, Input, message, Modal} from "antd";
import {BiSearch} from "react-icons/bi";
import {Link, useNavigate} from "react-router-dom";
import logo from "../../images/logo-head.png"
import {useEffect, useState} from "react";
import {useCreateUserMutation} from "../../redux/api/users-api.jsx";

const Navbar = () => {
  const [create, {data, isSuccess, isLoading}] = useCreateUserMutation()
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = (values) => {
    create(values)
  };
  useEffect(() => {
    if (isSuccess) {
      message.success("Successfully created user!");
      setIsModalOpen(false);
    }
  }, [isSuccess]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
      <nav className='w-full h-[100px] bg-indigo-100 flex justify-between items-center gap-4 px-6'>
        <Link to={"/"}>
          <img className="w-[80px]" src={logo} alt=""/>
        </Link>
        <div>
          <form
              className="flex items-center gap-3 bg-[#fefefe] w-[500px] py-1 px-4 rounded-[62px] border border-gray-300 hover:border-[#1677FF]">
            <BiSearch className="text-[#0000005f] text-2xl"/>
            <AutoComplete
                className="search_input"
                placeholder="Search..."
            />
            <LuSettings2 className="text-[24px] text-gray-400"/>
          </form>
        </div>
        <div className="flex items-center gap-4">
          <Button
              onClick={showModal}
              className="text-[18px] rounded-xl py-4 px-[30px] border border-indigo-600 bg-indigo-500 text-white hover:!border-indigo-600 hover:bg-indigo-500 hover:!text-indigo-600 transition duration-700 font-semibold">Create</Button>
          <Button
              className="text-[18px] rounded-xl py-4 px-[30px] border border-indigo-600 bg-indigo-500 text-white hover:!border-indigo-600 hover:bg-indigo-500 hover:!text-indigo-600 transition duration-700 font-semibold"
              onClick={() => navigate("/auth-form/sign-in")}>Sign In</Button>
        </div>
        <Modal title="Create User"
               open={isModalOpen}
               onCancel={handleCancel}
               footer={null}
               maskClosable={false}
        >
          <Form
              className='w-full'
              layout="vertical"
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete="on"
          >
            <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ]}
            >
              <Input className="text-[18px]" placeholder="Name"/>
            </Form.Item>

            <Form.Item
                label="Job"
                name="job"
                rules={[
                  {
                    required: true,
                    message: 'Please input your job!',
                  },
                ]}
            >
              <Input className="text-[18px]" placeholder="Job"/>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                  span: 24,
                }}
            >
              <Button loading={isLoading} disabled={isLoading}
                      className="w-full mt-6 text-[18px] py-[18px] border border-indigo-600 bg-indigo-500 text-white hover:!border-indigo-600 hover:bg-indigo-500 hover:!text-indigo-600 transition duration-700 font-semibold"
                      htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </nav>
  )
}
export default Navbar
