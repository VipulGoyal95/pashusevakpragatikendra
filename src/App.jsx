import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Headers from "./components/headers/headers";
import "aos/dist/aos.css";
import Homepage from "./screen/homepage";
import Ourinitiatives from "./screen/ourinitiatives";
import Aboutus from "./screen/aboutus";
import Contactus from "./screen/contactus";
import Apply from "./screen/apply";

function App() {
  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ourinitiative" element={<Ourinitiatives />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={<Homepage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
