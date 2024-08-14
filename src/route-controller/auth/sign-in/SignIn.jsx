import {Button, Form, Input, message, Typography} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useSignInMutation} from "../../../redux/api/auth-api.jsx";

const {Text, Title} = Typography;

const SignIn = () => {
  const navigate = useNavigate();
  const [signIn, {data, isSuccess, isLoading}] = useSignInMutation()

  const onFinish = (values) => {
    signIn(values)
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Login successfully!")
      navigate('/');
    }
  }, [isSuccess]);

  return (
      <div className="bg-white shadow-2xl p-10 text-center rounded-2xl">
        <Title onClick={() => navigate("/")} className="pb-4 !text-indigo-600 cursor-pointer">Sign In</Title>
        <Form
            className='w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px]'
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
              label="Email"
              name="email"
              initialValue="eve.holt@reqres.in"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
          >
            <Input className="text-[18px]" placeholder="Email"/>
          </Form.Item>

          <Form.Item
              label="Password"
              name="password"
              initialValue="pistol"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
          >
            <Input.Password className="text-[18px]" placeholder="Password"/>
          </Form.Item>

          <Form.Item
              wrapperCol={{
                span: 24,
              }}
          >
            <Button loading={isLoading} disabled={isLoading}
                    className="w-full mt-6 text-[18px] py-[18px] border border-indigo-600 bg-indigo-500 text-white hover:!border-indigo-600 hover:bg-indigo-500 hover:!text-indigo-600 transition duration-700 font-semibold"
                    htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <Text>Already have an account? <Link className="!text-indigo-600" to="/auth-form">Sign Up</Link></Text>
      </div>
  )
}
export default SignIn
