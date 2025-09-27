import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import CartContextProvider from './cart-context'
import router from './router'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
      <RouterProvider router={router}/>
    </CartContextProvider>
  </StrictMode>
)