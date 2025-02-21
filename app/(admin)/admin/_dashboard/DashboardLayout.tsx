"use client";

import React, { useEffect, useRef, useState } from "react";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import image from "@/app/assets/images/home/course3.jpg";
import Hamburger from "./Hamburger";
import SideBar from "./SideBar";
import { LucideNotepadText, User } from "lucide-react";

// import TopBar from "../navigationBar/TopBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);

  useEffect(() => {
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
    img: image,
    email: "q4A0Q@example.com",
  };

  return (
    <div className="flex ">
      <div className="max-h-screen h-full sticky top-0 z-50">
        <SideBar
          additionalRoutes={additionalRoutes}
          navLink={navLink}
          isOpen={isOpen}
          user={user}
          navRef={navRef}
        />
      </div>
      <div className="w-full">
        {/* <div className="sticky top-[3px] z-40">
          <TopBar setIsOpen={setIsOpen} isOpen={isOpen} />
        </div> */}
        <div className="sticky top-[3px] z-40">
          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <div className="min-h-screen p-12">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;