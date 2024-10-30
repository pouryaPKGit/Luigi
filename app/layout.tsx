"use client"; // این خط را در اینجا نگه دارید اگر نیاز به کامپوننت کلاینت دارید

import "./globals.css";
import Navbar from "@/Components/Navbar";
import MainFooter from "../Components/MainFooter";
import { UserProvider } from '../Context/Context'; 
import ScrollToTopButton from "../Components/ScrollToTopButton"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body dir="rtl" >
        <UserProvider> 
          <Navbar />
          {children}
          <ScrollToTopButton/>
          <MainFooter />
        </UserProvider>
      </body>
    </html>
  );
}
