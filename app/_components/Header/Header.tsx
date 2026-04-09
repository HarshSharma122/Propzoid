"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Steps", href: "#steps" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const { isSignedIn, user } = useUser();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border   lg:px-40 px-5">
      <nav className="">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
           <span className="w-8 h-8 border rounded-md flex items-center justify-center text-white bg-[#CC7F3B]">PZ</span> <h1 className="font-semibold">PropZoid</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#CC7F3B]`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <div className="lg:flex hidden gap-2">
             
              {isSignedIn && (
                <Link className="cursor-pointer" href="/profile">
                  <Button>Profile</Button>
                </Link>
              )}
              {!isSignedIn && (
                <Link href="/auth/sign-up" className="cursor-pointer">
                  <Button>Get started</Button>
                </Link>
              )}

             <Link href="/admin" className="cursor-pointer">
                  <Button variant="outline" className="cursor-pointer">
                    Dashboard
                  </Button>
                </Link>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-10 w-10" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-500  backdrop-blur-sm z-40  lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0  bottom-0 w-full max-h-6xl max-w-2xl bg-white border-b  z-50 lg:hidden shadow-amber-100"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="font-serif text-xl">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="p-6 bg-white border-b border-black">
                <ul className="space-y-4">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-lg font-medium py-2 transition-colors `}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                  
                    {isSignedIn && (
                      <Link className="cursor-pointer" href="/profile">
                        <Button>Profile</Button>
                      </Link>
                    )}
                    {!isSignedIn && (
                      <Link href="/auth/sign-up" className="cursor-pointer">
                        <Button>Get started</Button>
                      </Link>
                    )}

                      <Link href="/admin" className="cursor-pointer">
                        <Button variant="outline" className="cursor-pointer">
                          Dashboard
                        </Button>
                      </Link>
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
