import React, { useEffect, useState } from 'react'
import AdminLayout from '../../Component/layout/AdminLayout'
import Table from '../../Component/shared/Table';
import { Avatar } from '@mui/material';
import { doshbordData } from '../../Constants/sampleData';
import { transformImage } from '../../Lib/Features';


const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: "200",
  },

  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: "200",
    renderCell: (params) => (
      <Avatar alt={params.row.name} src={params.row.avatar} />
    )
  },


  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 200
  },

  {
    field: "username",
    headerName: "UserName",
    headerClassName: "table-header",
    width: 200
  },
  {
    field: "friends",
    headerName: "Friends",
    headerClassName: "table-header",
    width: 200
  },

  {
    field: "group",
    headerName: "GroupName",
    headerClassName: "table-header",
    width: 200
  },

];

const UserManagement = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(doshbordData.users.map((i) => ({ ...i, id: i._id, avatar: transformImage(i.avatar, 50) })))

  }, []);



  return (
    <AdminLayout>
      <Table headind={" All User"} columns={columns} rows={rows} />


    </AdminLayout>
  )
}

export default UserManagement