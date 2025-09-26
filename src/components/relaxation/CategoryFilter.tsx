'use client';

import { audioCategories } from '@/data/relaxation-audio';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {audioCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedCategory === category
              ? 'bg-green-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
