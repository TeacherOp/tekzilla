"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPost = () => {
  const [term, setTerm] = useState("");
  const router = useRouter();

  // Get search param from URL on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const initialSearch = params.get("search") || "";
      setTerm(initialSearch);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (term.trim() !== "") {
      router.push(`/blog?search=${encodeURIComponent(term)}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    // If search box is cleared via 'x', update URL
    if (e.target.value === "") {
      router.push("/blog");
    }
  };

  return (
    <div className="bg-[#f8faff] rounded-2xl border border-[#eef2ff] p-8 shadow-sm">
      <h2 className="text-xl font-bold text-[#12336d] mb-4 relative inline-block">
        Search
        <span className="absolute -bottom-2 left-0 w-8 h-[3px] bg-[#12336d]"></span>
        <span className="absolute -bottom-2 left-10 w-24 h-[3px] bg-[#6366f1]/30"></span>
      </h2>
      <form className="relative mt-8" onSubmit={handleSubmit}>
        <input
          name="s"
          className="w-full bg-transparent border-b border-gray-200 py-3 pr-10 focus:outline-none focus:border-[#6366f1] transition-colors text-gray-600 placeholder:text-gray-400"
          placeholder="Searching..."
          type="search"
          value={term}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#6366f1] hover:text-[#4f46e5] transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default SearchPost;
