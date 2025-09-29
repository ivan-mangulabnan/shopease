import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CartContextProvider from './cart-context'
import router from './router'
import './index.css'

const query = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider>
      <CartContextProvider>
        <RouterProvider router={router}/>
      </CartContextProvider>
    </QueryClientProvider>
  </StrictMode>
)