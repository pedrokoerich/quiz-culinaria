"use client";

import { questions } from "@/data/questions";
import { useState } from "react";

const Page = () => {
  const title = "Quiz de Culinária"
  const [currenteQuestion, setCurrenteQuestion] = useState(0);

    return (
      <div className="w-full h-screen flex justify-center items-center bg-blue-950">
          <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
            <div className="p-5 font-bold text-2xl shadow border-b border-gray-300">
              {title}
            </div>
            <div className="p-5"></div>
            <div className="p-5 text-center border-t border-gray-300">
              {currenteQuestion + 1} de {questions.length} pergunta{questions.length > 1 ? "s" : ""}
            </div>
          </div>
      </div>
    );
}

export default Page;