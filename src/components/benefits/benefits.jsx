import React, { useEffect } from "react";
import icon1 from "../../assets/benefits/b-1-1.png";
import icon2 from "../../assets/benefits/b-2.png";
import icon3 from "../../assets/benefits/b-3.png";
import icon4 from "../../assets/benefits/b-4.png";
import icon5 from "../../assets/benefits/b-5.png";
import icon6 from "../../assets/benefits/b-6.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Benefits = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="relative my-[30px] mb-[45px]">
      <div className=" w-full mb-[5%] text-center text-[35px] text-[#7AAB00] max-[800px]:text-[30px] max-[680px]:text-[25px] max-[570px]:text-[20px] max-[460px]:text-[15px]">
        <span className="ring-2 ring-[#964B00] ring-offset-1 bg-[#964B00] rounded-[10px] p-[10px] px-[20px] font-[600]">
          पशुसेवक प्रगति केंद्र प्रभारियों को दिए गए लाभ
        </span>
      </div>
      <div className="px-[8%] overflow-hidden flex w-full flex-wrap justify-between text-[25px] items-center max-[1000px]:text-[22px]  max-[1000px]:px-[4%] max-[868px]:px-[1%] max-[868px]:text-[20px] max-[680px]:justify-center max-[500px]:text-[18px] max-[400px]:text-[16px]">
        <div className="flex flex-wrap justify-between max-[680px]:justify-center">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-offset="200"
            className="max-[680px]:w-[70%] max-[450px]:w-[85%] flex justify-center items-center text-[#7AAB00] m-[20px] p-[15px] rounded-[10px] font-[600] w-[40%] border-[3px] ring-2 ring-offset-1 ring-black border-black max-[1200px]:w-[45%] max-[816px]:w-[44%]"
          >
            <img src={icon1} alt="" className="w-[30%]" />
            <span className="h-full text-center flex justify-center items-center">
              हम सोशलडिजिटल और प्रिंट मीडिया के माध्यम से अपने पशुसेवक
              प्रगतिकेंद्र को बढ़ावा देते हैं
            </span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-offset="200"
            className="max-[680px]:w-[70%] max-[450px]:w-[85%] max-[1200px]:w-[45%] max-[816px]:w-[44%] flex justify-center items-center text-[#7AAB00] m-[20px] p-[15px] rounded-[10px] h-max font-[600] w-[40%] border-[3px] ring-2 ring-offset-1 ring-black border-black"
          >
            <img src={icon4} alt="" className="w-[30%]" />
            <span className="h-full text-center flex justify-center items-center">
              हमारे पशुसेवक प्रगतिकेंद्र के संचालक पोषण फ़ीडसप्लीमेंट्स बेचकर
              30-45 प्रतिशत तक का अच्छा मार्जिन अर्जित करेंगे।
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between max-[680px]:justify-center">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-offset="200"
            className="max-[680px]:w-[70%] max-[450px]:w-[85%] max-[1200px]:w-[45%] max-[816px]:w-[44%] flex justify-center items-center text-[#7AAB00] m-[20px] p-[15px] rounded-[10px] font-[600] w-[40%] border-[3px] ring-2 ring-offset-1 ring-black border-black"
          >
            <img src={icon2} alt="" className="w-[30%]" />
            <span className="h-full text-center flex justify-center items-center">
              हम अपने मानदंडों के अनुसार अपने पशुसेवक प्रगतिकेंद्र को निःशुल्क
              ब्रांडिंग सहायता प्रदान करेंगे।
            </span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-offset="200"
            className="max-[680px]:w-[70%] max-[450px]:w-[85%] max-[1200px]:w-[45%] max-[816px]:w-[44%] flex justify-center items-center text-[#7AAB00] m-[20px] p-[15px] rounded-[10px] font-[600] w-[40%] border-[3px] ring-2 ring-offset-1 ring-black border-black"
          >
            <img src={icon5} alt="" className="w-[30%]" />
            <span className="h-full text-center flex justify-center items-center">
              हम अपने पशुसेवक प्रगतिकेंद्र की बिक्री बढ़ाने के लिए पशुसेवकों को
              समय-समय पर ऑफर/छूट देंगे।
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between max-[680px]:justify-center">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-offset="200"
            className="max-[680px]:w-[70%] max-[450px]:w-[85%] max-[1200px]:w-[45%] max-[816px]:w-[44%] flex justify-center items-center text-[#7AAB00] m-[20px] p-[15px] rounded-[10px] font-[600] w-[40%] border-[3px] ring-2 ring-offset-1 ring-black border-black"
          >
            <img
              src={icon3}
              alt=""
              className="w-[32%] h-[160px] max-[800px]:h-[120px]"
            />
            <span className="h-full text-center flex justify-center items-center">
              हम अपने पशुसेवक प्रगति केंद्रों पर 32' स्मार्ट टीवी निःशुल्क
              स्थापित करेंगे, जिसके द्वारा हम अपने सहयोगी संगठनों से पशुसेवकों
              का मार्गदर्शन कर सकते हैं।
            </span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-offset="200"
            className="max-[680px]:w-[70%] max-[450px]:w-[85%] max-[1200px]:w-[45%] max-[816px]:w-[44%] flex justify-center items-center text-[#7AAB00] m-[20px] p-[15px] rounded-[10px] font-[600] w-[40%] border-[3px] ring-2 ring-offset-1 ring-black border-black"
          >
            <img src={icon6} alt="" className="w-[30%]" />
            <span className="h-full text-center flex justify-center items-center">
              हमसे जुड़े प्रत्येक पशुसेवक का पूरा विवरण ट्रैक करने के लिए हम
              अपने पशुसेवकप्रगति केंद्र के संचालक को अपने वेब पोर्टल पर एलएमएस
              तक पहुंच प्रदान करेंगे।
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
