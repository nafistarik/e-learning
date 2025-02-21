"use client"; 

import { usePathname } from "next/navigation"; // For getting the current path
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ConditionalMarkupProps {
  children: React.ReactNode;
}

const ConditionalMarkup = ({ children }: ConditionalMarkupProps) => {
  const pathname = usePathname(); 
  
  const isSupplierPage = pathname?.startsWith("/login") || pathname?.startsWith("/signup") || pathname?.startsWith("/admin") ;

  return (
    <>
      {!isSupplierPage && <Navbar /> }
      {children}
      {!isSupplierPage && <Footer /> }
    </>
  );
};

export default ConditionalMarkup;