import { avatarName } from "./Item";

function Consultation() {
  return (
    <div className="flex flex-col w-[922px] h-[309px] bg-white rounded-[15px] p-[20px] gap-y-[20px]">
      <div className="w-full flex justify-between">
        <h3>Consultation</h3>
        <a href="">View more</a>
      </div>
      <div className="flex h-[300px] border-[1px] border-[#58B6DE]/50 rounded-[12px]">
        <div className="flex flex-col  min-w-[360px] gap-y-[20px] px-[40px] items-center justify-center border-r-[1px] border-r-[#58B6DE]/50">
          <div className="flex items-center gap-x-[20px]">
            <div
              className={`w-[60px] h-[60px] rounded-full border-[1px] border-[#128983] flex justify-center items-center`}
            >
              <div
                className={`w-[50px] h-[50px] rounded-full bg-[#128983]/10 flex justify-center items-center text-[18.82px]`}
              >
                {avatarName("Denzel White")}
              </div>
            </div>
            <div>
              <p className="text-[25px] font-semibold">Denzel White</p>
              <span className={`text-[14px] text-[#000000]/50 font-light`}>
                Male - 28 Years 3 Months
              </span>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <p className="text-[17px]">ADHD</p>
            <p className="text-[17px]">Anxiety</p>
            <p className="text-[17px]">Depression</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[40px] px-[50px] items-start justify-center ">
          <div className="flex gap-x-[20px]">
            <p className="text-[12px] font-medium">Last Checked</p>
            <p className="text-[12px] text-[#000000]/50">Dr Everly on 21 April 2021 Prescription 
            <a href="" className="text-[#0000FF]/70" > #2J983KT0</a> </p>
          </div>
          <div className="flex gap-x-[20px]">
            <p className="text-[12px] font-medium">Observation</p>
            <p className="text-[12px] text-[#000000]/50">High fever and cough at normal hemoglobin levels.</p>
          </div>
          <div className="flex gap-x-[20px]">
            <p className="text-[12px] font-medium">Prescription</p>
            <p className="text-[12px] text-[#000000]/50">Paracetmol - 2 times a day Dizopam - Day and Night before meal Wikoryl</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
