import type { GuideDetail } from "@/modules/guides/types/detail";

export const guideDetails: Record<string, GuideDetail> = {
  "pdf-2": {
    id: "pdf-2",
    title: "API Integration Guide",
    description:
      "The API Integration Guide provides a complete overview of how to connect your systems with our platform through secure and well-documented APIs.",
    image: "/images/apiIntegrationguide.png",
    category: "developer",
    level: "api",
    kind: "pdf",
    views: 340,
    tags: ["api", "integration", "automation"],
    author: "Advertiser Assets",
    date: "Mar 21, 2025",
    relatedGuideIds: ["pdf-1", "pdf-3"],
    sections: [
      {
        id: "section-1",
        title: "Common Causes & Fixes",
        content:
          "This prompt will give you a modern, functional admin interface to create and edit your guides dynamically — and connect the saved data to your Guide Details Page for display.\n\nWould you like me to now combine both (frontend + admin input page) into one unified Aippy prompt so you can generate the entire guide system (admin + user side) in one go?",
        subsections: [
          {
            title: "API Authentication",
            content:
              "This prompt will give you a modern, functional admin interface to create and edit your guides dynamically.",
          },
          {
            title: "Rate Limiting Issues",
            content:
              "This prompt will give you a modern, functional admin interface to create and edit your guides dynamically.",
          },
          {
            title: "Error Handling",
            content:
              "This prompt will give you a modern, functional admin interface to create and edit your guides dynamically.",
          },
        ],
      },
      {
        id: "section-2",
        title: "Understanding About Issue",
        content:
          "This prompt will give you a modern, functional admin interface to create and edit your guides dynamically — and connect the saved data to your Guide Details Page for display.\n\nWould you like me to now combine both (frontend + admin input page) into one unified Aippy prompt so you can generate the entire guide system (admin + user side) in one go?",
        subsections: [
          {
            title: "Base URL Configuration",
            content:
              "This prompt will give you a modern, functional admin interface to create and edit your guides dynamically.",
          },
          {
            title: "Request Headers",
            content:
              "This prompt will give you a modern, functional admin interface to create and edit your guides dynamically.",
          },
        ],
      },
      {
        id: "section-3",
        title: "Advanced Integration",
        content:
          "This prompt will give you a modern, functional admin interface to create and edit your guides dynamically — and connect the saved data to your Guide Details Page for display.",
        subsections: [
          {
            title: "Webhook Setup",
            content:
              "This prompt will give you a modern, functional admin interface to create and edit your guides dynamically.",
          },
          {
            title: "Real-time Sync",
            content:
              "This prompt will give you a modern, functional admin interface to create and edit your guides dynamically.",
          },
        ],
      },
    ],
  },
  "pdf-1": {
    id: "pdf-1",
    title: "Understanding the Cashback Program",
    description:
      "Maximize your earnings with our cashback system. This guide walks you through understanding how to leverage the cashback rewards program.",
    image: "/images/cashbackprogram.png",
    category: "platform",
    level: "public",
    kind: "pdf",
    views: 620,
    tags: ["cashback", "rewards", "earnings"],
    author: "Platform Team",
    date: "Feb 15, 2025",
    relatedGuideIds: ["pdf-2", "pdf-3"],
    sections: [
      {
        id: "section-1",
        title: "Getting Started with Cashback",
        content:
          "Learn how to enable cashback rewards on your account and start earning immediately.",
        subsections: [
          {
            title: "Account Setup",
            content: "Steps to configure your cashback preferences.",
          },
          {
            title: "Eligibility Requirements",
            content: "Understand the requirements to earn cashback rewards.",
          },
        ],
      },
      {
        id: "section-2",
        title: "Earning Cashback",
        content: "Maximize your cashback earnings with these proven strategies.",
        subsections: [
          {
            title: "Transaction Types",
            content: "Learn which transactions qualify for cashback.",
          },
          {
            title: "Bonus Categories",
            content: "Special categories with higher cashback rates.",
          },
        ],
      },
    ],
  },
  "pdf-3": {
    id: "pdf-3",
    title: "Admin Panel Overview",
    description:
      "Internal guide for admin staff. Learn how to manage users, content, and system settings from the admin dashboard.",
    image: "/images/adminpaneloverview.png",
    category: "platform",
    level: "admin",
    kind: "pdf",
    views: 125,
    tags: ["admin", "internal", "training"],
    author: "Admin Team",
    date: "Jan 10, 2025",
    relatedGuideIds: ["pdf-1", "pdf-2"],
    sections: [
      {
        id: "section-1",
        title: "Dashboard Overview",
        content: "Understand the main dashboard and its key components.",
        subsections: [
          {
            title: "Navigation Menu",
            content: "Guide to navigating the admin interface.",
          },
          {
            title: "Quick Stats",
            content: "Understanding key metrics and analytics.",
          },
        ],
      },
      {
        id: "section-2",
        title: "User Management",
        content: "Manage users, permissions, and roles.",
        subsections: [
          {
            title: "Creating Users",
            content: "Steps to add new administrators.",
          },
          {
            title: "Permission Levels",
            content: "Understanding admin permission hierarchy.",
          },
        ],
      },
    ],
  },
};
