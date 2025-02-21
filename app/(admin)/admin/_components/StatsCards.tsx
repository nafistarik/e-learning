import { Card } from "@/components/ui/card"
import { courses } from "@/lib/data/courses"
import { users } from "@/lib/data/users"
import { Book, DollarSign, Users } from "lucide-react"


const stats = [
  {
    name: "Total Courses",
    value: courses.length,
    icon: Book,
  },
  {
    name: "Total Users",
    value: users.length,
    icon: Users,
  },
  {
    name: "Total Revenue",
    value: `$${courses.reduce((acc, course) => acc + course.price, 0)}`,
    icon: DollarSign,
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center gap-4">
            <stat.icon className="h-8 w-8" />
            <div>
              <p className="text-sm text-muted-foreground">{stat.name}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

