import React from "react";
import { FaEdit, FaTrash, FaPlus, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const BookList = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="dash_heading d-flex">
        <h2>BookList</h2>
        <button className="add_new_btn" onClick={()=>navigate("/add-book")}>
          <span style={{ marginRight: "10px" }}>
            <FaPlus />
          </span>
          Add New Book
        </button>
      </div>
      <div className="bk_table table-container">
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
              <td className="d-flex td_gap">
                <span className="edit_btn">
                  <FaEdit />
                </span>
                <span className="delete_btn">
                  <FaTrash />
                </span>
                <span className="view_btn"><FaEye /></span>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Journay of Tom</td>
              <td>Tom Doe</td>
              <td>12-05-2023</td>
              <td>Yes</td>
              <td className="d-flex td_gap">
                <span className="edit_btn">
                  <FaEdit />
                </span>
                <span className="delete_btn">
                  <FaTrash />
                </span>
                <span className="view_btn"><FaEye /></span>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>My Battle</td>
              <td>matt hannery</td>
              <td>12-05-2023</td>
              <td>No</td>
              <td className="d-flex td_gap">
                <span className="edit_btn">
                  <FaEdit />
                </span>
                <span className="delete_btn">
                  <FaTrash />
                </span>
                <span className="view_btn"><FaEye /></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookList;
