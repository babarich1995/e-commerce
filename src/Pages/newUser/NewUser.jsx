import "./newUser.css"

function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form  className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text"  placeholder="Richard" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text"  placeholder="Richard Paul" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email"  placeholder="richard@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password"  placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text"  placeholder="+255753 500 500" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text"  placeholder="Arusha | Tanzania" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                      <input type="radio"  name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio"  name="gender" id="female" value="female" />
                    <label for="female">Female</label>  
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" className="newUserSelect" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
               
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
