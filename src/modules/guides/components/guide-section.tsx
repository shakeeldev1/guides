import { GuideCard } from "@/modules/guides/components/guide-card";
import type { GuideSection as GuideSectionType } from "@/modules/guides/types";

type GuideSectionProps = {
  section: GuideSectionType;
};

export function GuideSection({ section }: GuideSectionProps) {
  return (
    <section className="mt-10 first:mt-8">
      <h2 className="text-2xl font-semibold tracking-tight text-[#25262d]">{section.title}</h2>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {section.items.map((item) => (
          <GuideCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
