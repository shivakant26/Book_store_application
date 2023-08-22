import { AiFillProfile } from "react-icons/ai";
import { BiLogOut, BiSolidUser } from "react-icons/bi";
import { BsBookHalf, BsJournalBookmarkFill } from "react-icons/bs";
import { SiDash } from "react-icons/si";
import { Link } from "react-router-dom";

const SideBar = () =>{
    return(
        <>
        <div className="sidebar">
            <div className="sidebar_content">
              <div className="user_details">
                <img
                  src={require("../../assets/images/profile.jpg")}
                  alt="user_image"
                />
                <p>jhondoe@gmail.com</p>
              </div>
              <div className="dash_menu">
                <ul>
                  <li>  
                    <span>
                      <SiDash />
                    </span>
                    <span>
                      <Link to="/dashboard">Dashboard</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <AiFillProfile />
                    </span>
                    <span>
                      <Link to="/profile">Profile</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <BsBookHalf />
                    </span>
                    <span>
                      <Link to="/add-book">Add Book</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <BsJournalBookmarkFill />
                    </span>
                    <span>
                      <Link to="/book-list">Book List</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <BiSolidUser />
                    </span>
                    <span>
                      <Link to="/user-list">User List</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <BiLogOut />
                    </span>
                    <span>
                      <a href="#javascript">Logout</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
    )
}
export default SideBar;