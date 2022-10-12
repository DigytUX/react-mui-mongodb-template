import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {AddGuest} from './pages/AddGuest'
import {GuestProfile} from './pages/GuestProfile'
import reportWebVitals from './reportWebVitals'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

// Name the route and add 
// your component, that easy
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/add-guest',
    element: <AddGuest />,
  },
  {
    path: '/guest/:id',
    element: <GuestProfile />,
  },
  /* {
  //   path: '/your-route',
  //   element: <YourComponent />,
  },*/
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals()
