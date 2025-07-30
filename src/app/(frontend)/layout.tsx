import React from 'react'
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { defaultConfig } from '@tamagui/config/v4'

// you usually export this from a tamagui.config.ts file
const config = createTamagui(defaultConfig)

type Conf = typeof config

// make imports typed
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

import './styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <TamaguiProvider config={config}>
        <body>
          <main>{children}</main>
        </body>
      </TamaguiProvider>
    </html>
  )
}
