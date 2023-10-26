import Item from "./Item"

function Patientlist() {
  return (
    <div className="flex flex-col items-center justify-between w-[446px] h-[467px] bg-white rounded-[15px] gap-y-[20px] p-[20px]">
      <div className="w-full flex self-srart justify-between">
        <h2 className="">
          Patientlist
        </h2>
        <a className="" href="">today</a>
      </div>
      <div className="w-full flex flex-col gap-y-[20px] h-[350px]">
        <Item color={"#F62088"} tag={"Weekly Visit"} name={"Stacy Mitchell"}/>
        <Item color={"#0000FF"} tag={"Routine Checkup"} name={"Amy Dunham"}/>
        <Item color={"#128983"} tag={"Report"} name={"Demi Joan"}/>
        <Item color={"#F62088"} tag={"Weekly Visit"} name={"Susan Myers"}/>
      </div>
      <a href="">View more</a> 
    </div>
  )
}

export default Patientlist