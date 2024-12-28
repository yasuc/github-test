import React, { useState, useMemo } from 'react';

interface Admin {
  id: number;
  name: string;
  role: string;
}

const AdminManagement: React.FC = () => {
  const initialAdmins = useMemo(() => [
    { id: 1, name: 'Alice Johnson', role: 'Super Admin' },
    { id: 2, name: 'Bob Brown', role: 'Admin' },
  ], []);

  const [admins] = useState<Admin[]>(initialAdmins);

  return (
    <div>
      <h1>管理者管理</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>氏名</th>
            <th>役割</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin: Admin) => (
            <tr key={admin.id}>
              <td>{admin.id}</td>
              <td>{admin.name}</td>
              <td>{admin.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManagement;
