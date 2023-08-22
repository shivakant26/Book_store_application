import { Route, Routes } from "react-router-dom";
import Layout from "../component/layout";
import HomePage from "../pages";
import Login from "../component/Login";
import Register from "../component/Register";
import DashBoard from "../pages/Dashboard";
import DashBoardLayout from "../component/layout/DashLayout";
import Profile from "../component/dashboard/Profile";
import AddBook from "../component/dashboard/AddBook";
import BookList from "../component/dashboard/BookList";
import UserList from "../component/dashboard/UserList";

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<DashBoardLayout />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/book-list" element={<BookList />} />
          <Route path="/user-list" element={<UserList />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;
