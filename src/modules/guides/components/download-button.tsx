import { DownloadIcon } from "@/modules/guides/components/icons";

type DownloadButtonProps = {
  fileName: string;
};

export function DownloadButton({ fileName }: DownloadButtonProps) {
  return (
    <button
      type="button"
      aria-label={`Download ${fileName}`}
      title={`Download ${fileName}`}
      className="sticky top-[92px] flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#ececf0] bg-white text-sm font-semibold text-[#1f1f23] shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition hover:bg-[#f9f9fa] lg:w-auto lg:px-4"
    >
      <DownloadIcon className="h-4 w-4" />
      Download PDF
    </button>
  );
}
