import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "block",
  preload: true,
});

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
