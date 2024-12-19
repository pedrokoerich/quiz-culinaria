"use client";

import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { useState } from "react";

const Page = () => {
  const title = "Quiz de Culinária"
  const [answers, setAnswers] = useState<number[]>([]);
  const [currenteQuestion, setCurrenteQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const loadNextQuestion = () => {
    if (questions[currenteQuestion + 1]) {
      setCurrenteQuestion(currenteQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const handleAnswer = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  }

    return (
      <div className="w-full h-screen flex justify-center items-center bg-blue-950">
          <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
            <div className="p-5 font-bold text-2xl shadow border-b border-gray-300">
              {title}
            </div>
            <div className="p-5">
              {!showResult && 
                <QuestionItem 
                  question={questions[currenteQuestion]}
                  count={currenteQuestion + 1}
                  onAnswer={handleAnswer}
                />
              }
              {showResult &&
                <Results questions={questions} answers={answers} />  
              }

            </div>
            <div className="p-5 text-center border-t border-gray-300">
              {!showResult &&
                `${currenteQuestion + 1} de ${questions.length} pergunta${questions.length > 1 ? "s" : ""}`
              }
              {showResult &&
                <button className="px-3 py-2 bg-blue-500 text-white rounded-md" onClick={() => window.location.reload()}>Reiniciar Quiz</button>
              }
            </div>
          </div>
      </div>
    );
}

export default Page;