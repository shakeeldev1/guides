import { SearchIcon } from "@/modules/guides/components/icons";

export function SearchFilter() {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
      <label className="flex h-11 w-full items-center gap-3 rounded-xl border border-[#e7e8ed] bg-white px-3 text-[#858797] shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:max-w-sm">
        <SearchIcon className="h-4 w-4" />
        <input
          type="text"
          placeholder="Search Guides"
          className="w-full border-none bg-transparent text-sm text-[#383942] outline-none placeholder:text-[#a0a3b0]"
        />
      </label>

      <button
        type="button"
        className="inline-flex h-11 items-center justify-center rounded-xl border border-[#e7e8ed] bg-white px-4 text-sm font-medium text-[#494b57] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
      >
        All Categories
        <svg viewBox="0 0 20 20" className="ml-2 h-4 w-4" fill="none" aria-hidden>
          <path d="M5 7L10 12L15 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
