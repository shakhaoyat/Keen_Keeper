import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './route/Routes'
import { ToastContainer } from 'react-toastify'
import FriendProvider from './Component/context/FriendContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </FriendProvider>
  </StrictMode>,
)
