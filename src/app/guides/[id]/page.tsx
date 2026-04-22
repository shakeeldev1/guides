import { notFound } from "next/navigation";
import { GuideDetailPage } from "@/modules/guides/guide-detail-page";
import { guideDetails } from "@/modules/guides/data/guide-details";

type DetailPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return Object.keys(guideDetails).map((id) => ({
    id,
  }));
}

export default function Page({ params }: DetailPageProps) {
  const guide = guideDetails[params.id];

  if (!guide) {
    notFound();
  }

  return <GuideDetailPage guide={guide} />;
}
