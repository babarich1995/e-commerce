import './userList.css'
import {DataGrid} from "@material-ui/data-grid"
import {DeleteOutline} from "@material-ui/icons"
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
  

 
function UserList() {
  const [data,setData]=useState(userRows);
  const handleDelete=(id)=>{
    setData(data.filter((item)=>item.id !== id))
  }
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'Username', width: 200 , renderCell:(params)=>{
        return (
<div className="userListUser">
            <img class="userListImg" src={params.row.avatar} alt=""/>
            {params.row.username}

        </div>
        )
        
    }

    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
    },
    {
      field: 'transaction',
      headerName: 'Transactions Amount',
      description: 'Total amount of transactions made by the user.',
      sortable: false,
      width: 180,
     
    },
    {
field:'action',
headerName:"action",
width:'150',
renderCell:(params)=>{
    return(
        <>
        <Link to={"/user/"+params.row.id}><button className="userListEdit">Edit</button>
        </Link>
        
        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>

        </>
    )
}
    },
  ];
  
    return (
        <div className="userList">
            <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}

export default UserList
