'use client';

import { Article } from '@/components/craft';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';

interface ShowMoreContentProps {
  htmlContent: string;
  /** Max height in pixels before content is collapsed */
  collapsedHeight?: number;
}

export default function ShowMoreContent({
  htmlContent,
  collapsedHeight = 900,
}: ShowMoreContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsToggle, setNeedsToggle] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setNeedsToggle(contentRef.current.scrollHeight > collapsedHeight);
    }
  }, [htmlContent, collapsedHeight]);

  return (
    <div>
      {/* Content wrapper with height clamp */}
      <div className="relative">
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight:
              isExpanded || !needsToggle ? 'none' : `${collapsedHeight}px`,
          }}
        >
          <Article
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="text-justify"
          />
        </div>

        {/* Gradient overlay when collapsed */}
        {needsToggle && !isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>

      {/* Show More / Show Less button — outside the relative container so it's always visible */}
      {needsToggle && (
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="gap-2"
          >
            {isExpanded ? (
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
          </Button>
        </div>
      )}
    </div>
  );
}
