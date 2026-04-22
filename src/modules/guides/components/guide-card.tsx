import Link from "next/link";
import Image from "next/image";
import { PlayIcon } from "@/modules/guides/components/icons";
import type { GuideItem } from "@/modules/guides/types";

type GuideCardProps = {
  item: GuideItem;
};

function formatViews(value: number) {
  return Intl.NumberFormat("en-US").format(value);
}

export function GuideCard({ item }: GuideCardProps) {
  return (
    <Link href={`/guides/${item.id}`}>
      <article className="group overflow-hidden rounded-2xl border border-[#ececf0] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
        <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${item.imageTheme}`}>
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          ) : null}
          {item.kind === "video" ? (
            <div className="absolute inset-0 grid place-items-center">
              <PlayIcon className="h-11 w-11" />
            </div>
          ) : null}
        </div>

        <div className="p-4">
          <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide">
            <span className="rounded bg-[#eef4ff] px-2 py-1 text-[#4777c2]">{item.category}</span>
            <span className="rounded bg-[#edf8ef] px-2 py-1 text-[#46a66f]">{item.level}</span>
          </div>

          <h3 className="line-clamp-2 text-[15px] font-semibold text-[#24262f]">{item.title}</h3>
          <p className="mt-1 line-clamp-2 text-xs text-[#7d7f8d]">{item.description}</p>

          <div className="mt-3 flex items-center justify-between text-xs text-[#8e90a0]">
            <p className="inline-flex items-center gap-1.5 uppercase tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-[#bfc2cd]" />
              {item.kind}
            </p>
            <p className="inline-flex items-center gap-1">○ {formatViews(item.views)}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[#f4f5f8] px-2 py-1 text-[10px] text-[#7a7d8a]">
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            className="mt-4 h-10 w-full rounded-lg bg-[#f7921f] text-sm font-semibold text-white transition hover:bg-[#e88416]"
          >
            {item.ctaLabel}
          </button>
        </div>
      </article>
    </Link>
  );
}
