function ButtonCommon({ text }) {
  return (
    <button className="3xl:py-[15px] py-[10px] px-[15px] md:px-[30px] 3xl:px-[66px] bg-btnBg text-white font-semibold rounded-[100px] text-[12px] sm:text-base border-[2px] border-btnBg duration-200 ease-in-out hover:bg-transparent">
      {text}
    </button>
  );
}

export default ButtonCommon;
