import React from "react";
import DashboardLayout from "../../../components/sidebar/DashboardLayout";
import AuthGuard from "@/components/shared/AuthGuard";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthGuard role="admin">
        <DashboardLayout>{children}</DashboardLayout>
      </AuthGuard>
    </>
  );
};

export default layout;
