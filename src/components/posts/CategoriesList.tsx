"use client";

import { ChevronDown, ChevronUp, MoveRight } from "lucide-react";
import { useState } from "react";

interface Category {
  id: number;
  name: string;
  count: number;
}

interface CategoriesListProps {
  categories: Category[];
  initialVisible?: number;
}

export function CategoriesList({
  categories,
  initialVisible = 5,
}: CategoriesListProps) {
  const [showAll, setShowAll] = useState(false);
  const shouldShowMore = categories.length > initialVisible;

  const visibleCategories = showAll
    ? categories
    : categories.slice(0, initialVisible);

  return (
    <div className="bg-[#f8faff] rounded-2xl border border-[#eef2ff] p-8 shadow-sm">
      <h2 className="text-xl font-bold text-[#12336d] mb-6 relative inline-block">
        Categories
        <span className="absolute -bottom-2 left-0 w-8 h-[3px] bg-[#12336d]"></span>
        <span className="absolute -bottom-2 left-10 w-24 h-[3px] bg-[#6366f1]/30"></span>
      </h2>
      <ul className="space-y-1 mt-4">
        {visibleCategories.map((cat: any) => (
          <li key={cat.id}>
            <a
              href={`/blog?category=${cat.id}`}
              className="group flex justify-between items-center py-3 border-b border-gray-100 transition-colors text-gray-700 hover:text-[#6366f1]"
            >
              <span className="font-semibold text-sm transition-transform group-hover:translate-x-1 duration-200">
                {cat.name}
              </span>
              <MoveRight className="w-4 h-4 text-gray-400 group-hover:text-[#6366f1] transition-colors" />
            </a>
          </li>
        ))}
      </ul>
      {shouldShowMore && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 flex items-center gap-1 text-sm font-bold text-[#12336d] hover:text-[#6366f1] transition-colors"
        >
          {showAll ? (
            <>
              Show Less
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show More
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
