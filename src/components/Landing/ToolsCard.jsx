function ToolsCard({ item }) {
  return (
    <div className=" py-[20px] 2xl:py-[50px] px-4 2xl:px-8 border border-cardBorderColor rounded-[16px] duration-200 ease-in-out hover:bg-[#131023] h-full">
      <div className="w-[70px] h-[70px] flex items-center justify-center border border-cardBorderColor rounded-[8px]">
        <img className="w-10 h-10" src={item?.icon} alt="icon" />
      </div>
      <h3 className="title--sm mt-9">{item?.title}</h3>
      <p className="mt-4 text-paragraphColor">{item?.description}</p>
    </div>
  );
}

export default ToolsCard;
