import { CalendarToday, LocationSearching, PermIdentity, PhoneAndroid ,MailOutline, Publish} from "@material-ui/icons"
import { Link } from "react-router-dom"
import "./user.css"

function User() {
    return (
        <div className="user">
           <div className="userTitleContainer">
               <h1 className="userTitle">Edit User</h1>
               <Link to="/newUser/"><button className="userAddButton">Create</button>
               </Link>
               
               </div> 

               <div className="userContainer">
                   <div className="userShow">
                       <div className="userShowTop">
                           <img src="" alt="" className="userShowImg" />
                           <div className="userShowTopTitle">
                               <span className="userShowUsername">Anna Borris</span>
                               <span className="userShowUserTitle">Software Engineer</span>
                           </div>
                       </div>
                       <div className="userShowBottom">
                           <span className="userShowTitle">Account Details</span>
                           <div className="userShowInfo">
                               <PermIdentity className="userShowIcon" />
                               <span className="userShowInfoTitle">nowme6570</span>
                           </div>
                           <div className="userShowInfo">
                               <CalendarToday className="userShowIcon" />
                               <span className="userShowInfoTitle">10-11-1995</span>
                           </div>
                           <span className="userShowTitle">Contact Details</span>
                           <div className="userShowInfo">
                               <PhoneAndroid className="userShowIcon" />
                               <span className="userShowInfoTitle">+255 753 500 500</span>
                           </div>
                           <div className="userShowInfo">
                               <MailOutline className="userShowIcon" />
                               <span className="userShowInfoTitle">cuppie@gmail.com</span>
                           </div>
                           <div className="userShowInfo">
                               <LocationSearching className="userShowIcon" />
                               <span className="userShowInfoTitle">Arusha | Tanzania</span>
                           </div>
                       </div>
                   </div>
                   <div className="userUpdate">
                       <span className="userUpdateTitle">Edit</span>
                       <form className="userUpdateForm">
                           <div className="userUpdateLeft">
                               <div className="userUpdateItem">
                                   <label >Username</label>
                                   <input type="text" 
                                    placeholder="nowme6570"
                                     className="userUpdateInput" />
                               </div>
                               <div className="userUpdateItem">
                                   <label >Full Name</label>
                                   <input type="text" 
                                    placeholder="Anna Borris"
                                     className="userUpdateInput" />
                               </div>
                               <div className="userUpdateItem">
                                   <label >Email</label>
                                   <input type="text" 
                                    placeholder="cuppie@gmail.com"
                                     className="userUpdateInput" />
                               </div>
                               <div className="userUpdateItem">
                                   <label >Phone</label>
                                   <input type="text" 
                                    placeholder="+255 753 500 500"
                                     className="userUpdateInput" />
                               </div>
                               <div className="userUpdateItem">
                                   <label >Address</label>
                                   <input type="text" 
                                    placeholder="Arusha | Tanzania"
                                     className="userUpdateInput" />
                               </div>


                           </div>
                           <div className="userUpdateRight">
                               <div className="userUpdateUpload">
                                   <img src="" alt="" className="userUpdateImg" />
                                   <label htmlFor="file">
                                       <Publish className="userUpdateIcon"/>
                                   </label>
                                   <input type="file" id="file" style={{display:"none"}}/>
                               </div>
                               <button className="userUpdateButton">Update</button>
                               </div>
                       </form>
                   </div>
               </div>
        </div>
    )
}

export default User
