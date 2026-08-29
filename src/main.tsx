import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Web3Provider } from './providers/web3-provider.tsx'
import { RouterProvider } from 'react-router'

import router from './router'
import './index.css'
import '@rainbow-me/rainbowkit/styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Web3Provider>
      <RouterProvider router={router} />
    </Web3Provider>
  </StrictMode>,
)
