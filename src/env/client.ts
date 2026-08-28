import z from 'zod'
import { createEnv } from '@t3-oss/env-core'

export const env = createEnv({
  clientPrefix: 'VITE_',
  server: {},
  client: {
    VITE_WALLET_APP_NAME: z.string(),
    VITE_WALLET_PROJECT_ID: z.string(),
  },
  runtimeEnv: import.meta.env,
})
