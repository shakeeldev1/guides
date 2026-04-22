import Link from "next/link";

type BreadcrumbProps = {
  items: {
    label: string;
    href?: string;
  }[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-6 flex items-center gap-2 text-sm">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="text-[#6f7180] hover:text-[#1f1f23] transition"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#1f1f23] font-medium">{item.label}</span>
          )}
          {idx < items.length - 1 && <span className="text-[#bfc2cd]">/</span>}
        </div>
      ))}
    </nav>
  );
}
