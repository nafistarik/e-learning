export interface User {
    id: string
    name: string
    email: string
    image: string
    enrolledCourses: number[]
    favorites: number[]
  }
  
  export const users: User[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      image: "/placeholder.svg",
      enrolledCourses: [1, 2],
      favorites: [3, 4],
    },
    // Add more users...
  ]
  
  