import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  return (
    <div>
      <h1>ユーザ管理画面</h1>
      <h2>>{users.length} 件のユーザが登録されています。</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>氏名</th>
            <th>年齢</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
