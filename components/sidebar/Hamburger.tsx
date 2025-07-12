import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import img from "@/assets/images/userDashboard/dummyImage.png";
import { Dispatch, SetStateAction } from "react";

export default function Hamburger({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header className="flex items-center justify-between  relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden bg-primary text-primary-foreground p-3 rounded-br-xl shadow-md hover:bg-primary-hover transition"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </button>
    </header>
  );
}
