import { TestMetadata } from '@/services/testService';

interface TestCardProps {
  test: TestMetadata;
  onStartTest: (testName: string) => void;
}

export default function TestCard({ test, onStartTest }: TestCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-emerald-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {test.title}
          </h3>
          {test.category && (
            <span className="bg-emerald-100 text-emerald-700 text-xs font-medium px-2 py-1 rounded">
              {test.category}
            </span>
          )}
        </div>
      </div>
      
      {/* Description */}
      {test.description && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {test.description}
        </p>
      )}
      
      {/* Test Info */}
      <div className="flex items-center text-xs text-gray-500 mb-6 space-x-4">
        <span>{test.totalQuestions} questions</span>
        <span>•</span>
        <span>{test.estimatedTime}</span>
      </div>
      
      {/* Start Button */}
      <button
        onClick={() => onStartTest(test.testName)}
        className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
      >
        Start Assessment
      </button>
    </div>
  );
}
