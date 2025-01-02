function ToolsCard({ item }) {
  return (
    <div className=" py-[20px] 2xl:py-[50px] px-4 2xl:px-8 border border-cardBorderColor rounded-[16px] duration-200 ease-in-out hover:bg-[#131023] h-full">
      <div className=" w-[50px] h-[50px] 2xl:w-[70px] 2xl:h-[70px] flex items-center justify-center border border-cardBorderColor rounded-[8px]">
        <img className="w-6 h-6 2xl:h-10 2xl:w-10" src={item?.icon} alt="icon" />
      </div>
      <h3 className="mt-4 title--sm 2xl:mt-9">{item?.title}</h3>
      <p className=" mt-[6px]  2xl:mt-4  text-paragraphColor">{item?.description}</p>
    </div>
  );
}

export default ToolsCard;
