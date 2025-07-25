/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import MainNavLink from "./MainNavLink";

export default function SideBar({
  user,
  navRef,
  isOpen,
  additionalRoutes,
  navLink,
}: {
  user: any;
  navRef: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  navLink: any;
  additionalRoutes: any;
}) {
  

  return (
    <div className="min-h-screen h-full flex">
  {/* Mobile sidebar */}
  <div
    className={cn(
      "fixed inset-y-0 left-0 z-40 w-64 md:w-56 lg:w-72 transform transition-transform duration-300 ease-in-out bg-background shadow-xl",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}
    ref={navRef}
  >
    <MainNavLink
      additionalRoutes={additionalRoutes}
      navLink={navLink}
      user={user}
    />
  </div>

  {/* Desktop sidebar */}
  <div className="hidden lg:block lg:w-72 h-full border-r border-border bg-background shadow-sm">
    <MainNavLink
      additionalRoutes={additionalRoutes}
      navLink={navLink}
      user={user}
    />
  </div>
</div>

  );
}