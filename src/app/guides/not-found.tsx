import Link from "next/link";
import { Sidebar } from "@/modules/guides/components/sidebar";
import { TopNavbar } from "@/modules/guides/components/top-navbar";
import { MobileBottomNav } from "@/modules/guides/components/mobile-bottom-nav";

export default function NotFound() {
  return (
    <div className="flex min-h-screen bg-[#f2f2f4]">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <TopNavbar />

        <main className="mx-auto w-full max-w-[1400px] flex-1 px-4 pb-28 pt-8 sm:px-6 md:px-8 lg:px-10">
          <div className="rounded-2xl border border-[#ececf0] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-center sm:p-16">
            <h1 className="mb-4 text-4xl font-bold text-[#1f1f23]">404</h1>
            <p className="mb-2 text-xl text-[#5f6170]">Guide not found</p>
            <p className="mb-8 text-[#8b8d99]">
              The guide you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Link
              href="/"
              className="inline-flex h-11 items-center rounded-lg bg-[#f7921f] px-6 font-semibold text-white transition hover:bg-[#e88416]"
            >
              Back to Guides
            </Link>
          </div>
        </main>
      </div>

      <MobileBottomNav />
    </div>
  );
}
