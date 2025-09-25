# Vriddhi AI Chatbot Setup

## Getting Started with Gemini AI

To make the Vriddhi AI chatbot functional, you need to set up a Gemini API key.

### Step 1: Get Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### Step 2: Set Up Environment Variables

1. Create a `.env.local` file in the `manovridhi-client` directory
2. Add your API key:

```env
GEMINI_API_KEY=your_actual_api_key_here
```

### Step 3: Restart the Development Server

```bash
npm run dev
```

## Features

- **Mental Health Focus**: Only responds to mental health related questions
- **Conversation History**: Maintains context throughout the chat
- **Safety Guidelines**: Redirects non-mental health topics appropriately
- **Professional Tone**: Warm, empathetic, and evidence-based responses
- **Crisis Awareness**: Includes appropriate disclaimers and crisis resources

## Mental Health Topics Covered

- Anxiety and stress management
- Depression and mood disorders
- Mindfulness and meditation
- Therapy and counseling
- Self-care strategies
- Sleep and wellness
- Relationships and social health
- Work and academic stress
- And many more mental health topics

## Safety Features

- Redirects non-mental health questions to mental health topics
- Includes crisis resource information when appropriate
- Maintains professional boundaries
- Encourages professional help for serious concerns

## Troubleshooting

If the chatbot isn't working:

1. Check that your API key is correctly set in `.env.local`
2. Ensure the development server is restarted after adding the API key
3. Check the browser console for any error messages
4. Verify your Gemini API key has the necessary permissions

## Note

The chatbot is designed specifically for mental health support and will redirect conversations about other topics back to mental health discussions. This ensures users receive appropriate, focused support for their mental wellness journey.
