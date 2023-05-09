import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"

import "@/styles/globals.css"
import { Toaster } from "react-hot-toast"

const inter = Inter({
  subsets: ["latin"],
  display: "block",
  preload: true,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
        }
      `}</style>

      <ThemeProvider defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>

      <Toaster
        toastOptions={{
          className: "!rounded-none",
        }}
      />
    </>
  )
}
