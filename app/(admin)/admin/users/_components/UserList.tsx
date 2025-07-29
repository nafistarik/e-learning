"use client";

import Loader from "@/components/shared/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { extractDate } from "@/lib/utils";
import { useGetAllUsersQuery } from "@/redux/api/userApi";
import { User } from "@/types/user-types";
import { motion } from "framer-motion";

export function UserList() {
  const { data, isLoading, isError } = useGetAllUsersQuery({});

  if (isLoading) return <Loader />;
  if (isError) return <p>Error fetching user data!</p>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border bg-card text-card p-4"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Registered on</TableHead>
            <TableHead className="text-right">Enrolled Courses</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((user: User) => (
            <TableRow
              key={user.id}
              className="transition-all duration-300 hover:bg-muted"
            >
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{extractDate(user.createdAt)}</TableCell>
              <TableCell className="text-right">
                {user.enrolledCourses.length}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}
