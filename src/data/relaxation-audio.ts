export interface RelaxationAudio {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  filePath: string;
  thumbnail?: string;
  tags: string[];
}

export const relaxationAudio: RelaxationAudio[] = [
  // Anxiety Category
  {
    id: 'anxiety-breathing',
    title: 'Breathing Exercise',
    description: 'Guided breathing technique to reduce anxiety and promote calm',
    category: 'Anxiety',
    duration: '5 min',
    filePath: '/relaxation-audio/anxiety/breathing-exercise.mp3',
    tags: ['breathing', 'calm', 'anxiety-relief']
  },
  {
    id: 'anxiety-music',
    title: 'Calming Music',
    description: 'Soft melodies to help you relax and find peace',
    category: 'Anxiety',
    duration: '8 min',
    filePath: '/relaxation-audio/anxiety/calming-music.mp3',
    tags: ['music', 'calming', 'relaxing']
  },

  // Depression Category
  {
    id: 'depression-uplifting',
    title: 'Uplifting Music',
    description: 'Positive and energizing music to boost your mood',
    category: 'Depression',
    duration: '12 min',
    filePath: '/relaxation-audio/depression/uplifting-music.mp3',
    tags: ['uplifting', 'positive', 'energy']
  },
  {
    id: 'depression-motivational',
    title: 'Motivational Audio',
    description: 'Encouraging words and sounds to inspire and motivate',
    category: 'Depression',
    duration: '7 min',
    filePath: '/relaxation-audio/depression/motivational-audio.mp3',
    tags: ['motivation', 'encouragement', 'positive']
  },

  // Sleep Category
  {
    id: 'sleep-rain',
    title: 'Rain Sounds',
    description: 'Gentle rain sounds for deep sleep and relaxation',
    category: 'Sleep',
    duration: '30 min',
    filePath: '/relaxation-audio/sleep/rain-sounds.mp3',
    tags: ['rain', 'sleep', 'nature']
  },
  {
    id: 'sleep-white-noise',
    title: 'White Noise',
    description: 'Consistent white noise to block distractions and promote sleep',
    category: 'Sleep',
    duration: '60 min',
    filePath: '/relaxation-audio/sleep/white-noise.mp3',
    tags: ['white-noise', 'sleep', 'focus']
  },
  {
    id: 'sleep-meditation',
    title: 'Sleep Meditation',
    description: 'Guided meditation to help you drift off to sleep',
    category: 'Sleep',
    duration: '20 min',
    filePath: '/relaxation-audio/sleep/sleep-meditation.mp3',
    tags: ['meditation', 'sleep', 'guided']
  },

  // Mindfulness Category
  {
    id: 'mindfulness-meditation',
    title: 'Guided Meditation',
    description: 'Guided meditation for mindfulness and present moment awareness',
    category: 'Mindfulness',
    duration: '10 min',
    filePath: '/relaxation-audio/mindfullness/guided-meditation.mp3',
    tags: ['meditation', 'mindfulness', 'guided']
  },
  {
    id: 'mindfulness-body-scan',
    title: 'Body Scan',
    description: 'Progressive body scan meditation for relaxation and awareness',
    category: 'Mindfulness',
    duration: '15 min',
    filePath: '/relaxation-audio/mindfullness/body-scan.mp3',
    tags: ['body-scan', 'meditation', 'relaxation']
  },

  // General/Stress Relief
  {
    id: 'stress-ambient',
    title: 'Ambient Music',
    description: 'Peaceful ambient sounds for general stress relief',
    category: 'Self-Care',
    duration: '15 min',
    filePath: '/relaxation-audio/general/ambient-music.mp3',
    tags: ['ambient', 'stress-relief', 'calm']
  },
  {
    id: 'stress-relief',
    title: 'Stress Relief Sounds',
    description: 'Soothing sounds specifically designed to reduce stress',
    category: 'Self-Care',
    duration: '12 min',
    filePath: '/relaxation-audio/general/stress-relief.mp3',
    tags: ['stress-relief', 'soothing', 'calm']
  }
];

export const audioCategories = [
  'All',
  'Anxiety',
  'Depression', 
  'Sleep',
  'Mindfulness',
  'Self-Care'
];

// Helper function to get audio by category
export const getAudioByCategory = (category: string) => {
  if (category === 'All') {
    return relaxationAudio;
  }
  return relaxationAudio.filter(audio => audio.category === category);
};

// Helper function to get audio by blog category
export const getAudioByBlogCategory = (blogCategory: string) => {
  const categoryMap: { [key: string]: string } = {
    'Anxiety': 'Anxiety',
    'Depression': 'Depression',
    'Mindfulness': 'Mindfulness',
    'Resilience': 'Self-Care',
    'Self-Care': 'Self-Care',
    'Sleep': 'Sleep'
  };
  
  const audioCategory = categoryMap[blogCategory] || 'Self-Care';
  return getAudioByCategory(audioCategory);
};
