// API service functions for posts and comments
const API_BASE_URL = 'http://localhost:3001/api';

export interface Post {
  _id: string;
  title: string;
  description: string;
  content: string;
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  _id: string;
  text: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostData {
  title: string;
  description: string;
  content: string;
}

export interface CreateCommentData {
  postId: string;
  text: string;
}

// Posts API
export const postsApi = {
  // Get all posts
  async getAll(): Promise<Post[]> {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data.data;
  },

  // Get post by ID
  async getById(id: string): Promise<Post> {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    const data = await response.json();
    return data.data;
  },

  // Create new post
  async create(postData: CreatePostData): Promise<Post> {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...postData,
        owner: 'anonymous' // Backend still requires owner field
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create post');
    }
    const data = await response.json();
    return data.data;
  },

  // Update post
  async update(id: string, postData: Partial<CreatePostData>): Promise<Post> {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...postData,
        owner: 'anonymous' // Backend still requires owner field
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to update post');
    }
    const data = await response.json();
    return data.data;
  },

  // Delete post
  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete post');
    }
  },
};

// Comments API
export const commentsApi = {
  // Get comments for a post
  async getByPostId(postId: string): Promise<Comment[]> {
    const response = await fetch(`${API_BASE_URL}/comments/post/${postId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    const data = await response.json();
    return data.data;
  },

  // Create new comment
  async create(commentData: CreateCommentData): Promise<Comment> {
    const response = await fetch(`${API_BASE_URL}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...commentData,
        owner: 'anonymous' // Backend still requires owner field
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create comment');
    }
    const data = await response.json();
    return data.data;
  },

  // Update comment
  async update(id: string, commentData: Partial<CreateCommentData>): Promise<Comment> {
    const response = await fetch(`${API_BASE_URL}/comments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...commentData,
        owner: 'anonymous' // Backend still requires owner field
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to update comment');
    }
    const data = await response.json();
    return data.data;
  },

  // Delete comment
  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/comments/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete comment');
    }
  },
};
