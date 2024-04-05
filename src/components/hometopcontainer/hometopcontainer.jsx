import React from "react";
import icon from "../../assets/homepage/top container.png";
const Hometopcontainer = () => {
  return (
    <div className="bg-yellow-200 w-full h-[100%] flex mb-[50px] flex-wrap">
      <div className="w-[30%] flex-1 text-center pl-[30px] pt-[30px] flex flex-col gap-[30px] justify-center items-center max-[962px]:w-[80%] max-[962px]:pt-[40px]">
        <span className="font-bold text-[35px] text-[#7AAB00] max-[962px]:w-[60%] max-[850px]:text-[30px]">
          अपने गाँव में खोले पशुसेवक{" "}
          <span className="text-[#FCC902]">प्रगति केंद्र पशुपालन</span> को
          <span className="text-[#FCC902]"> पुनर्जन्म</span> दे अपने गांव को{" "}
          <span className="text-[#FCC902]">प्रगति</span> के पथ पर ले चले
          <span className="text-[#FCC902]">...</span>
        </span>
        <button className="border text-[24px] border-solid rounded-[10px] py-[5px] px-[10px] text-white font-extrabold bg-[#964B00] hover:bg-[#956535]">
          आवेदन करे
        </button>
      </div>
      <img src={icon} alt="" className="w-[70%] flex-1 max-[962px]:w-[100%]" />
    </div>
  );
};

export default Hometopcontainer;
