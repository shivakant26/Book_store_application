const UserList = () =>{
    return(
        <>
        <h2>UserList</h2>
        <div className="bk_table">
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Jhon Doe</td>
                        <td>jhon@gmail.com</td>
                        <td>1112223331</td>
                        <td>Active</td>
                        <td><button>Edit</button>
                        <button>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Umesh Henary</td>
                        <td>uk@gmail.com</td>
                        <td>3332221111</td>
                        <td>InActive</td>
                        <td><button>Edit</button>
                        <button>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Monu singh</td>
                        <td>sing@gmail.com</td>
                        <td>858585858</td>
                        <td>Active</td>
                        <td><button>Edit</button>
                        <button>delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default UserList;