"use client";

import { useState } from "react";
import Question from "./question";

export default function Form() {
  const [index, setIndex] = useState<number>(0);

  return (
    <>
      {index === 0 && <Question type="gender" />}
      {index === 1 && <Question type="race" />}

      <div className="absolute bottom-12 w-screen flex items-center gap-2">
        <button
          onClick={() => (index === 0 ? "" : setIndex(index - 1))}
          className="btn"
        >
          Back
        </button>
        <button onClick={() => setIndex(index + 1)} className="btn">
          Next
        </button>
      </div>
    </>
  );
}
