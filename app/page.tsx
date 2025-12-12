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
    question: 'What color are bananas?',
    options: ['Blue', 'Yellow', 'Red'],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: 'How many stars are in the sky?',
    options: ['Two', 'Infinite', 'One Hundred'],
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
    <div className="relative overflow-hidden mx-auto bg-white" style={{ width: '1920px', height: '1080px' }}>
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(107.96deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)',
          backdropFilter: 'blur(200px)'
        }}
      ></div>

      {/* Decorative Elements - Best of Luck Image */}
      {currentQuestionIndex === 0 && (
        <motion.img
          src="/images/best of luck.png"
          alt="Best of Luck"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute"
          style={{
            width: '300px',
            height: '120px',
            top: '725px',
            left: '30.09px',

            zIndex: 20
          }}
        />
      )}

      {/* Decorative Elements - Cat Paw */}
      <AnimatePresence>
        {currentQuestionIndex === 0 && (
          <img
            src="/images/cat-paw.gif"
            alt="Cat Paw"
            style={{
              width: '173.45px',
              height: '173.45px',
              position: 'absolute',
              top: '794.55px',
              left: '240.55px',
              opacity: 1,
              zIndex: 20
            }}
          />
        )}
      </AnimatePresence>

      {/* Main Content - Positioned */}
      <div className="absolute overflow-visible" style={{ top: '80px', left: '147.5px', zIndex: 10 }}>
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
                  className="text-center font-serif-display italic tracking-tight mb-2 flex items-center justify-center"
                  style={{
                    position: 'absolute',
                    width: '919px',
                    height: '102px',
                    top: '126px',
                    left: '353px',
                    fontFamily: 'DM Serif Display, serif',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    fontSize: '90px',
                    lineHeight: '24px',
                    letterSpacing: '-4px',
                    background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    zIndex: 10
                  }}
                >
                  Test Your Knowledge
                </h1>
                <div
                  className="bg-white rounded-[8px] flex items-center justify-center shadow-sm"
                  style={{
                    position: 'absolute',
                    width: '422px',
                    height: '45px',
                    top: '232px',
                    left: '601px',
                    padding: '10px 31px',
                    zIndex: 10
                  }}
                >
                  <p className="text-center text-[#15313D] text-lg font-medium whitespace-nowrap">
                    Answer all questions to see your results
                  </p>
                </div>
                <div style={{ position: 'absolute', top: '298px', left: '323px', width: '896px', zIndex: 10 }}>
                  <ProgressBar
                    current={currentQuestionIndex + 1}
                    total={quizQuestions.length}
                  />
                </div>
              </div>

              {/* Question and Answers Section */}
              <div style={{ position: 'absolute', top: '351px', left: '323px', width: '896px', zIndex: 10 }}>
                <Question
                  questionNumber={currentQuestion.id}
                  questionText={currentQuestion.question}
                />
              </div>

              <div
                className="flex flex-col gap-[14px] absolute"
                style={{
                  top: '443px',
                  left: '323px',
                  width: '897px',
                  height: '262px'
                }}
              >
                {currentQuestion.options.map((option, index) => (
                  <AnswerOption
                    key={index}
                    text={option}
                    isSelected={selectedAnswer === index}
                    onClick={() => handleAnswerSelect(index)}
                  />
                ))}
              </div>




              {/* Decorative Elements */}
              <DecorativeElements />
            </QuizCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation - Positioned Absolutely on Page */}
      <div style={{ position: 'absolute', top: '855px', left: '1292px', width: '116px', height: '50px', zIndex: 30 }}>
        <NavigationArrows
          onPrevious={handlePrevious}
          onNext={handleNext}
          canGoPrevious={currentQuestionIndex > 0}
          canGoNext={true}
        />
      </div>
    </div >
  );
}
