import React from "react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import more from "../../images/DashboardImages/more.png";
function Charts2() {
  const data = [
    { name: "Jan", Total: 40, Total2: 50 },
    { name: "Feb", Total: 30, Total2: 40 },
    { name: "Mar", Total: 40, Total2: 70 },
    { name: "Apr", Total: 38, Total2: 50 },
    { name: "May", Total: 40, Total2: 60 },
    { name: "Jun", Total: 50, Total2: 60 },
    { name: "July", Total: 48, Total2: 80 },
  ];
  const patientsData = [
    {
      name: "Annette Black",
      dateIn: "Jun 18, 2023",
      diagnostic: "ADHD",
      status: "Incoming",
    },
    {
      name: "Savannah Nguyen",
      dateIn: "Jun 18, 2023",
      diagnostic: "Anxiety",
      status: "Confirmed",
    },
    {
      name: "Ronald Richards",
      dateIn: "Jun 18, 2023",
      diagnostic: "Depression",
      status: "Cancelled",
    },
    {
      name: "Bessie Cooper",
      dateIn: "Jun 18, 2023",
      diagnostic: "ADHD",
      status: "Confirmed",
    },
  ];
  function getStatusColor(status) {
    switch (status) {
      case "Incoming":
        return "text-orange-400";
      case "Confirmed":
        return "text-blue-500";
      case "Cancelled":
        return "text-gray-300";
      default:
        return "";
    }
  }

  return (
    <div className="w-100 mt-5 flex flex-nowrap gap-5">
      <div className=" w-5/12 bg-white flex-4  rounded-lg p-5 relative">
        <div className="flex justify-between">
          <strong className="text-black ">Activity</strong>
          <select
            name=""
            id=""
            className="border-transparent rounded-md p-1 text-black bg-transparent text-xs cursor-pointer"
          >
            <option value="">Month</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            className="bg-white"
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#4CC2B0" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4CC2B0" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="Total2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="Total"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#Total)"
              strokeWidth={2}
              dot={true}
            />
            <Area
              type="monotone"
              dataKey="Total2"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#Total2)"
              strokeWidth={2}
              dot={true}
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex gap-5 items-center justify-center ">
          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center gap-1">
              <div className="w-2 h-2 rounded-lg bg-blue-950"></div>
              <span className="text-black text-sm">Last Month</span>
            </div>
            <span className="text-black">100K</span>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center gap-1">
              <div className="w-2 h-2 rounded-lg bg-green-700"></div>
              <span className="text-black text-sm">This Month</span>
            </div>
            <span className="text-black">50K</span>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="w-7/12 bg-white flex-4 rounded-lg p-5">
        <div className="flex flex-col">
          <span className="text-xs text-blue-500 place-self-end cursor-pointer">
            View All
          </span>
          <span className="text-black ">Patients Data</span>
        </div>
        <div className="my-8 mx-4">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-transparent border border-transparent ">
                <th className="border border-transparent px-4 py-2 text-gray-400 text-sm flex self-start">
                  Patient Name
                </th>
                <th className="border border-transparent px-4 py-2 text-gray-400 text-sm">
                  Date In
                </th>
                <th className="border border-transparent px-4 py-2 text-gray-400 text-sm">
                  Diagnostic
                </th>
                <th className="border border-transparent px-4 py-2 text-gray-400 text-sm">
                  Status
                </th>
                <th className="border border-transparent px-4 py-2 text-gray-400 text-sm"></th>
              </tr>
            </thead>
            <tbody>
              {patientsData.map((patient, index) => (
                <tr
                  key={index}
                  className="text-center border border-transparent "
                >
                  <td className="border border-transparent px-4 py-2 text-gray-900  flex items-center gap-2">
                    <div className="w-10 h-10 bg-indigo-50 rounded"></div>
                    {patient.name}
                  </td>
                  <td className="border border-transparent px-4 py-2 text-gray-400">
                    {patient.dateIn}
                  </td>
                  <td className="border border-transparent px-4 py-2 text-gray-400">
                    {patient.diagnostic}
                  </td>
                  <td
                    className={`border border-transparent px-4 py-2 ${getStatusColor(
                      patient.status
                    )}`}
                  >
                    {patient.status}
                  </td>

                  <td className="border border-transparent px-4 py-2">
                    <button>
                      <img src={more} alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Charts2;
