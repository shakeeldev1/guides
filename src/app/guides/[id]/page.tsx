import { notFound } from "next/navigation";
import { GuideDetailPage } from "@/modules/guides/guide-detail-page";
import { guideDetails } from "@/modules/guides/data/guide-details";

type DetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(guideDetails).map((id) => ({
    id,
  }));
}

export default async function Page({ params }: DetailPageProps) {
  const { id } = await params;
  const guide = guideDetails[id];

  if (!guide) {
    notFound();
  }

  return <GuideDetailPage guide={guide} />;
}
