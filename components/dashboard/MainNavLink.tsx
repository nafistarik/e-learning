"use client";

import { removeUser } from "@/redux/slice/userSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoLogOut } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import logo from "@/app/assets/images/shared/Logo_Final.png";
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

    router.push("/login");
    toast.success("User logout successfully");
  };

  return (
    <div className="flex flex-col min-h-screen py-6 bg-customOrange relative bg-gray-100">
      <Link href="/" id="image" className="rounded-full flex gap-2 p-8 py-2">
        <Image
          src={logo}
          width={1000}
          height={1000}
          className="w-auto h-[72px]"
          alt="logo"
        />
      </Link>
      <nav className="flex-1 p-4">
        <div className="space-y-3 px-4">
          {navLink?.map(
            (link: {
              name: string;
              href: string;
              icon: React.ComponentType<{ className?: string }>;
            }) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 font-normal text-base rounded-xl ${
                  isActive(link.href)
                    ? "bg-black text-white"
                    : "hover:bg-[#8B4C84]/10 text-whiteDarker"
                }`}
              >
                <div className="rounded">
                  <link.icon className="min-w-6 min-h-6" />
                </div>
                {link.name}
              </Link>
            )
          )}
        </div>
      </nav>
      <div className="mt-auto px-12 py-8 space-y-1">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-3 rounded-md cursor-pointer text-whiteDarker bg-whiteDarker/10 w-full font-medium text-base"
        >
          <IoLogOut className="min-w-8 min-h-8" />
          Log Out
        </button>
      </div>
    </div>
  );
}
