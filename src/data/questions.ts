import { Question } from "../types/Question";

export const questions: Question[] = [
    {
        question: "Qual ingrediente não pode faltar?",
        options: [
            "Farinha", 
            "Corante", 
            "Água", 
            "Açucar"
        ],
        answer: 1
    },
    {
        question: "Qual o nome do prato que é feito com arroz e feijão?",
        options: [
            "Feijoada",
            "Arroz com Feijão",
            "Arroz de Carreteiro",
            "Feijão Tropeiro"
        ],
        answer: 0
    },
    {
        question: "Qual a origem do brigadeiro?",
        options: [
            "Brasil",
            "Portugal",
            "EUA",
            "França"
        ],
        answer: 0
    }
]