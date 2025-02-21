import React from "react";
import DashboardLayout from "./_dashboard/DashboardLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default layout;