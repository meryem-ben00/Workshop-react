
function Card(prop) {
  return (
    <div className="flex flex-col gap-y-[10px] w-[200px] h-[110px] p-[10px] text-[white] rounded-[10px] relative bg-[#2E8544]">
        <div className={`flex items-center justify-around absolute w-[85px] h-[35px]  ${prop.win ? "bg-white" : "bg-[#FBC3C3] "} right-[-10px] top-[50px] shadow-xl rounded-md`}>
            <p className={prop.win ? "text-[#008000]" : "text-[#D30404]"} >{prop.percentage}%</p>
            <img src={prop.win ? `/up.svg` : `/down.svg`} alt="" />
        </div>
        <h2 className="text-[16px]">{prop.title}</h2>
        <p className="text-[32px]">{prop.number}</p>
    </div>
  )
}

export default Card