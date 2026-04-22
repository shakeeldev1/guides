import type { ContentSection } from "@/modules/guides/types/detail";

type ContentSectionsProps = {
  sections: ContentSection[];
};

export function ContentSections({ sections }: ContentSectionsProps) {
  return (
    <div className="space-y-8">
      {sections.map((section, idx) => (
        <section
          key={section.id}
          className="rounded-xl border border-[#ececf0] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] lg:p-8"
        >
          <h2 className="mb-4 text-2xl font-bold text-[#1f1f23]">
            {idx + 1}. {section.title}
          </h2>

          <p className="mb-6 whitespace-pre-line leading-relaxed text-[#5f6170]">
            {section.content}
          </p>

          {section.subsections && section.subsections.length > 0 && (
            <div className="space-y-4 border-t border-[#ececf0] pt-6">
              {section.subsections.map((sub, subIdx) => (
                <div key={subIdx}>
                  <h3 className="mb-2 text-lg font-semibold text-[#1f1f23]">
                    • {sub.title}
                  </h3>
                  <p className="whitespace-pre-line leading-relaxed text-[#5f6170] pl-6">
                    {sub.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
