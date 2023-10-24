import React from "react";
import Status from "../components/dashboardCompo/Status";
import Charts from "../components/dashboardCompo/Charts";
import Charts2 from "../components/dashboardCompo/Charts2";

function Dashboard() {
  return (
    <div className="p-5">
      <Status />
      <Charts />
      <Charts2 />
    </div>
  );
}

export default Dashboard;
