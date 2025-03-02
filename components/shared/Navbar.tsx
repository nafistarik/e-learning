"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  Home,
  BookOpen,
  Info,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/slice/userSlice";
import Image from "next/image";
import logo from "@/app/assets/images/shared/Logo_Final.png";

const navigation = [
  { name: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
  { name: "About Us", href: "/about", icon: <Info className="h-5 w-5" /> },
  { name: "Courses", href: "/courses", icon: <BookOpen className="h-5 w-5" /> },
  { name: "Contact", href: "/contact", icon: <Phone className="h-5 w-5" /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectUser);

  return (
    <nav className="fixed top-0 z-50 w-full   ">
      <div className="container flex h-24 items-center justify-between bg-white/20 backdrop-blur-md  shadow-md ">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            width={1000}
            height={1000}
            className="w-auto h-16 sm:h-20 "
            alt="logo"
          />
        </Link>

        {/* Navigation - Desktop */}
        <div className="hidden lg:flex gap-8 mx-auto ">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 transition-all duration-300 px-4 py-[6px] rounded-lg relative",
                pathname === item.href
                  ? "text-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[1px] after:w-3/4 after:h-[2px] after:bg-black after:rounded-full"
                  : "text-gray-600 hover:text-black hover:bg-white"
              )}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </div>

        {/* User Controls */}
        <div className="flex items-center gap-4">
          {user?.user?.email === "abc@admin.com" ? (
            <Link href="/admin">
              <Button className="text-black bg-white/20 backdrop-blur-lg hover:bg-white/30 hover:scale-101 hover:-translate-y-[2px] hover:shadow-xl p-3 rounded-md border-2 border-gray-300/50 hover:border-gray-400/50 shadow-lg transition-all duration-500 ease-in-out">
                Dashboard
              </Button>
            </Link>
          ) : user?.user ? (
            <div className="flex items-center justify-center gap-3">
              <Link href="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative bg-gray-100 hover:bg-white p-3 rounded-md border-2 border-gray-200 shadow-md transition-all duration-300 ease-in-out"
                >
                  <ShoppingCart className="h-5 w-5 text-black" />
                </Button>
              </Link>
              <Link href="/profile">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative bg-gray-100 hover:bg-white p-3 rounded-md border-2 border-gray-200 shadow-md transition-all duration-300 ease-in-out"
                >
                  <User className="h-5 w-5 text-black" />
                </Button>
              </Link>
            </div>
          ) : (
            <Link href="/login">
              <Button className="text-black bg-white/20 backdrop-blur-lg hover:bg-white/30 hover:scale-101 hover:-translate-y-[2px] hover:shadow-xl p-3 px-4 rounded-md border-2 border-gray-300/50 hover:border-gray-400/50 shadow-lg transition-all duration-500 ease-in-out">
                Sign In
              </Button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black rounded focus:outline-none hover:bg-gray-100 transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="bg-white w-64 h-full shadow-lg p-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-black hover:text-gray-600"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col space-y-6 text-lg text-black text-center mt-12">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-center gap-2 py-3 rounded-lg hover:bg-gray-100 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon} {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
