import { bsc, bscTestnet } from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

import { env } from '../env/client'

export const config = getDefaultConfig({
  appName: env.VITE_APP_WALLET_APP_NAME,
  projectId: env.VITE_APP_WALLET_PROJECT_ID,
  chains: [bscTestnet, bsc],
  ssr: false,
})
