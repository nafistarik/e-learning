"use client";

import { removeUser } from "@/redux/slice/userSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import logo from "@/app/assets/images/shared/logo.png";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
export default function MainNavLink({
  navLink,
}: {
  user: { image?: string; name?: string; role?: string } | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navLink: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  additionalRoutes: any;
}) {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isActive = (href: any) => {
    const cleanHref = href.split("?")[0];
    const cleanPathname = pathname.split("?")[0];

    if (cleanHref === "/admin") {
      return cleanPathname === "/admin";
    }

    return cleanPathname.startsWith(cleanHref);
  };
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(removeUser());
    toast.success("User logout successfully");
    setTimeout(() => {
      router.push("/login");
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen py-6 bg-secondary relative">
      <Link href="/" id="image" className="p-6 flex items-center justify-start">
        <Image
          src={logo}
          width={1000}
          height={1000}
          alt="logo"
          priority
          className="object-contain h-16 w-auto"
        />
      </Link>

      <nav className="flex-1 overflow-y-auto px-4 space-y-2">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {navLink?.map((link: any) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition",
              isActive(link.href)
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted hover:text-foreground text-muted-foreground"
            )}
          >
            <link.icon className="w-5 h-5" />
            <span className="text-base font-medium">{link.name}</span>
          </Link>
        ))}
      </nav>

      <div className="px-4 w-full pb-8">
        <Button
          variant="destructive"
          className="w-full h-12 rounded-lg"
          onClick={handleLogout}
        >
          <IoLogOutOutline className="!w-6 !h-6" />
          <span className="text-lg font-medium">Log Out</span>
        </Button>
      </div>
    </div>
  );
}
