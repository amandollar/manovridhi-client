import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Mental health focused system prompt
const SYSTEM_PROMPT = `You are Vriddhi AI, a mental health assistant. Keep responses SHORT and helpful.

RULES:
- ONLY answer mental health questions
- Keep responses under 2-3 sentences
- Be warm but brief
- Redirect non-mental health topics to mental health
- No medical advice - suggest professional help for serious concerns
- End with encouragement or a simple tip

Stay concise and supportive.`;

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if the message is mental health related
    const mentalHealthKeywords = [
      'anxiety', 'depression', 'stress', 'mental health', 'therapy', 'counseling',
      'mindfulness', 'meditation', 'self-care', 'wellness', 'emotions', 'feelings',
      'panic', 'worry', 'sad', 'angry', 'frustrated', 'overwhelmed', 'burnout',
      'trauma', 'ptsd', 'bipolar', 'ocd', 'adhd', 'autism', 'eating disorder',
      'addiction', 'substance', 'alcohol', 'drugs', 'suicide', 'self-harm',
      'crisis', 'emergency', 'help', 'support', 'coping', 'recovery', 'healing',
      'psychologist', 'psychiatrist', 'medication', 'treatment', 'diagnosis',
      'symptoms', 'mental illness', 'disorder', 'condition', 'mood', 'behavior',
      'thoughts', 'cognitive', 'behavioral', 'cbt', 'dbt', 'mindfulness',
      'breathing', 'relaxation', 'sleep', 'insomnia', 'nightmares', 'dreams',
      'relationships', 'family', 'friends', 'social', 'isolation', 'loneliness',
      'work', 'job', 'career', 'school', 'college', 'university', 'studying',
      'exam', 'test', 'performance', 'pressure', 'expectations', 'goals',
      'motivation', 'energy', 'fatigue', 'tired', 'exhausted', 'rest',
      'exercise', 'fitness', 'diet', 'nutrition', 'health', 'body', 'weight',
      'confidence', 'self-esteem', 'self-worth', 'identity', 'purpose',
      'meaning', 'values', 'beliefs', 'spirituality', 'religion', 'faith'
    ];

    const messageLower = message.toLowerCase();
    const isMentalHealthRelated = mentalHealthKeywords.some(keyword => 
      messageLower.includes(keyword)
    );

    if (!isMentalHealthRelated) {
      return NextResponse.json({
        response: "I'm Vriddhi AI, your mental health companion. I'm here to help with mental health topics like anxiety, depression, stress management, mindfulness, therapy, self-care, and emotional wellness. How can I support your mental health journey today?",
        isRedirect: true
      });
    }

    // Build conversation context
    let conversationContext = SYSTEM_PROMPT + "\n\nConversation History:\n";
    conversationHistory.forEach((msg: { role: string; content: string }) => {
      conversationContext += `${msg.role}: ${msg.content}\n`;
    });
    conversationContext += `\nUser: ${message}\nVriddhi AI:`;

    const result = await model.generateContent(conversationContext);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      response: text,
      isRedirect: false
    });

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return NextResponse.json(
      { 
        error: 'Sorry, I encountered an error. Please try again. If you\'re experiencing a mental health crisis, please contact emergency services or a mental health professional immediately.',
        isRedirect: false
      },
      { status: 500 }
    );
  }
}
