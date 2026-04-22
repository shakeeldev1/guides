import { guideSections } from "@/modules/guides/data/guides";
import { GuideSection } from "@/modules/guides/components/guide-section";
import { MobileBottomNav } from "@/modules/guides/components/mobile-bottom-nav";
import { SearchFilter } from "@/modules/guides/components/search-filter";
import { Sidebar } from "@/modules/guides/components/sidebar";
import { TopNavbar } from "@/modules/guides/components/top-navbar";

export function GuidesHome() {
  return (
    <div className="flex min-h-screen bg-[#f2f2f4]">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <TopNavbar />

        <main className="mx-auto w-full max-w-[1300px] flex-1 px-4 pb-28 pt-8 sm:px-6 md:px-8 lg:px-10">
          <section className="rounded-3xl border border-[#ebecf1] bg-[#f8f8f9] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:p-7">
            <h1 className="text-3xl font-semibold tracking-tight text-[#22232b]">Guides</h1>
            <p className="mt-1 text-sm text-[#7f8191]">
              View all content and browse guides on each and every topic.
            </p>
            <SearchFilter />

            {guideSections.map((section) => (
              <GuideSection key={section.id} section={section} />
            ))}
          </section>
        </main>
      </div>

      <MobileBottomNav />
    </div>
  );
}
