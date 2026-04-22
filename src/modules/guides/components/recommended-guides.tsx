import { guideSections } from "@/modules/guides/data/guides";

type RecommendedGuidesProps = {
  relatedIds: string[];
  currentId: string;
};

export function RecommendedGuides({
  relatedIds,
  currentId,
}: RecommendedGuidesProps) {
  const allGuides = guideSections.flatMap((s) => s.items);
  const recommended = allGuides.filter(
    (g) => relatedIds.includes(g.id) && g.id !== currentId
  );

  if (recommended.length === 0) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-[#ececf0] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <h3 className="mb-4 text-lg font-semibold text-[#1f1f23]">
        Recommended Guides
      </h3>
      <div className="space-y-4">
        {recommended.slice(0, 3).map((guide) => (
          <article
            key={guide.id}
            className="rounded-lg border border-[#ececf0] bg-[#f9f9fa] p-3 transition hover:bg-white hover:shadow-[0_2px_4px_rgba(0,0,0,0.04)]"
          >
            <h4 className="mb-1 line-clamp-2 text-sm font-semibold text-[#1f1f23]">
              {guide.title}
            </h4>
            <p className="mb-3 line-clamp-2 text-xs text-[#7f8191]">
              {guide.description}
            </p>
            <button
              type="button"
              className="h-8 w-full rounded-lg bg-[#f7921f] text-xs font-semibold text-white transition hover:bg-[#e88416]"
            >
              {guide.ctaLabel}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
