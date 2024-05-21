"use client";
import { useState } from "react";

const questions = [
  {
    id: 1,
    text: "What is your gender?",
    options: ["Male", "Female", "Non-binary", "Other", "Prefer not to say"],
  },
  {
    id: 2,
    text: "What is your age?",
    options: [
      "Under 18",
      "18-24",
      "25-34",
      "35-44",
      "45-54",
      "55-64",
      "65 or older",
      "Prefer not to say",
    ],
  },
  // Add more questions here
];

const Form = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleAnswer = (questionId: number, optionIndex: number) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: optionIndex,
    }));
    handleNext();
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Utility function to convert index to alphabet
  const indexToAlphabet = (index: any) => String.fromCharCode(65 + index);

  return (
    <div className="relative w-full h-screen  bg-gray-100 flex justify-center overflow-hidden">
      <div
        className="absolute max-w-4xl w-full h-screen transition-transform duration-500"
        style={{ transform: `translateY(-${currentQuestion * 85}%)` }}
      >
        {questions.map((question, index) => (
          <div
            key={question.id}
            className="w-full h-[85%] flex items-center justify-center py-4"
          >
            <div className="w-full h-max bg-white shadow-md rounded-lg p-12">
              <h2 className="text-2xl font-semibold mb-6">{question.text}</h2>
              <div className="flex flex-col space-y-2 w-full">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(question.id, idx)}
                    className={`w-full px-4 py-2 border rounded flex gap-2 items-center ${
                      answers[question.id] === idx
                        ? "bg-sky-100"
                        : "hover:bg-sky-100"
                    }`}
                  >
                    <span className="w-6 h-6 text-lg flex items-center justify-center border border-black rounded-sm">
                      {indexToAlphabet(idx)}
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 bg-slate-100/80 w-screen h-20 pb px-4">
        <div className="flex gap-2 w-full max-w-4xl mx-auto h-max">
          <button
            onClick={handleBack}
            className="px-5 py-3 bg-[#fafafa] text-black shadow-md rounded-lg disabled:opacity-50"
            disabled={currentQuestion === 0}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-5 py-3 bg-[#fafafa] text-black  rounded-lg disabled:opacity-50 shadow-sm"
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
