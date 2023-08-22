import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../dashboard/Sidebar";

const DashBoardLayout = () => {
  return (
    <>
      <div className="dashboard_page">
        <div className="dashboard_section d-flex">
          <SideBar />
          <div className="dash_content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashBoardLayout;
