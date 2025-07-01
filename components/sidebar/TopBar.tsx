import { Bell, Menu, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function TopBar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header className="flex items-center justify-between border-b bg-white px-4 py-4">
      <button className="lg:hidden " onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 " />}
        <span className="sr-only">Toggle menu</span>
      </button>
      <div>
        <h1 className="text-xl font-semibold">Hi Maria 👋</h1>
        <p className="text-sm text-gray-500">
          Let`&apos;s learn something new today!
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="flex justify-between items-center gap-32">
            <div className="font-medium">User Name</div>
            <div className="text-sm text-gray-500">User Role</div>
          </div>
        </div>
      </div>
    </header>
  );
}
