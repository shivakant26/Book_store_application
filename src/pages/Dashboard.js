import React from "react";
import VisiterInsight from "../component/charts/VisibleInsight";
import SellsBarChart from "../component/charts/SalesChart";
const DashBoard = () => {
  return (
    <>
      <div className="bk_dashboard">
        <div className="dash_heading d-flex">
          <h2>Dashboard</h2>
        </div>
        <div className="dash_card_wr d-flex">
          <div className="dash_card">
            <p>Users</p>
            <p>90</p>
          </div>
          <div className="dash_card">
            <p>Authors</p>
            <p>122</p>
          </div>
          <div className="dash_card">
            <p>Publication</p>
            <p>180</p>
          </div>
          <div className="dash_card">
            <p>Ohters</p>
            <p>1200</p>
          </div>
        </div>
        <div className="visiter_insight d-flex">
          <div className="visiter_part">
            <h4>Visiter Insight</h4>
            <VisiterInsight />
          </div>
          <div className="totol_revenue">
            <h4>Total Revenue</h4>
            <SellsBarChart />
          </div>
        </div>
        <div className="top_book">
          <h4 style={{ textAlign: "left" }}>Top Product</h4>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Book Name</th>
                <th>Populerty</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Lord of the Rings</td>
                <td>70%</td>
                <td>online</td>
              </tr>
              <tr>
                <td>02</td>
                <td>Harry Potter</td>
                <td>80%</td>
                <td>online</td>
              </tr>
              <tr>
                <td>03</td>
                <td>Alice's Adventures in Wonderland</td>
                <td>50%</td>
                <td>offline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
