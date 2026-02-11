"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Tag {
  id: number;
  name: string;
  count?: number;
}

interface TagsListProps {
  tags: Tag[];
  initialVisible?: number;
}

export function TagsList({ tags, initialVisible = 12 }: TagsListProps) {
  const [showAll, setShowAll] = useState(false);
  const shouldShowMore = tags.length > initialVisible;

  // Sort tags alphabetically
  const sortedTags = [...tags].sort((a, b) => a.name.localeCompare(b.name));

  const visibleTags = showAll ? sortedTags : sortedTags.slice(0, initialVisible);

  return (
    <div className="bg-[#f8faff] rounded-2xl border border-[#eef2ff] p-8 shadow-sm">
      <h2 className="text-xl font-bold text-[#12336d] mb-6 relative inline-block">
        Tags
        <span className="absolute -bottom-2 left-0 w-8 h-[3px] bg-[#12336d]"></span>
        <span className="absolute -bottom-2 left-10 w-24 h-[3px] bg-[#6366f1]/30"></span>
      </h2>
      <div className="flex flex-wrap gap-2 mt-4">
        {visibleTags.map((tag: any) => (
          <a
            key={tag.id}
            href={`/blog?tag=${tag.id}`}
            className="inline-flex items-center bg-white text-[#12336d] px-4 py-2 rounded-lg text-xs font-bold shadow-sm border border-gray-100 hover:bg-[#6366f1] hover:text-white transition-all duration-200"
          >
            {tag.name}
          </a>
        ))}
      </div>
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
