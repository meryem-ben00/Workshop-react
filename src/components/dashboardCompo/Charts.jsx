import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  LineChart,
} from "recharts";

function Charts() {
  const data = [
    { name: "Jan", Total: 10, Total2: 30 },
    { name: "Feb", Total: 30, Total2: 40 },
    { name: "Mar", Total: 60, Total2: 20 },
    { name: "Apr", Total: 38, Total2: 50 },
    { name: "May", Total: 40, Total2: 20 },
    { name: "Jun", Total: 50, Total2: 60 },
    { name: "July", Total: 48, Total2: 80 },
  ];
  const data2 = [
    { name: "Jan", Male: 1900, Female: 4000 },
    { name: "Feb", Male: 3900, Female: 6000 },
    { name: "Mar", Male: 2000, Female: 4200 },
    { name: "Apr", Male: 2150, Female: 4100 },
    { name: "May", Male: 3000, Female: 3800 },
    { name: "Jun", Male: 4200, Female: 1000 },
    { name: "July", Male: 3900, Female: 2900 },
    { name: "Aug", Male: 6000, Female: 3000 },
    { name: "Sep", Male: 5000, Female: 2900 },
    { name: "Oct", Male: 7800, Female: 2950 },
    { name: "Nov", Male: 5700, Female: 4000 },
    { name: "Dec", Male: 7800, Female: 3800 },
  ];
  return (
    <div className="w-100 mt-5 flex flex-nowrap gap-5 ">
      <div className=" w-5/12 bg-white flex-4 rounded-lg p-5 relative">
        <div className="flex justify-between">
          <span className="text-black ">New Patients</span>
          <span className="text-xs text-green-700 ">
            25% High then last month
          </span>
        </div>
        <div className="flex justify-evenly my-5 text-xs">
          <div className="flex flex-col items-center">
            <span className="text-black text-xs">Overall Growth</span>
            <strong className="text-black">35.80%</strong>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-black text-xs">Monthly</span>
            <strong className="text-black">45.20%</strong>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-black text-xs">Day</span>
            <strong className="text-black">5.50%</strong>
          </div>
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
            <XAxis dataKey="name" stroke="" fontSize={12} fill="#171717" />
            <YAxis domain={[0, 100]} stroke="" fontSize={12} fill="#171717" />
            <CartesianGrid vertical={false} stroke="#ccc" />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#Total)"
              strokeWidth={5}
            />
            <Area
              type="monotone"
              dataKey="Total2"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#Total2)"
              strokeWidth={5}
            />
          </AreaChart>
        </ResponsiveContainer>
        {/* Patients Overview*/}
      </div>
      <div className="w-7/12 bg-white flex-4 rounded-lg p-2 ">
        <div className="mb-10 flex justify-between ">
          <div className=" flex items-center gap-5 ">
            <span className="text-black ">Patients Overview</span>

            <div className="male flex items-center gap-2">
              <div className="w-3 h-3 rounded-xl bg-blue-500"></div>
              <span className="text-black">Male</span>
            </div>
            <div className="female flex  items-center gap-2">
              <div className="w-3 h-3 rounded-xl bg-fuchsia-500"></div>
              <span className="text-black">Female</span>
            </div>
          </div>
          <select
            name=""
            id=""
            className="border-2 border-gray-100 rounded-md p-1 text-gray-400 bg-transparent text-xs  cursor-pointer"
          >
            <option value="">Monthly</option>
          </select>
        </div>
        <ResponsiveContainer aspect={2 / 1}>
          <LineChart
            data={data2}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid vertical={false} stroke="#ccc" />
            <XAxis dataKey="name" stroke="" fontSize={12} fill="#A3A3A3" />
            <YAxis domain={[0, 8000]} stroke="" fontSize={12} fill="#A3A3A3" />

            <Line
              dot={false}
              type="monotone"
              dataKey="Male"
              stroke="#3A6FF8"
              strokeWidth={3}
            />
            <Line
              dot={false}
              strokeWidth={3}
              type="monotone"
              dataKey="Female"
              stroke="#E126FF"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;
