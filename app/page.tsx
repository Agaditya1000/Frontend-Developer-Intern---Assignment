'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuizCard from '@/components/QuizCard';
import Question from '@/components/Question';
import AnswerOption from '@/components/AnswerOption';
import NavigationArrows from '@/components/NavigationArrows';
import ProgressBar from '@/components/ProgressBar';
import DecorativeElements from '@/components/DecorativeElements';
import FinalResults from '@/components/FinalResults';
import CatPaw from '@/components/CatPaw';
import SpeechBubble from '@/components/SpeechBubble';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct answer
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What sound does a cat make?',
    options: ['Bhau-Bhau', 'Meow-Meow', 'Oink-Oink'],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: 'What would you probably find in your fridge?',
    options: ['Shoes', 'Ice Cream', 'Books'],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: 'Which animal is known as the king of the jungle?',
    options: ['Elephant', 'Lion', 'Tiger'],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: 'What color do you get when you mix red and blue?',
    options: ['Green', 'Purple', 'Orange'],
    correctAnswer: 1,
  },
];

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate score and show results
      calculateScore();
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quizQuestions.length) * 100);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const score = calculateScore();
    return <FinalResults score={score} onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-visible" style={{ minWidth: '1920px', minHeight: '1080px' }}>
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(107.96deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)',
          backdropFilter: 'blur(200px)'
        }}
      ></div>

      {/* Decorative Elements - First Page Only */}
      <AnimatePresence>
        {currentQuestionIndex === 0 && (
          <>
            <CatPaw key="cat-paw" />
            <SpeechBubble key="speech-bubble" />
          </>
        )}
      </AnimatePresence>

      {/* Main Content - Positioned */}
      <div className="absolute overflow-visible" style={{ top: '80px', left: '148px', zIndex: 10 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <QuizCard>
              {/* Header Section */}
              <div className="pt-[60px] px-[120px] flex flex-col items-center">
                <h1
                  className="text-center font-serif-display italic text-[100px] leading-[100px] tracking-tight mb-2"
                  style={{ fontFamily: 'DM Serif Display, serif' }}
                >
                  <span className="text-[#1A5C7A]">Test Your Knowledge</span>
                </h1>
                <div className="bg-white rounded-full px-8 py-2 mb-8 shadow-sm">
                  <p className="text-center text-[#15313D] text-lg font-medium">
                    Answer all questions to see your results
                  </p>
                </div>
                <ProgressBar
                  current={currentQuestionIndex + 1}
                  total={quizQuestions.length}
                />
              </div>

              {/* Question and Answers Section */}
              <div className="flex flex-col items-center mt-12">
                <Question
                  questionNumber={currentQuestion.id}
                  questionText={currentQuestion.question}
                />

                <div className="mt-6 space-y-4 w-full flex flex-col items-center">
                  {currentQuestion.options.map((option, index) => (
                    <AnswerOption
                      key={index}
                      text={option}
                      isSelected={selectedAnswer === index}
                      onClick={() => handleAnswerSelect(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <NavigationArrows
                onPrevious={handlePrevious}
                onNext={handleNext}
                canGoPrevious={currentQuestionIndex > 0}
                canGoNext={true}
              />

              {/* Decorative Elements */}
              <DecorativeElements />
            </QuizCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
