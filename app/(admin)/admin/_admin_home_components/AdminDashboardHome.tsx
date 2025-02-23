import { StatsCards } from "./StatsCards";
import { RecentEnrollments } from "./RecentEnrollments";
import { EnrollmentChart } from "../users/_admin_users_components/EnrollmentChart";

export default function AdminDashboardHome() {

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your dashboard</p>
      </div>

      <StatsCards />

      <EnrollmentChart/>

      <RecentEnrollments />
    </div>
  );
}