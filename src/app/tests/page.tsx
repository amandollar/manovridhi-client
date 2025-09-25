'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import TestCard from '@/components/TestCard';
import TestResult from '@/components/TestResult';
import { useAuth } from '@/contexts/AuthContext';
import testService, { TestMetadata, TestResult as TestResultType } from '@/services/testService';


export default function TestsPage() {
  const { user, isAuthenticated, loading } = useAuth();
  const [availableTests, setAvailableTests] = useState<TestMetadata[]>([]);
  const [testHistory, setTestHistory] = useState<TestResultType[]>([]);
  const [loadingTests, setLoadingTests] = useState(true);
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [testQuestions, setTestQuestions] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [testInProgress, setTestInProgress] = useState(false);
  const [testResult, setTestResult] = useState<TestResultType | null>(null);

  const getUserId = () => {
    // Use user email as identifier - much simpler and more reliable
    return user?.email ? btoa(user.email).replace(/[^a-zA-Z0-9]/g, '').substring(0, 16) : null;
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAvailableTests();
      fetchTestHistory();
    }
  }, [isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps


  const fetchAvailableTests = async () => {
    try {
      const tests = await testService.getAvailableTests('en');
      setAvailableTests(tests);
    } catch (error) {
      console.error('Error fetching tests:', error);
    } finally {
      setLoadingTests(false);
    }
  };

  const fetchTestHistory = async () => {
    const userId = getUserId();
    if (!userId) return;
    
    try {
      const history = await testService.getTestHistory(userId, 'en');
      setTestHistory(history);
    } catch (error) {
      console.error('Error fetching test history:', error);
    }
  };

  const startTest = async (testName: string) => {
    try {
      const questions = await testService.getTestQuestions(testName);
      setTestQuestions(questions);
      setSelectedTest(testName);
      setTestInProgress(true);
      setCurrentQuestion(0);
      setAnswers({});
      setTestResult(null);
    } catch (error) {
      console.error('Error starting test:', error);
    }
  };

  const submitTest = async () => {
    if (!selectedTest) return;
    
    try {
      const userId = getUserId();
      const result = await testService.submitTestAnswers(
        selectedTest,
        answers,
        'en',
        userId || undefined
      );
      
      setTestResult(result);
      setTestInProgress(false);
      fetchTestHistory(); // Refresh history
    } catch (error) {
      console.error('Error submitting test:', error);
    }
  };

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < testQuestions.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const resetTest = () => {
    setSelectedTest(null);
    setTestQuestions(null);
    setAnswers({});
    setCurrentQuestion(0);
    setTestInProgress(false);
    setTestResult(null);
  };

  const handleExitTest = () => {
    const answeredQuestions = Object.keys(answers).length;
    
    if (answeredQuestions > 0) {
      const confirmed = window.confirm(
        `You have answered ${answeredQuestions} question${answeredQuestions > 1 ? 's' : ''}. Are you sure you want to exit the test? Your progress will be lost.`
      );
      if (!confirmed) return;
    }
    
    resetTest();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading assessments...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Authentication Required
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
                Mental Health
                <span className="block font-medium text-emerald-600">Assessments</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light mb-8">
                Access professional-grade mental health assessments and track your well-being journey with personalized insights.
              </p>
              <Link
                href="/login"
                className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Sign In to Begin
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Only show when not in test or showing results */}
      {!testInProgress && !testResult && (
        <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                </svg>
                Professional Assessments
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
                Mental Health
                <span className="block font-medium text-emerald-600">Assessments</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light mb-8">
                Take evidence-based mental health assessments designed by professionals to understand your well-being and track your progress.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="text-sm text-gray-500">
                  Choose from <span className="font-medium text-emerald-600">{availableTests.length}</span> validated assessments
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Test in Progress Section */}
      {testInProgress && testQuestions && (
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              {/* Test Header */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {testQuestions.title?.en || testQuestions.testType}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">Mental Health Assessment</p>
                </div>
                <button
                  onClick={handleExitTest}
                  className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors"
                  title="Exit Assessment"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-3">
                  <span className="font-medium">Question {currentQuestion + 1} of {testQuestions.questions?.length || testQuestions.length}</span>
                  <span className="font-medium text-emerald-600">{Math.round(((currentQuestion + 1) / (testQuestions.questions?.length || testQuestions.length)) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${((currentQuestion + 1) / (testQuestions.questions?.length || testQuestions.length)) * 100}%`
                    }}
                  ></div>
                </div>
              </div>

              {/* Current Question */}
              <div className="mb-8">
                <div className="bg-emerald-50 rounded-xl p-6 mb-6 border border-emerald-100">
                  <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
                    {testQuestions.questions?.[currentQuestion]?.question?.en || 
                     testQuestions.questions?.[currentQuestion]?.text?.en}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {(testQuestions.questions?.[currentQuestion]?.options || testQuestions.options)?.map((option: any, index: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
                    <label
                      key={`option-${currentQuestion}-${index}-${option.score || option.value}`}
                      className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                        answers[testQuestions.questions?.[currentQuestion]?.id || currentQuestion] === option.score || 
                        answers[testQuestions.questions?.[currentQuestion]?.id || currentQuestion] === option.value
                          ? 'border-emerald-500 bg-emerald-50 shadow-sm' 
                          : 'border-gray-200 hover:border-emerald-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestion}`}
                        value={option.score || option.value}
                        checked={answers[testQuestions.questions?.[currentQuestion]?.id || currentQuestion] === (option.score || option.value)}
                        onChange={() => handleAnswerChange(
                          testQuestions.questions?.[currentQuestion]?.id || currentQuestion,
                          option.score || option.value
                        )}
                        className="sr-only"
                      />
                      <div className="flex items-center space-x-4 flex-1">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          answers[testQuestions.questions?.[currentQuestion]?.id || currentQuestion] === (option.score || option.value)
                            ? 'border-emerald-500 bg-emerald-500'
                            : 'border-gray-300'
                        }`}>
                          {answers[testQuestions.questions?.[currentQuestion]?.id || currentQuestion] === (option.score || option.value) && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className="text-gray-900 font-medium">
                          {option.text?.en || option.label?.en}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                <button
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                
                {currentQuestion === (testQuestions.questions?.length || testQuestions.length) - 1 ? (
                  <button
                    onClick={submitTest}
                    className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Submit Assessment
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Test Result Section */}
      {testResult && (
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <TestResult
              result={testResult}
              onTakeAnother={resetTest}
            />
          </div>
        </section>
      )}

      {/* Available Tests Section */}
      {!testInProgress && !testResult && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Choose Your Assessment
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Available
                <span className="font-medium text-emerald-600"> Tests</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Select from our collection of evidence-based mental health assessments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loadingTests ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <div key={`loading-${index}`} className="bg-white rounded-2xl shadow-lg p-8 animate-pulse border border-gray-100">
                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
                    <div className="h-12 bg-gray-200 rounded-xl"></div>
                  </div>
                ))
              ) : (
                availableTests.map((test, index) => (
                  <TestCard
                    key={`test-${test.testName}-${index}`}
                    test={test}
                    onStartTest={startTest}
                  />
                ))
              )}
            </div>
          </div>
        </section>
      )}

      {/* Test History Section */}
      {testHistory.length > 0 && !testInProgress && !testResult && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Your Progress
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Assessment
                <span className="font-medium text-emerald-600"> History</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Track your mental health journey with your previous assessment results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testHistory.map((result, index) => (
                <div key={`history-${result.testName}-${result.submittedAt}-${index}`} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-emerald-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{result.testName.toUpperCase()}</h3>
                        <p className="text-sm text-gray-500">{new Date(result.submittedAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Score</span>
                      <span className="font-semibold text-gray-900">{result.rawScore}/{result.maxPossibleScore}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Severity Level</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        result.severity?.level === 'minimal' ? 'bg-green-100 text-green-800' :
                        result.severity?.level === 'mild' ? 'bg-yellow-100 text-yellow-800' :
                        result.severity?.level === 'moderate' ? 'bg-orange-100 text-orange-800' :
                        result.severity?.level === 'severe' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {result.severity?.label?.en || result.severity?.level || 'Not Available'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Simple Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-emerald-400 mb-2">Manovridhi</h3>
            <p className="text-gray-400 text-sm">&copy; 2024 Manovridhi. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
