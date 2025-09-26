# Manovridhi - Mental Health Platform

## SIH Project: Problem Statement 25092

**Smart India Hackathon 2025**  
**Category:** Software  
**Theme:** MedTech/BioTech/HealthTech

## Project Overview

Manovridhi is a comprehensive mental health platform designed to provide accessible, professional, and personalized mental health support. The platform addresses the critical need for digital mental health solutions by offering assessment tools, relaxation resources, professional connections, and AI-powered assistance.

## Problem Statement

Mental health awareness and access to professional support remain significant challenges in India. Many individuals struggle with:
- Limited access to mental health professionals
- Lack of awareness about mental health conditions
- Stigma surrounding mental health discussions
- Difficulty in tracking mental health progress
- Limited availability of relaxation and stress management resources

## Solution

Manovridhi provides a holistic digital platform that:
- Offers comprehensive mental health assessments
- Provides relaxation audio and meditation resources
- Connects users with mental health professionals
- Features AI-powered chatbot for immediate support
- Enables community support and sharing
- Tracks user progress and provides personalized insights

## Key Features

### 1. User Authentication System
- Secure user registration and login
- Role-based access (Users and Counsellors)
- Protected routes and content

### 2. Mental Health Assessments
- Comprehensive assessment tools
- Progress tracking and history
- Personalized recommendations
- Detailed result analysis

### 3. Relaxation Resources
- Categorized audio content (Anxiety, Depression, Sleep, Mindfulness)
- High-quality meditation and relaxation tracks
- User-specific access based on authentication
- Audio player with controls and progress tracking

### 4. Professional Connection
- Connect with certified mental health professionals
- Counsellor dashboard and management
- Appointment scheduling capabilities

### 5. AI Assistant
- 24/7 AI-powered mental health support
- Intelligent conversation capabilities
- Immediate response to user queries

### 6. Community Support
- User community features
- Support group discussions
- Anonymous sharing options

### 7. Blog and Resources
- Educational mental health content
- Markdown-based article rendering
- Professional insights and guides

## Technology Stack

### Frontend
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript** - Type safety and development experience
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Modern icon library

### Key Libraries
- **react-hot-toast** - Toast notifications
- **react-markdown** - Markdown rendering
- **remark-gfm** - GitHub Flavored Markdown support
- **rehype-highlight** - Syntax highlighting
- **@google/generative-ai** - AI integration

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundling

## Project Structure

```
manovridhi-client/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   ├── blog/              # Blog pages
│   │   ├── dashboard/         # User dashboard
│   │   ├── login/             # Authentication pages
│   │   ├── signup/
│   │   ├── relaxation/        # Relaxation audio
│   │   └── tests/             # Assessment pages
│   ├── components/            # Reusable components
│   │   ├── relaxation/        # Audio-related components
│   │   ├── Navbar.tsx
│   │   ├── Chatbot.tsx
│   │   └── TestCard.tsx
│   ├── contexts/              # React contexts
│   │   └── AuthContext.tsx
│   ├── data/                  # Static data
│   │   ├── blogs.ts
│   │   └── relaxation-audio.ts
│   ├── services/              # API services
│   │   └── testService.ts
│   └── lib/                   # Utility functions
│       └── api.ts
├── public/                    # Static assets
│   └── relaxation-audio/      # Audio files
└── package.json
```

## Installation and Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd manovridhi-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   GOOGLE_AI_API_KEY=your_google_ai_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the application**
   Navigate to `http://localhost:3000` in your browser

### Build for Production

```bash
npm run build
npm start
```

## Usage Guide

### For End Users

1. **Registration/Login**
   - Create an account or sign in
   - Choose user type (General User or Counsellor)

2. **Take Assessments**
   - Access mental health assessments
   - Complete questionnaires
   - View detailed results and recommendations

3. **Relaxation Resources**
   - Browse categorized audio content
   - Listen to meditation and relaxation tracks
   - Track your relaxation progress

4. **AI Assistant**
   - Chat with the AI assistant for immediate support
   - Get mental health guidance and resources

### For Counsellors

1. **Counsellor Dashboard**
   - Access specialized dashboard
   - Manage client interactions
   - View assessment results

2. **Professional Tools**
   - Access professional resources
   - Connect with clients
   - Track client progress

## API Integration

The platform integrates with backend services for:
- User authentication and management
- Assessment data processing
- AI chatbot responses
- Audio content delivery
- Professional connections

## Security Features

- Secure authentication with JWT tokens
- Protected routes and API endpoints
- User data encryption
- Role-based access control
- Input validation and sanitization

## Performance Optimizations

- Lazy loading for components
- Image optimization
- Code splitting
- Memoization for expensive operations
- Efficient state management

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Write clean, readable code
- Add proper error handling
- Include responsive design considerations

## Testing

```bash
# Run linting
npm run lint

# Run type checking
npx tsc --noEmit
```

## Deployment

The application is configured for deployment on:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## Future Enhancements

- Mobile application development
- Advanced AI features
- Video consultation integration
- Multi-language support
- Advanced analytics dashboard
- Integration with wearable devices

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Team

- **Frontend Development:** React/Next.js implementation
- **UI/UX Design:** User experience and interface design
- **Backend Integration:** API development and database management
- **AI Integration:** Chatbot and assessment intelligence

## Contact

For questions, support, or collaboration opportunities, please contact the development team.

---

**Note:** This project is developed for the Smart India Hackathon 2025 and addresses Problem Statement 25092 in the MedTech/BioTech/HealthTech category.