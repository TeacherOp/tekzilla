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
    <div className="bg-background rounded-xl border border-border p-4 shadow-sm">
      <form className="relative" onSubmit={handleSubmit}>
        <input
          name="s"
          className="w-full bg-transparent border-b border-border py-2 pr-10 focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
          placeholder="Search..."
          type="search"
          value={term}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Search className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default SearchPost;
