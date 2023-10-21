import Calendar from "./Calendar";

function CalendarComp() {

  return (
    <div className="w-[372.59px] h-[467px] bg-white rounded-[15px] p-[10px] flex flex-col"> 
      <div className="h-[350px]">
        <div className="w-full flex self-srart justify-between">
          <h2 className="text-[18px] font-semibold">
            Calendar
          </h2>
          <img src="./arrowd.svg" alt="" />
        </div>
        <div>
          <Calendar />
        </div>
      </div>
      <div className="flex flex-col gap-y-[10px]">
        <div className="w-full flex self-srart justify-between items-center">
          <h2 className="text-[18px] font-semibold">
            Upcoming
          </h2>
          <a className="text-[11px] font-light text-[#1A71FF]" href="">View all</a>
        </div>
        <div className="bg-[#F0F9FD] rounded-[15px] p-[10px] flex gap-x-[20px]">
          <div className="text-[white] font-semibold flex items-center justify-center w-[42px] h-[42px] rounded-full bg-gradient-to-r from-[#57B4DE] via-[#58B6DD] to-[#3B29AB]">
            M
          </div>
          <div>
            <p className="text-[#23262F] font-semibold text-[14px]">Montly doctor’s meet</p>
            <span className="text-[#000]/60 text-[11px]">8 April, 2021   |   04:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarComp;
