const BookList = () =>{
    return(
        <>
        <h2>BookList</h2>
        <div className="bk_table">
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Publish Date</th>
                        <th>Avaibility</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>My Battle</td>
                        <td>matt hannery</td>
                        <td>12-05-2023</td>
                        <td>Yes</td>
                        <td><button>Edit</button>
                        <button>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Journay of Tom</td>
                        <td>Tom Doe</td>
                        <td>12-05-2023</td>
                        <td>Yes</td>
                        <td><button>Edit</button>
                        <button>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>My Battle</td>
                        <td>matt hannery</td>
                        <td>12-05-2023</td>
                        <td>No</td>
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

export default BookList;