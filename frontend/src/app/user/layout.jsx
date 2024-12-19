"use client"
import localFont from "next/font/local";
// import "./globals.css";
import Navbar from "./navbar";

import { Toaster,ToastBar} from "react-hot-toast";
import { AppProvider } from "@/contex/appContex";




// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        <AppProvider>
        <Navbar />
        <Toaster>
          {(t) => (
            <ToastBar
              toast={t}
              style={{
                ...t.style,
                animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
              }}
            />
          )}
        </Toaster>
        {children}
        {/* <Footer /> */}
        </AppProvider>
      </body>
    </html>
  );
}
