import Card from "./Card"

function Statistic() {
  return (
    <div className="w-[446px] h-[467px] flex flex-col justify-between">
      <div className="flex flex-col gap-y-[20px] text-[white]">
        <h1 className="text-[32.58px] font-semibold">Dr.Brooklyn Simmons</h1>
        <h2 className="text-[22.13px]">Visits for today</h2>
        <h2 className="text-[55.33px]">143</h2>
      </div>
      <div className="flex flex-wrap gap-[30px] w-full">
        < Card title={"New Patients"} number={40} win={true}  percentage={51}/>
        < Card title={"Old Patients"} number={64} win={false}  percentage={20}/>
        < Card title={"New Patients"} number={40} win={true}  percentage={51}/>
        < Card title={"Old Patients"} number={64} win={false}  percentage={20}/>
      </div>
    </div>
  )
}

export default Statistic