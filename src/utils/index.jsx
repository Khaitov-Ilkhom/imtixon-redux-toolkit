import {Flex, Spin} from 'antd';
import {Suspense} from "react";

const Loading = () => {
  return (
      <div className="w-full h-screen flex justify-center items-center">
        <Flex align="center" gap="middle">
          <Spin tip="Loading..." size="large" />
        </Flex>
      </div>
  )
}

const SuspenseElement = ({children}) => {
  return (
      <Suspense fallback={<Loading/>}>
        {children}
      </Suspense>
  )
}

const Container = ({children}) => {
  return (
      <div className='main-container'>
        {children}
      </div>
  )
}


export {Loading, SuspenseElement, Container}