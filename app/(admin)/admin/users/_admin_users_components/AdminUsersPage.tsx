import { UserList } from "./UserList";


export default function AdminUsersPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold">Users</h1>
        <p className="text-muted-foreground">Manage your platform users</p>
      </div>
      <UserList />
    </div>
  )
}

