export type GuideKind = "video" | "pdf";

export type GuideItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  kind: GuideKind;
  views: number;
  tags: string[];
  ctaLabel: string;
  imageTheme: string;
};

export type GuideSection = {
  id: string;
  title: string;
  items: GuideItem[];
};
