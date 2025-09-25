const TESTS_API_URL = 'http://localhost:4000/api/v1';

export interface TestQuestion {
  id: number;
  question: {
    en: string;
    ks: string;
  };
  options: Array<{
    text: {
      en: string;
      ks: string;
    };
    score: number;
  }>;
}

export interface TestData {
  testType: string;
  title: {
    en: string;
    ks: string;
  };
  instructions: {
    en: string;
    ks: string;
  };
  options: Array<{
    value: number;
    label: {
      en: string;
      ks: string;
    };
  }>;
  questions: TestQuestion[];
}

export interface TestResult {
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
}

export interface TestMetadata {
  testName: string;
  title: string;
  description?: string;
  totalQuestions: number;
  estimatedTime: string;
  category?: string;
}

class TestService {
  async getAvailableTests(language: string = 'en'): Promise<TestMetadata[]> {
    try {
      const response = await fetch(`${TESTS_API_URL}/answers/tests?language=${language}`);
      const data = await response.json();
      
      if (data.success) {
        return data.data.tests.map((test: any) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
          testName: test.testType, // Use testType as testName
          title: test.title,
          description: test.description,
          totalQuestions: test.totalQuestions,
          estimatedTime: test.estimatedTime || '5-10 minutes',
          category: test.category || 'Mental Health'
        }));
      }
      throw new Error('Failed to fetch tests');
    } catch (error) {
      console.error('Error fetching available tests:', error);
      throw error;
    }
  }

  // Map test types to file names
  private getTestFileName(testType: string): string {
    if (!testType) {
      console.error('getTestFileName called with undefined testType');
      return 'phq9'; // fallback
    }
    
    const mapping: Record<string, string> = {
      'MBTI': '16per',
      'AUDIT': 'audit',
      'BRS': 'brs',
      'GAD-7': 'gad7',
      'GHQ-12': 'ghq12',
      'ISI': 'isi',
      'K10': 'k10',
      'MBI-SS': 'mbiss',
      'PHQ-9': 'phq9',
      'PSS-10': 'pss10',
      'UCLA Loneliness Scale': 'ucla',
      'WHO-5': 'who5'
    };
    
    const fileName = mapping[testType] || testType.toLowerCase();
    return fileName;
  }

  async getTestQuestions(testName: string): Promise<TestData> {
    try {
      const fileName = this.getTestFileName(testName);
      const response = await fetch(`${TESTS_API_URL}/questions/${fileName}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // The questions endpoint returns {data: ...} format
      if (data.data) {
        return data.data;
      }
      throw new Error('Invalid response format from questions endpoint');
    } catch (error) {
      console.error('Error fetching test questions:', error);
      throw error;
    }
  }

  async submitTestAnswers(
    testName: string, 
    answers: Record<string, number>, 
    language: string = 'en',
    userId?: string
  ): Promise<TestResult> {
    try {
      const fileName = this.getTestFileName(testName);
      
      // Use provided userId or proceed without it
      const anonymousUserId = userId || null;
      
      const response = await fetch(`${TESTS_API_URL}/answers/${fileName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers,
          language,
          userId: anonymousUserId
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        return data.data.testResults;
      }
      throw new Error(data.error || 'Failed to submit test');
    } catch (error) {
      console.error('Error submitting test:', error);
      throw error;
    }
  }

  async getTestHistory(userId: string, language: string = 'en'): Promise<TestResult[]> {
    try {
      const response = await fetch(`${TESTS_API_URL}/answers/user/${userId}?language=${language}`);
      const data = await response.json();
      
      if (data.success) {
        return data.data.testHistory || [];
      }
      throw new Error('Failed to fetch test history');
    } catch (error) {
      console.error('Error fetching test history:', error);
      throw error;
    }
  }

  async validateAnswers(testName: string, answers: Record<string, number>): Promise<boolean> {
    try {
      const response = await fetch(`${TESTS_API_URL}/answers/${testName}/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers }),
      });
      
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error validating answers:', error);
      return false;
    }
  }

  async generateTestId(): Promise<string> {
    try {
      const response = await fetch(`http://localhost:4000/api/generate-test-id`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success && data.data?.anonymousId) {
        return data.data.anonymousId;
      }
      throw new Error('Invalid response format from generate-test-id endpoint');
    } catch (error) {
      console.error('Error generating test ID:', error);
      throw error;
    }
  }

  private async generateAnonymousId(): Promise<string> {
    try {
      const response = await fetch(`http://localhost:4000/api/generate-test-id`);
      const data = await response.json();
      
      if (data.success) {
        return data.data.anonymousId;
      }
      throw new Error('Failed to generate anonymous ID');
    } catch (error) {
      console.error('Error generating anonymous ID:', error);
      throw error;
    }
  }

  async checkHealth(): Promise<boolean> {
    try {
      const response = await fetch(`${TESTS_API_URL}/health`);
      const data = await response.json();
      return data.status === 'healthy';
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }
}

const testService = new TestService();
export default testService;
