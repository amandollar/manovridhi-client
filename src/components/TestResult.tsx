interface TestResultProps {
  result: {
    testName: string;
    rawScore: number;
    maxPossibleScore: number;
    percentile: number;
    severity: {
      level: string;
      label: {
        en: string;
        ks: string;
      };
    };
    recommendations?: string[];
    submittedAt: string;
  };
  onTakeAnother: () => void;
}

export default function TestResult({ result, onTakeAnother }: TestResultProps) {
  const getSeverityColor = (level: string) => {
    if (!level) return 'text-gray-600 bg-gray-100';
    
    switch (level.toLowerCase()) {
      case 'low':
      case 'minimal':
        return 'text-green-600 bg-green-100';
      case 'mild':
      case 'moderate':
        return 'text-yellow-600 bg-yellow-100';
      case 'moderately severe':
      case 'severe':
        return 'text-orange-600 bg-orange-100';
      case 'severe depression':
      case 'high':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Test Results</h2>
        <span className="text-sm text-gray-500">
          {new Date(result.submittedAt).toLocaleDateString()}
        </span>
      </div>

      {/* Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Score</h3>
              <p className="text-3xl font-bold text-indigo-600">
                {result.rawScore}
              </p>
              <p className="text-sm text-gray-600">
                out of {result.maxPossibleScore}
              </p>
            </div>
            <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Severity</h3>
              {result.severity ? (
                <p className={`text-lg font-semibold px-3 py-1 rounded-full inline-block ${getSeverityColor(result.severity.level)}`}>
                  {result.severity.label?.en || result.severity.level || 'Not specified'}
                </p>
              ) : (
                <p className="text-lg font-semibold px-3 py-1 rounded-full inline-block text-gray-600 bg-gray-100">
                  Not available
                </p>
              )}
            </div>
            <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      {/* Recommendations */}
      {result.recommendations && result.recommendations.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Recommendations
          </h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <ul className="space-y-3">
              {result.recommendations.map((recommendation, index) => (
                <li key={`recommendation-${index}-${recommendation.slice(0, 20)}`} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 text-sm font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{recommendation}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <div className="text-sm text-gray-500">
          <p>Test completed on {new Date(result.submittedAt).toLocaleString()}</p>
        </div>
        <button
          onClick={onTakeAnother}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          Take Another Test
        </button>
      </div>
    </div>
  );
}
