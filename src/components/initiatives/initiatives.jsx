import React, { useEffect } from "react";
import icon1 from "../../assets/initiatives/initiative-1.png";
import icon2 from "../../assets/initiatives/initiative-2.png";
import Aos from "aos";
const Initiatives = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="my-[40px]">
      <div className=" w-full mb-[4%] text-center text-[35px] text-[#7AAB00] max-[920px]:text-[30px] max-[800px]:text-[26px] max-[750px]:text-[23px] max-[658px]:text-[20px] max-[580px]:text-[17px] max-[500px]:text-[15px] max-[450px]:text-[13px]">
        <span className="ring-2 ring-[#964B00] ring-offset-1 bg-[#964B00] rounded-[10px] p-[10px] px-[20px] font-[600]">
          हमारी पहल जिसके माध्यम से हम पशुपालन को बढ़ावा देंगे
        </span>
      </div>
      <div
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-offset="200"
        className="flex ml-[8vw] mb-[5vh] mt-[7vh] max-[800px]:mx-[5vw]"
      >
        <img
          src={icon1}
          alt=""
          className="w-[23vw] max-[1212px]:w-[26vw] max-[1044px]:w-[28vw] max-[928px]:w-[30vw] max-[800px]:w-[42vw] max-[830px]:w-[35vw]"
        />
        <div className="flex items-center justify-center w-[30vw] pl-[30px] max-[1287px]:w-[35vw] max-[1165px]:w-[37vw] max-[928px]:w-[40vw] max-[800px]:w-[48vw] max-[900px]:w-[44vw] max-[580px]:pl-[25px] max-[500px]:pl-[20px] max-[360px]:pl-[15px]">
          <span className="text-center rounded-[10px] border-[4px] border-black border-solid font-bold text-[23px] text-[#617926] p-[10px] max-[1030px]:text-[21px] max-[720px]:text-[19px] max-[651px]:text-[18px] max-[580px]:text-[17px] max-[543px]:text-[16px] max-[400px]:p-[6px] max-[479px]:text-[14px] max-[428px]:text-[12px] max-[389px]:text-[11px]">
            हम अपने केंद्रों के आस-पास के सभी पशुसेवकों को "पशुसेवक
            प्रगतिपुस्तिका" प्रदान करेंगे, जिसमें उनके पशुधन/पशु का नाम, वजन,
            प्रसव की अवधि, दूध की उपज आदि के सभी डेटा दर्ज होंगे। इस पहल की मदद
            से हम उनके पशुधन का नाम देने की एक नई परंपरा शुरू करेंगे
          </span>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-offset="200"
        className="flex mr-[8vw] mt-[8vh] justify-end max-[800px]:mx-[5vw] overflow-x-hidden"
      >
        <div className="flex items-center justify-center w-[30vw] pr-[30px] max-[1437px]:w-[34vw] max-[1277px]:w-[37vw] max-[1165px]:w-[42vw] max-[956px]:w-[45vw] max-[800px]:w-[54vw] max-[892px]:w-[50vw] max-[500px]:pr-[18px]  max-[360px]:pr-[15px]">
          <span className="text-center rounded-[10px] border-[4px] border-black border-solid font-bold text-[23px] text-[#617926] p-[10px] max-[1030px]:text-[21px] max-[720px]:text-[19px] max-[651px]:text-[17px] max-[580px]:text-[16px] max-[543px]:text-[15px] max-[500px]:p-[6px] max-[479px]:text-[13px] max-[428px]:text-[11px] max-[389px]:text-[10.5px]">
            हम "पशुसेवक प्रगति वाहन" लॉन्च करेंगे, जो हमारे पशुसेवक प्रगति
            केंद्रों के पास के प्रत्येक गांव के प्रत्येक नुक्कड़, स्टैंड और सभी
            पैदल चलने वाले क्षेत्रों में जाएगा। "पशुसेवक प्रगति वाहन" में 43"
            स्मार्ट टीवी हैं। इसकी मदद से हम सभी पशुसेवकों को सरकारी योजनाओं के
            बारे में जागरूक करते हैं।
          </span>
        </div>
        <img
          src={icon2}
          alt=""
          className="w-[23vw] max-[1212px]:w-[26vw] max-[1044px]:w-[28vw] max-[944px]:w-[30vw] max-[830px]:w-[35vw] max-[800px]:w-[42vw]"
        />
      </div>
    </div>
  );
};

export default Initiatives;
