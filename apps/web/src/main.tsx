import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App'
import Launch from './routes/launch'
import Signup from './routes/signup'
import ErrorPage from './routes/error'
import Forgot from './routes/forgotpassword'

const rootElement = document.getElementById('root')

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'launch',
    element: <Launch />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'signup',
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'forgot-password',
    element: <Forgot />,
    errorElement: <ErrorPage />
  }
])

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
  )
} else {
  console.error('Root element with id "root" not found')
}
