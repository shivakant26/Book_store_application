import { FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="dash_heading d-flex">
        <h2>User List</h2>
      </div>
      <div className="bk_table table-container">
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
              <td className="d-flex td_gap">
                <span className="edit_btn">
                  <FaEdit />
                </span>
                <span className="delete_btn">
                  <FaTrash />
                </span>
                <span className="view_btn">
                  <FaEye />
                </span>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Umesh Henary</td>
              <td>uk@gmail.com</td>
              <td>3332221111</td>
              <td>InActive</td>
              <td className="d-flex td_gap">
                <span className="edit_btn">
                  <FaEdit />
                </span>
                <span className="delete_btn">
                  <FaTrash />
                </span>
                <span className="view_btn">
                  <FaEye />
                </span>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Monu singh</td>
              <td>sing@gmail.com</td>
              <td>858585858</td>
              <td>Active</td>
              <td className="d-flex td_gap">
                <span className="edit_btn">
                  <FaEdit />
                </span>
                <span className="delete_btn">
                  <FaTrash />
                </span>
                <span className="view_btn">
                  <FaEye />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
