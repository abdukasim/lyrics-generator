"use client";

import { useState } from "react";
import Question from "./question";

export default function Form() {
  const [index, setIndex] = useState<number>(0);
  const [isForward, setIsForward] = useState<boolean>(true);

  const handleNext = () => {
    setIsForward(true);
    setIndex(index + 1);
  };

  const handleBack = () => {
    setIsForward(false);
    setIndex(index - 1);
  };

  return (
    <>
      <Question type={index === 0 ? "gender" : "race"} isForward={isForward} />
      <div className="absolute bottom-12 w-screen flex items-center gap-2">
        <button onClick={() => index > 0 && handleBack()} className="btn">
          Back
        </button>
        <button onClick={handleNext} className="btn">
          Next
        </button>
      </div>
    </>
  );
}
