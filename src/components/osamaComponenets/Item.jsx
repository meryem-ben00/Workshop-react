export const avatarName = (name) => {
  if (!name) return "N/A";

  const full = name.split(" ");
  if (full.length < 2) return name[0];

  return full[0][0] + full[1][0];
};
function Item(prop) {
  const color = prop.color || 'red'
  return (
    <div className=" flex justify-between items-center">
      <div className="flex items-center gap-x-[20px]">
        <div className={`w-[60px] h-[60px] rounded-full border-[1px] border-[${color}] flex justify-center items-center`}>
          <div className={`w-[50px] h-[50px] rounded-full  bg-[${color}]/10 flex justify-center items-center text-[18.82px]`}>
            {avatarName(prop.name)}
          </div>
        </div>
        <div>
          <p className="text-[20px] font-semibold">{prop.name}</p>
          <span className={`text-[14px] text-[${color}] font-light`}>
            {prop.tag}
          </span>
        </div>
      </div>
      <div className={`px-[15px] py-[5px] rounded-lg bg-[${color}]/10`}>
        <p className={`text-[${color}]`}>9:35 AM</p>
      </div>
    </div>
  );
}

export default Item;
