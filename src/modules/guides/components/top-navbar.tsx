import { BellIcon } from "@/modules/guides/components/icons";

export function TopNavbar() {
  return (
    <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-[#ececf0] bg-[#f6f6f7]/95 px-4 backdrop-blur md:px-7">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#ffb44c] to-[#f37b2a] md:hidden" />
        <p className="text-lg font-semibold tracking-tight text-[#202126]">Guides</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="relative rounded-xl p-2 text-[#6f7180] transition hover:bg-white hover:text-[#1f1f23]"
          aria-label="Notifications"
        >
          <BellIcon className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full border border-white bg-[#ff4e3c]" />
        </button>

        <div className="flex items-center gap-2 rounded-xl bg-white px-2 py-1.5 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
          <div className="text-right leading-tight">
            <p className="text-xs font-semibold text-[#2b2c32]">M. Shehroz</p>
            <p className="text-[11px] text-[#8b8d99]">Admin</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#e5c8a5] via-[#f5d9b6] to-[#c89960]" />
        </div>
      </div>
    </header>
  );
}
