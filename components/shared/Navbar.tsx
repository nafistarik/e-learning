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
import logo from "@/app/assets/images/shared/logo.png";

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
    <nav className="fixed top-0 z-50 w-full">
      <div className="bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              width={1000}
              height={1000}
              className="h-10 w-auto sm:h-12"
              alt="logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 text-sm px-4 py-2 rounded-md transition-all duration-300",
                  pathname === item.href
                    ? "text-primary font-semibold bg-muted"
                    : "text-muted-foreground hover:text-primary hover:bg-muted/60"
                )}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Buttons + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {user?.user?.email === "abc@admin.com" ? (
              <Link href="/admin">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm border border-border">
                  Dashboard
                </Button>
              </Link>
            ) : user?.user ? (
              <div className="flex items-center gap-2">
                <Link href="/cart">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-muted hover:bg-accent border border-border"
                  >
                    <ShoppingCart className="h-5 w-5 text-foreground" />
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-muted hover:bg-accent border border-border"
                  >
                    <User className="h-5 w-5 text-foreground" />
                  </Button>
                </Link>
              </div>
            ) : (
              <Link href="/login">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm border border-border">
                  Sign In
                </Button>
              </Link>
            )}

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
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
            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm flex justify-end"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="bg-background w-72 h-full shadow-xl p-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-foreground hover:text-primary"
              >
                <X size={28} />
              </button>

              <div className="mt-16 space-y-6 text-center">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-base py-3 px-4 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/70 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {item.icon}
                      {item.name}
                    </div>
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
