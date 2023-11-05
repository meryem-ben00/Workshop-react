import React, { useState } from "react";
import Basic from "./Basic";
import Details from "./Details";
import Services from "./Services";
import Headers from "./Headers";
import Review from "./Review";

export default function Base() {
  const [step, setStep] = useState(1);
  const move = () => {
    setStep(step + 1);
  };
  const move_between_li = (st) => {
    setStep(st);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-[100px]  ">
      <Headers step={step} move_between_li={move_between_li} />{" "}
      {step === 1 && (
        <div className="max-w-screen-lg mx-auto p-4 w-full ">
          <Basic />
        </div>
      )}{" "}
      {step === 2 && (
        <div className="max-w-screen-lg mx-auto p-4 w-full">
          <Details />
        </div>
      )}{" "}
      {step === 3 && (
        <div className="max-w-screen-lg mx-auto p-4 w-full">
          <Services />
        </div>
      )}{" "}
      {step === 4 && (
        <div className="max-w-screen-lg mx-auto p-4 w-full">
          <Review />
        </div>
      )}{" "}
      <div className="max-w-screen-lg mx-auto p-4 w-full flex justify-end">
        <button
          className="bg-[#5F8D4E] p-2 w-[90px] rounded text-white"
          onClick={move}
        >
          {" "}
          {step === 4 ? "Done" : "Next step"}{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}
