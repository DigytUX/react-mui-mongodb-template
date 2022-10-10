import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {AddGuest} from './pages/AddGuest'
import reportWebVitals from './reportWebVitals'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/add-guest',
    element: <AddGuest />,
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals()
