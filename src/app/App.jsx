import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from '../screens/landing/landing/'
import Layout from './LayOut/index'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          {' '}<Landing />{' '}
        </Layout>
      )
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
