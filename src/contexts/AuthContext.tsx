'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  _id: string;
  name: string;
  email: string;
  accountType: 'user' | 'counsellor';
  role?: string;
  isVerified?: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string, userType?: string) => Promise<boolean>;
  signup: (userData: SignupData) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: 'user' | 'counsellor';
  phone?: string;
  specialization?: string;
  experience?: number;
  degree?: string;
  license?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check if user is authenticated on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem('accessToken');
        const userData = localStorage.getItem('userData');
        
        if (token && userData) {
          try {
            // Simple JWT decode to check if token is expired
            const payload = JSON.parse(atob(token.split('.')[1]));
            const currentTime = Date.now() / 1000;
            
            if (payload.exp && payload.exp > currentTime) {
              // Token is valid, restore user data
              const user = JSON.parse(userData);
              setUser(user);
            } else {
              localStorage.removeItem('accessToken');
              localStorage.removeItem('userData');
            }
          } catch {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userData');
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userData');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string, userType?: string): Promise<boolean> => {
    try {
      setLoading(true);
      console.log('Attempting login with:', { email, userType });
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, userType }),
      });

      console.log('Login response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Network error' }));
        console.error('Login failed:', errorData.message);
        return false;
      }

      const data = await response.json();
      console.log('Login successful:', data);
      localStorage.setItem('accessToken', data.tokens.accessToken);
      localStorage.setItem('userData', JSON.stringify(data.user));
      setUser(data.user);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData: SignupData): Promise<boolean> => {
    try {
      setLoading(true);
      
      // Determine the correct API endpoint based on user type
      const isCounsellor = userData.userType === 'counsellor';
      const apiEndpoint = isCounsellor 
        ? `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/counsellors/register`
        : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/users/register`;

      // Prepare data for backend - different fields for users vs counsellors
      interface SignupPayload {
        name: string;
        email: string;
        password: string;
        phone: string | null;
        role?: string;
        portfolio?: string;
        degree?: string;
      }
      
      let signupPayload: SignupPayload = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        phone: userData.phone || null,
      };

      if (isCounsellor) {
        // Counsellor-specific fields - portfolio is required
        if (!userData.specialization) {
          console.error('Specialization is required for counsellor signup');
          return false;
        }
        
        // Map degree to valid enum value - use the actual enum value
        // The enum value for Others is "others" (lowercase)
        const degreeValue = userData.degree && userData.degree.trim() !== '' 
          ? userData.degree 
          : 'others';
        
        signupPayload = {
          ...signupPayload,
          portfolio: userData.specialization, // Portfolio is required
          degree: degreeValue, // Map degree field to valid enum value
          role: 'counsellor' // Match backend enum value
        };
      } else {
        // User-specific fields
        signupPayload = {
          ...signupPayload,
          role: 'user' // Match backend enum value
        };
      }

      console.log('Signup payload:', signupPayload);
      console.log('API endpoint:', apiEndpoint);
      console.log('Degree value being sent:', signupPayload.degree);

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupPayload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Network error' })) as { message: string; errors?: Array<{ path?: string[]; message: string }> };
        console.error('Signup failed:', errorData);
        
        // Show more detailed error information
              if (errorData.errors && Array.isArray(errorData.errors)) {
                const errorMessages = errorData.errors.map((err: { path?: string[]; message: string }) => `${err.path?.join('.')}: ${err.message}`).join(', ');
                console.error('Validation errors:', errorMessages);
              }
        
        return false;
      }

      const result = await response.json();
      console.log('Signup successful:', result);
      
      // Auto-login after successful signup
      return await login(userData.email, userData.password, userData.userType);
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userData');
    setUser(null);
    router.push('/');
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
