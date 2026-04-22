import { Sidebar } from "@/modules/guides/components/sidebar";
import { TopNavbar } from "@/modules/guides/components/top-navbar";
import { MobileBottomNav } from "@/modules/guides/components/mobile-bottom-nav";
import { Breadcrumb } from "@/modules/guides/components/breadcrumb";
import { HeroSection } from "@/modules/guides/components/hero-section";
import { ContentSections } from "@/modules/guides/components/content-sections";
import { RecommendedGuides } from "@/modules/guides/components/recommended-guides";
import { DownloadButton } from "@/modules/guides/components/download-button";
import type { GuideDetail } from "@/modules/guides/types/detail";

type GuideDetailPageProps = {
  guide: GuideDetail;
};

export function GuideDetailPage({ guide }: GuideDetailPageProps) {
  return (
    <div className="flex min-h-screen bg-[#f2f2f4]">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <TopNavbar />

        <main className="mx-auto w-full max-w-[1400px] flex-1 px-4 pb-28 pt-8 sm:px-6 md:px-8 lg:px-10">
          <Breadcrumb
            items={[
              { label: "Guides", href: "/" },
              { label: guide.title },
            ]}
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <HeroSection
                image={guide.image}
                title={guide.title}
                description={guide.description}
                author={guide.author}
                date={guide.date}
                tags={guide.tags}
              />

              <ContentSections sections={guide.sections} />
            </div>

            <div className="space-y-4">
              <DownloadButton fileName={guide.title} />
              <RecommendedGuides
                relatedIds={guide.relatedGuideIds}
                currentId={guide.id}
              />
            </div>
          </div>
        </main>
      </div>

      <MobileBottomNav />
    </div>
  );
}
