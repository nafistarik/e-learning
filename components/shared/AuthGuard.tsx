"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { selectUser } from "@/redux/slice/userSlice";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const AuthGuard = ({
  children,
  role,
}: {
  children: React.ReactNode;
  role: "user" | "admin";
}) => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      role === "user" &&
      (!user?.user || user?.user?.email === "abc@admin.com")
    ) {
      router.replace("/");
    } else if (role === "admin" && user?.user?.email !== "abc@admin.com") {
      router.replace("/");
    } else {
      setLoading(false);
    }
  }, [user, role, router]);

  if (loading) return <Loader />;

  return <>{children}</>;
};

export default AuthGuard;
