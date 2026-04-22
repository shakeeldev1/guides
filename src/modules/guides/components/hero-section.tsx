import Image from "next/image";

type HeroSectionProps = {
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
};

export function HeroSection({
  image,
  title,
  description,
  author,
  date,
  tags,
}: HeroSectionProps) {
  return (
    <div className="mb-8 rounded-2xl border border-[#ececf0] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] lg:p-8">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="mb-4 text-3xl font-bold text-[#1f1f23] md:text-4xl">
            {title}
          </h1>
          <p className="mb-6 text-base leading-relaxed text-[#5f6170]">
            {description}
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-[#7f8191]">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#e5c8a5] via-[#f5d9b6] to-[#c89960]" />
              <span className="font-medium">{author}</span>
            </div>
            <span>•</span>
            <span>{date}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f4f5f8] px-3 py-1.5 text-xs font-medium text-[#6f7180]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-64 overflow-hidden rounded-xl lg:h-auto">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}
