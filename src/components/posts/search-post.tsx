"use client";

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
    <>
      <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center">
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <input
            name="s"
            className="flex-1 rounded px-3 py-2 border border-gray-200 focus:outline-none"
            placeholder="Search posts..."
            type="search"
            value={term}
            onChange={handleInputChange}
          />
          <button
            className="bg-[#12336d] text-white px-4 py-2 rounded font-semibold hover:bg-blue-800 transition"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchPost;
