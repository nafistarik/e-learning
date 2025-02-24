"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { users } from "@/lib/data/users"

import { motion } from "framer-motion";

export function UserList() {
  return (
            <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border shadow-md bg-white p-4"
      >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Enrolled Courses</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}
            className="transition-all duration-300 hover:bg-gray-100"
            >
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-right">{user.enrolledCourses.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </motion.div>
  )
}

