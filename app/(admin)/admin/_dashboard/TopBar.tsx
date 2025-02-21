import { Bell, Menu, X } from "lucide-react";
// import Image from "next/image";
// import img from "@/assets/images/userDashboard/dummyImage.png";
import { Dispatch, SetStateAction } from "react";

export default function TopBar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    // <header className="border-b-2 ">
    //   <div className="flex items-center justify-between lg:justify-end  px-6 py-3 w-full">
    //     <button className="lg:hidden " onClick={() => setIsOpen(!isOpen)}>
    //       {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    //       <span className="sr-only">Toggle menu</span>
    //     </button>

    //     <div className="flex w-full justify-end items-center">
    //       <div className="flex items-center gap-4">
    //         <div className="flex items-center justify-center sm:text-lg sm:px-4 px-3 py-1 sm:py-2 gap-2">
    //           <Image
    //             className="w-10 h-10 rounded-full"
    //             src={img}
    //             alt="User Avatar"
    //           />
    //           <div className="flex flex-col">
    //             <h3 className="text-base font-medium">firstNamelastName</h3>
    //             <p className="text-xs text-light font-normal">role</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
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
            {/* <div className="font-medium">{userProfile.username}</div>
                <div className="text-sm text-gray-500">{userProfile.userRole}</div> */}
            <div className="font-medium">User Name</div>
            <div className="text-sm text-gray-500">User Role</div>
          </div>
          {/* <Avatar className="h-10 w-10">
                <AvatarImage src={userProfile.userImage} />
                <AvatarFallback>MM</AvatarFallback>
              </Avatar> */}
        </div>
      </div>
    </header>
  );
}