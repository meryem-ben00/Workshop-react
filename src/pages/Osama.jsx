import Statistic from "../components/osamaComponenets/Statistic";
import Patientlist from "../components/osamaComponenets/Patientlist";
import Consultation from "../components/osamaComponenets/Consultation";
import CalendarComp from "../components/osamaComponenets/CalendarComp";
import Daily from "../components/osamaComponenets/Daily";

function Osama() {
  return (
    <main className="h-auto bg-[#1E2E5C] flex justify-center">
    <div className="w-[1440px] flex gap-x-[30px] py-[30px]">
      <div className="flex flex-col gap-y-[30px]">
        <div className="flex gap-x-[30px] self-start">
          <Statistic />
          <Patientlist />
        </div>
        <Consultation />
      </div>
      <div className="flex flex-wrap gap-y-[30px]">
        <CalendarComp />
        <Daily />
      </div>
    </div>
    </main>
  )
}

export default Osama