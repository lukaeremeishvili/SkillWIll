import { useUsers, useUser } from "../hooks/users";

const UsersPage = () => {
  const { data: users, isLoading: usersLoading } = useUsers();
  const { data: user, isLoading: userLoading } = useUser(1); 

  return (
    <div>
      <h1>Users</h1>
      {usersLoading ? <p>Loading users...</p> : 
        <ul>
          {users?.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      }

      <h2>User Details</h2>
      {userLoading ? <p>Loading user...</p> : <p>{user?.name} - {user?.email}</p>}
    </div>
  );
};

export default UsersPage;
