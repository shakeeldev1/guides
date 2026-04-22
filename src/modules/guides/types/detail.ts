export type ContentSection = {
  id: string;
  title: string;
  content: string;
  subsections?: {
    title: string;
    content: string;
  }[];
};

export type GuideDetail = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  level: string;
  kind: "video" | "pdf";
  views: number;
  tags: string[];
  author: string;
  date: string;
  sections: ContentSection[];
  relatedGuideIds: string[];
};
