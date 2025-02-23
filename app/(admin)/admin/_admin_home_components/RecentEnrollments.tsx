import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentEnrollments = [
  {
    studentName: "John Doe",
    courseName: "Web Development with Python",
    date: "2024-02-21",
  },
  {
    studentName: "Jane Smith",
    courseName: "React.js Fundamentals",
    date: "2024-02-20",
  },
];

export function RecentEnrollments() {
  return (
    <Card>
      <div className="px-6 pt-6">
        <h2 className="text-xl font-semibold">Recent Enrollments</h2>
      </div>
      <div className="p-6">
        {" "}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentEnrollments.map((enrollment, index) => (
              <TableRow key={index}>
                <TableCell>{enrollment.studentName}</TableCell>
                <TableCell>{enrollment.courseName}</TableCell>
                <TableCell>{enrollment.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
