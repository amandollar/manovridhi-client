'use client';

import { useState, useEffect } from 'react';
import { Play, Clock, Headphones } from 'lucide-react';
import AudioPlayer from './AudioPlayer';
import { RelaxationAudio } from '@/data/relaxation-audio';

interface AudioGridProps {
  audioList: RelaxationAudio[];
  title?: string;
  showCategory?: boolean;
}

export default function AudioGrid({ audioList, title, showCategory = false }: AudioGridProps) {
  const [selectedAudio, setSelectedAudio] = useState<RelaxationAudio | null>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Refresh mechanism for better UX
  useEffect(() => {
    setIsRefreshing(true);
    const timer = setTimeout(() => {
      setIsRefreshing(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [audioList]);

  const handlePlayAudio = (audio: RelaxationAudio) => {
    setSelectedAudio(audio);
    setIsPlayerOpen(true);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setSelectedAudio(null);
  };

  if (audioList.length === 0) {
    return (
      <div className="text-center py-8">
        <Headphones className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">No relaxation audio available for this category.</p>
      </div>
    );
  }

  return (
    <>
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">Choose a relaxation audio to help you unwind and find peace.</p>
        </div>
      )}

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-200 ${isRefreshing ? 'opacity-50' : 'opacity-100'}`}>
        {audioList.map((audio) => (
          <div
            key={audio.id}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            onClick={() => handlePlayAudio(audio)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-white" />
                  </div>
                  {showCategory && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      {audio.category}
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {audio.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {audio.description}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{audio.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    <span>Click to play</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {audio.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {audio.tags.length > 2 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{audio.tags.length - 2}
                  </span>
                )}
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayAudio(audio);
                }}
                className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors group-hover:scale-110 transform duration-200"
              >
                <Play className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Audio Player Modal */}
      {isPlayerOpen && selectedAudio && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="relative">
            <AudioPlayer audio={selectedAudio} onClose={handleClosePlayer} />
          </div>
        </div>
      )}
    </>
  );
}
