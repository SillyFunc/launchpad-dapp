import { bscTestnet } from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

import { env } from '../env/client'

export const config = getDefaultConfig({
  appName: env.VITE_WALLET_APP_NAME,
  projectId: env.VITE_WALLET_PROJECT_ID,
  chains: [bscTestnet],
  ssr: false,
})
