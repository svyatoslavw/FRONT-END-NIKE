'use client'
import Header from '@/components/header/Header'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { Metadata } from 'next'
import { Mukta } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import './globals.css'
import AuthProvider from './providers/auth-provider/AuthProvider'
import { persistor, store } from './store/store'

const inter = Mukta({ subsets: ['latin'], weight: ['400', '200', '300', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  const pathname = usePathname()

  const theme = extendTheme({
    fonts: {
      body: inter,
    },
  })

  return (
    <html lang="ru">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
              <AuthProvider>
                <ChakraProvider theme={theme}>
                  {!pathname.includes('admin') && <Header />}
                  <div className="mx-8">{children}</div>
                </ChakraProvider>
              </AuthProvider>
            </PersistGate>
          </Provider>
        </QueryClientProvider>
        <div id="modal"></div>
      </body>
    </html>
  )
}
