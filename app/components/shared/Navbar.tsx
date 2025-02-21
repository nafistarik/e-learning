"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-lg py-2">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          E-Learning
        </Link>

        {/* Navigation - Centered on Larger Screens */}
        <div className="hidden lg:flex gap-8 mx-auto">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-gray-800",
                pathname === item.href ? "text-black font-semibold" : "text-gray-600"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Icons & Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center gap-1">
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5 text-black" />
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 text-black" />
              </Button>
            </Link>
          </div>

          <Link href="/admin">
            <Button variant="default">Dashboard</Button>
          </Link>
          <Link href="/login">
            <Button variant="default">Sign In</Button>
          </Link>

          <button
            className="lg:hidden p-1 text-black rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Sidebar - Mobile Navigation */}
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
                className="absolute top-4 right-4 text-black"
              >
                <X size={28} />
              </button>

              {/* Sidebar Navigation */}
              <div className="flex flex-col space-y-6 text-lg text-black text-center mt-12">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
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
