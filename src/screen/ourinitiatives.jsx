import React, { useEffect } from "react";
import Initiatives from "../components/initiatives/initiatives";
import Purpose from "../components/purpose/purpose";

const Ourinitiatives = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Initiatives />
      <Purpose />
    </>
  );
};

export default Ourinitiatives;
