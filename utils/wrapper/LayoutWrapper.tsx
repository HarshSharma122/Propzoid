"use client"
import Footer from "@/app/_components/Footer/Footer";
import { Header } from "@/app/_components/Header/Header";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const LayoutWrapper = ({ children }:{children: ReactNode}) => {
  const pathName = usePathname();
  const hideNavbar = pathName.startsWith("/dashboard");
  return (
    <div>
      {!hideNavbar && <Header />}
      <main>{children}</main>
      {!hideNavbar && <Footer />}
    </div>
  );
};

export default LayoutWrapper;
