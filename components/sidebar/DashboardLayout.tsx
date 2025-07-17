"use client";

import React, { useEffect, useRef, useState } from "react";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import userImage from "@/app/assets/images/home/profile.png";
import Hamburger from "./Hamburger";
import SideBar from "./SideBar";
import { LucideNotepadText, User } from "lucide-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);

  useEffect(() => {
    if (typeof document === "undefined") return; // Prevents server-side execution

    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const navLink = [
    { name: "Dashboard", href: "/admin", icon: MdOutlineDashboard },
    { name: "Courses", href: "/admin/courses", icon: LucideNotepadText },
    { name: "Users", href: "/admin/users", icon: User },
  ];

  const additionalRoutes = [
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: IoSettingsSharp,
    },
    { name: " Help", href: "/dashboard/help", icon: RiCustomerServiceFill },
  ];

  const user = {
    name: "John Doe",
    role: "admin",
    img: userImage,
    email: "q4A0Q@example.com",
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <div className="sticky top-0 h-screen z-50 bg-background">
        <SideBar
          additionalRoutes={additionalRoutes}
          navLink={navLink}
          isOpen={isOpen}
          user={user}
          navRef={navRef}
        />
      </div>

      <div className="w-full flex flex-col">
        {/* Topbar */}
        <div className="sticky top-0 z-40">
          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>

        {/* Main content */}
        <main className="flex-1 p-6 md:p-8 lg:p-12">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
