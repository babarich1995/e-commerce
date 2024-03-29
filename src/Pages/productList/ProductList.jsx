import "./productList.css"
import {DataGrid} from "@material-ui/data-grid"
import {DeleteOutline} from "@material-ui/icons"
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductList() {
    const [data,setData]=useState(productRows);
    const handleDelete=(id)=>{
      setData(data.filter((item)=>item.id !== id))
    }
  const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'product', headerName: 'Product', width: 200 , renderCell:(params)=>{
          return (
  <div className="productListItem">
              <img class="productListImg" src={params.row.img} alt=""/>
              {params.row.name}
  
          </div>
          )
          
      }
  
      },
      { field: 'stock', headerName: 'Stock', width: 200 },
      {
        field: 'status',
        headerName: 'Status',
        width: 160,
      },
      {
        field: 'price',
        headerName: 'Price',
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
          <Link to={"/product/"+params.row.id}><button className="productListEdit">Edit</button>
          </Link>
          
          <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
  
          </>
      )
  }
      },
    ];
    return (
        <div className="productList">
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

export default ProductList
