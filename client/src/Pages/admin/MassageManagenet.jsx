import React, { useEffect, useState } from 'react';
import AdminLayout from '../../Component/layout/AdminLayout';
import Table from '../../Component/shared/Table';
import { doshbordData } from '../../Constants/sampleData';
import { Avatar, Stack } from '@mui/material';
import { transformImage } from '../../Lib/Features';
import moment from 'moment';

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "attachments",
    headerName: "Attachments",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => (
      <Avatar alt={params.row.name} src={params.row.avatar} />
    )
  },
  {
    field: "content",
    headerName: "Content",
    headerClassName: "table-header",
    width: 400
  },
  {
    field: "sender",
    headerName: "Sent By",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => (
      <Stack direction="row" alignItems="center" spacing={1}>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
        <span>{params.row.sender.name}</span>
      </Stack>
    ),
  },



  {
    field: "chat",
    headerName: "Chat",
    headerClassName: "table-header",
    width: 220,
  },
  {
    field: "groupchats",
    headerName: "Group Chat",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Time",
    headerClassName: "table-header",
    width: 250,
  },
];

const MessageManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(doshbordData.massages.map((i) => ({
      ...i,
      id: i._id,
      sender: {
        name: i.sender.name,
        avatar: transformImage(i.sender.avatar, 50),
      },
      createdAt: moment(i.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
    })));
  }, []);

  return (
    <AdminLayout>
      <Table headind="All Messages" columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default MessageManagement;