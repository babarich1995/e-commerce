import { Link } from "react-router-dom"
import "./product.css"
import Chart from './../../components/chart/Chart';
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

function Product() {
    return (
        <div className="product"> 
           <div className="productTitleContainer">
               <h1 className="productTitle">Product</h1>
               <Link to="/newProduct">
               <button className="productAddButton">Create</button>
               </Link>
           </div>
           <div className="productTop">
<div className="productTopLeft">
<Chart data={productData} dataKey="Sales" title="Sales Performance" />
</div>
<div className="productTopRight">
<div className="productInfoTop">
    <img src="" alt="" className="productInfoTopImg" />
    <span className="productName">Samsung Ear Buds</span>
</div>
<div className="productInfoBottom">
    <div className="productInfoItem">
        <span className="productInfoKey">id:</span>
        <span className="productInfoValue">220</span>
    </div>
    <div className="productInfoItem">
        <span className="productInfoKey">sales:</span>
        <span className="productInfoValue">2200</span>
    </div>
    <div className="productInfoItem">
        <span className="productInfoKey">active:</span>
        <span className="productInfoValue">yes</span>
    </div>
    <div className="productInfoItem">
        <span className="productInfoKey">in stock:</span>
        <span className="productInfoValue">no</span>
    </div>
</div>
</div>
           </div>
           <div className="productBottom">
<form  className="productForm">
    <div className="productFormLeft">
<label >Product Name</label>
<input type="text" placeholder="Samsung Ear Buds" />
<label >In Stock</label>
<select name="inStock" id="inStock">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
<label >Active</label>
<select name="active" id="active">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
    </div>
    <div className="productFormRight">
<div className="productUpload">
    <img src="" alt="" className="productUploadImg" />
    <label For="file">
        <Publish/>
    </label>
    <input type="file" id="file" style={{display:"none"}} />
</div>
<button className="productButton">Update</button>
    </div>
</form>
           </div>
        </div>
    )
}

export default Product
