import type { GuideDetail } from "@/modules/guides/types/detail";

export const guideDetails: Record<string, GuideDetail> = {
  "video-1": {
    id: "video-1",
    title: "Getting Started with Advertiser Assets",
    description:
      "Learn the basics of using the advertiser assets platform. This comprehensive guide walks you through the fundamental concepts and initial setup required to start creating engaging advertising content.",
    image: "",
    category: "explainer",
    level: "public",
    kind: "video",
    views: 1251,
    tags: ["beginner", "onboarding", "tutorial"],
    author: "Platform Team",
    date: "Apr 10, 2025",
    relatedGuideIds: ["video-2", "video-3", "pdf-1"],
    sections: [
      {
        id: "section-1",
        title: "Platform Overview",
        content:
          "The Advertiser Assets platform is designed to help you create, manage, and distribute advertising content across multiple channels. This section covers the main dashboard, navigation, and key features you need to know.\n\nWhen you first log in, you'll see the main dashboard which displays your recent assets, performance metrics, and upcoming tasks. The left sidebar provides quick access to all major features and settings.",
        subsections: [
          {
            title: "Dashboard Layout",
            content:
              "The dashboard is organized into several key sections: your active campaigns, recent assets, performance analytics, and a to-do list. Learn how to navigate and customize your dashboard.",
          },
          {
            title: "Navigation Basics",
            content:
              "Use the left sidebar to access all features. The top navigation bar provides account settings and notifications. Hover over any menu item to see helpful tooltips.",
          },
        ],
      },
      {
        id: "section-2",
        title: "Creating Your First Asset",
        content:
          "Follow this step-by-step guide to create your first advertising asset. Assets are the building blocks of your campaigns and can include images, videos, copy, and more.\n\nBefore you start, make sure you have all your content ready. You can create assets from scratch using our built-in editor or upload existing files.",
        subsections: [
          {
            title: "Asset Types",
            content:
              "Learn about the different types of assets you can create: static images, video ads, carousel ads, collection ads, and more.",
          },
          {
            title: "Uploading Content",
            content:
              "Step-by-step instructions for uploading images and videos. Supported formats and size limits are listed in the help section.",
          },
          {
            title: "Setting Asset Properties",
            content:
              "Configure your asset name, description, category, and visibility settings for better organization.",
          },
        ],
      },
      {
        id: "section-3",
        title: "Best Practices for Beginners",
        content:
          "Start off on the right foot with these essential best practices for new advertisers. Following these guidelines will help you create more effective campaigns and avoid common pitfalls.",
        subsections: [
          {
            title: "Content Quality",
            content:
              "Tips for creating high-quality, engaging content that resonates with your target audience.",
          },
          {
            title: "Organization",
            content:
              "How to organize your assets using folders, tags, and naming conventions for easy management.",
          },
          {
            title: "Performance Tracking",
            content:
              "Set up tracking and analytics to measure the success of your assets and campaigns.",
          },
        ],
      },
    ],
  },
  "video-2": {
    id: "video-2",
    title: "Setting Up Your First Ad Account",
    description:
      "Step-by-step guide to creating and funding your advertising account. Learn how to set up payment methods, configure account settings, and prepare your account for your first campaign.",
    image: "",
    category: "beginner",
    level: "public",
    kind: "video",
    views: 983,
    tags: ["ad accounts", "setup", "tutorial"],
    author: "Account Team",
    date: "Mar 28, 2025",
    relatedGuideIds: ["video-1", "video-3", "pdf-2"],
    sections: [
      {
        id: "section-1",
        title: "Account Registration",
        content:
          "Create your advertising account in just a few minutes. You'll need a valid email address and basic business information to get started.\n\nThe registration process is straightforward and includes email verification to ensure account security. Once registered, you can immediately start building your account profile.",
        subsections: [
          {
            title: "Email Verification",
            content:
              "Confirm your email address to activate your account. Check your inbox for the verification link.",
          },
          {
            title: "Basic Information",
            content:
              "Provide your business name, website, and industry category to help us personalize your experience.",
          },
        ],
      },
      {
        id: "section-2",
        title: "Payment Setup",
        content:
          "Before you can launch campaigns, you need to add a payment method to your account. We support multiple payment options including credit cards, wire transfers, and ACH payments.\n\nChoose the payment method that works best for your business. Payment information is encrypted and securely stored according to industry standards.",
        subsections: [
          {
            title: "Credit Card Payment",
            content:
              "Add a credit card for billing. We support Visa, Mastercard, American Express, and Discover.",
          },
          {
            title: "Wire Transfer",
            content:
              "For large accounts, wire transfer is available. Contact our billing team for wire transfer details.",
          },
          {
            title: "Account Balance",
            content:
              "Manage your account balance and set up automatic reloading for continuous campaigns.",
          },
        ],
      },
      {
        id: "section-3",
        title: "Account Security",
        content:
          "Protect your advertising account with these essential security measures. Strong security practices will keep your account safe from unauthorized access.",
        subsections: [
          {
            title: "Password Security",
            content:
              "Create a strong password with a mix of uppercase, lowercase, numbers, and special characters.",
          },
          {
            title: "Two-Factor Authentication",
            content:
              "Enable 2FA to add an extra layer of security to your account. Supported methods include SMS and authenticator apps.",
          },
          {
            title: "Account Permissions",
            content:
              "Manage team member access and assign specific roles and permissions based on their responsibilities.",
          },
        ],
      },
    ],
  },
  "video-3": {
    id: "video-3",
    title: "Creative Compliance Best Practices",
    description:
      "Ensure your ads meet all platform guidelines and legal requirements. Learn what content is allowed, common violations to avoid, and how to create compliant, high-performing creative.",
    image: "",
    category: "beginner",
    level: "public",
    kind: "video",
    views: 750,
    tags: ["compliance", "guidelines", "tutorial"],
    author: "Compliance Team",
    date: "Mar 15, 2025",
    relatedGuideIds: ["video-1", "video-2", "pdf-3"],
    sections: [
      {
        id: "section-1",
        title: "Platform Content Policies",
        content:
          "Our platform maintains strict content policies to ensure a safe and trustworthy advertising environment. All ads must comply with these policies to be approved and served.\n\nPolicies cover prohibited content, restricted categories, and content quality standards. Review these policies carefully before creating ads to avoid rejections and account suspension.",
        subsections: [
          {
            title: "Prohibited Content",
            content:
              "Content that is illegal, misleading, or harmful is strictly prohibited. This includes content promoting violence, hate speech, and illegal products or services.",
          },
          {
            title: "Restricted Categories",
            content:
              "Some product categories require special approval and documentation. These include financial services, healthcare, and regulated products.",
          },
          {
            title: "Quality Standards",
            content:
              "Ads must meet minimum quality standards for image clarity, audio quality, and video resolution.",
          },
        ],
      },
      {
        id: "section-2",
        title: "Ad Review Process",
        content:
          "All ads go through a review process before they can be served to users. Understanding the review process helps you create compliant ads that pass the first time.\n\nOur review team checks each ad against our policies and quality standards. Most ads are reviewed within 24 hours. If your ad is rejected, you'll receive detailed feedback about what needs to be changed.",
        subsections: [
          {
            title: "Review Timeline",
            content:
              "Most ads are reviewed within 24 hours during business days. Expedited reviews are available for accounts in good standing.",
          },
          {
            title: "Rejection Reasons",
            content:
              "Common reasons for rejection include poor image quality, misleading claims, and policy violations. Each rejection includes specific feedback.",
          },
          {
            title: "Appeals Process",
            content:
              "If you believe your ad was incorrectly rejected, you can submit an appeal with additional context or revised creative.",
          },
        ],
      },
      {
        id: "section-3",
        title: "Creating Compliant Creative",
        content:
          "Follow these best practices when creating ads to ensure they pass review on the first attempt and perform well with your audience.\n\nCompliant ads aren't just necessary—they also tend to perform better because they build trust with users. Focus on clear messaging, authentic imagery, and accurate claims.",
        subsections: [
          {
            title: "Claims and Proof",
            content:
              "Any claims made in your ads must be truthful and backed by evidence. Avoid exaggerations, superlatives, and unsubstantiated statements.",
          },
          {
            title: "Image and Video Standards",
            content:
              "Use high-quality, original images and videos. Avoid stock photos with watermarks or overly generic imagery.",
          },
          {
            title: "Targeting Appropriately",
            content:
              "Ensure your ad targeting aligns with your audience and message. Avoid targeting that could be considered discriminatory.",
          },
        ],
      },
    ],
  },
  "pdf-1": {
    id: "pdf-1",
    title: "Understanding the Cashback Program",
    description:
      "Maximize your earnings with our cashback rewards system. This comprehensive guide explains how the cashback program works, how to earn rewards, and how to redeem them.",
    image: "/images/cashbackprogram.png",
    category: "platform",
    level: "public",
    kind: "pdf",
    views: 620,
    tags: ["cashback", "rewards", "earnings"],
    author: "Rewards Team",
    date: "Feb 20, 2025",
    relatedGuideIds: ["pdf-2", "pdf-3", "video-1"],
    sections: [
      {
        id: "section-1",
        title: "Cashback Program Overview",
        content:
          "The cashback program rewards you for your advertising spend and engagement with the platform. Every dollar spent has the potential to earn you cashback that can be used for future campaigns.\n\nOur cashback program is designed to benefit all advertisers, from small businesses to large enterprises. The more you engage with the platform, the higher your cashback percentage can become.",
        subsections: [
          {
            title: "How It Works",
            content:
              "You earn cashback on qualifying purchases and activities. Cashback is calculated as a percentage of your spending and credited to your account monthly.",
          },
          {
            title: "Earning Rates",
            content:
              "Base cashback rate is 1% for all advertisers. Premium members earn up to 5% depending on their tier and activity level.",
          },
          {
            title: "Bonus Categories",
            content:
              "Certain spending categories offer bonus cashback rates. Video campaigns earn 2% bonus, and new user campaigns earn 3% bonus.",
          },
        ],
      },
      {
        id: "section-2",
        title: "Earning Cashback",
        content:
          "Learn the different ways you can earn cashback and maximize your rewards. The more strategic you are with your spending, the more cashback you can accumulate.\n\nCashback is earned on all advertising spend, but some activities provide bonus rates. Track your earnings in the rewards dashboard to see your progress toward the next tier.",
        subsections: [
          {
            title: "Campaign Spending",
            content:
              "Every dollar spent on campaigns earns cashback at your current rate. Larger campaigns may qualify for bonus rates.",
          },
          {
            title: "Monthly Bonuses",
            content:
              "Achieve monthly spending milestones to unlock bonus cashback. Spending $1,000+ earns a 0.5% bonus, $5,000+ earns 1% bonus.",
          },
          {
            title: "Referral Bonuses",
            content:
              "Earn additional cashback by referring new advertisers. You get a one-time bonus plus ongoing referral rewards.",
          },
        ],
      },
      {
        id: "section-3",
        title: "Redeeming Your Rewards",
        content:
          "Once you've accumulated cashback, you can easily redeem it in multiple ways. Your earned cashback gives you flexibility in how you use your rewards.\n\nRedeeming is simple and instant. You can apply cashback directly to your advertising account or request a payout to your registered payment method.",
        subsections: [
          {
            title: "Account Credit",
            content:
              "Apply earned cashback directly to your advertising account to fund new campaigns. This is the most popular redemption method.",
          },
          {
            title: "Bank Transfer",
            content:
              "Withdraw your cashback to your registered bank account. Transfers are processed within 2-3 business days.",
          },
          {
            title: "Minimum Redemption",
            content:
              "Minimum redemption amount is $10. There are no limits on maximum redemption.",
          },
        ],
      },
    ],
  },
  "pdf-2": {
    id: "pdf-2",
    title: "API Integration Guide",
    description:
      "The API Integration Guide provides a complete overview of how to connect your systems with our platform through secure and well-documented APIs. Integrate with ease and automate your workflows.",
    image: "/images/apiIntegrationguide.png",
    category: "developer",
    level: "api",
    kind: "pdf",
    views: 340,
    tags: ["api", "integration", "automation"],
    author: "Developer Relations",
    date: "Mar 21, 2025",
    relatedGuideIds: ["pdf-1", "pdf-3", "video-2"],
    sections: [
      {
        id: "section-1",
        title: "Common Causes & Fixes",
        content:
          "This section covers the most common integration issues you might encounter and provides solutions to resolve them quickly.\n\nMost integration issues stem from authentication problems, rate limiting, or data format mismatches. We provide detailed solutions for each common issue.",
        subsections: [
          {
            title: "API Authentication",
            content:
              "Ensure you're using the correct API keys and authentication headers. API keys should be kept secure and never exposed in client-side code.",
          },
          {
            title: "Rate Limiting Issues",
            content:
              "If you're hitting rate limits, implement exponential backoff and request batching. Standard rate limits are 100 requests per minute for most endpoints.",
          },
          {
            title: "Error Handling",
            content:
              "Always implement proper error handling. Common error codes are documented in our API reference with suggested remedies.",
          },
        ],
      },
      {
        id: "section-2",
        title: "Understanding About Issue",
        content:
          "Deep dive into the most critical issues that could affect your integration. Understanding these issues helps you build more robust integrations.\n\nThis section covers authentication flows, data validation, and webhook management. Pay special attention to these areas during implementation.",
        subsections: [
          {
            title: "Base URL Configuration",
            content:
              "Use https://api.platform.io for all API requests. Always use HTTPS to ensure data security.",
          },
          {
            title: "Request Headers",
            content:
              "Include required headers: Authorization, Content-Type, and User-Agent. Additional headers may be required for specific endpoints.",
          },
          {
            title: "Response Handling",
            content:
              "All responses include status codes and error messages. Parse these carefully to handle errors gracefully in your application.",
          },
        ],
      },
      {
        id: "section-3",
        title: "Advanced Integration",
        content:
          "For advanced use cases and high-volume integrations, follow these guidelines to ensure optimal performance and reliability.\n\nAdvanced features include webhooks, batch operations, and real-time synchronization. These tools are designed for enterprise-level integrations.",
        subsections: [
          {
            title: "Webhook Setup",
            content:
              "Webhooks allow you to receive real-time updates about events in your account. Configure webhook endpoints and verify webhook signatures for security.",
          },
          {
            title: "Real-time Sync",
            content:
              "Implement real-time synchronization between your system and our platform using webhooks. This ensures data consistency across systems.",
          },
          {
            title: "Batch Operations",
            content:
              "For bulk operations, use batch endpoints to process multiple items in a single request. This reduces network overhead and improves performance.",
          },
        ],
      },
    ],
  },
  "pdf-3": {
    id: "pdf-3",
    title: "Admin Panel Overview",
    description:
      "Internal guide for admin staff. Learn how to manage users, content, and system settings from the admin dashboard. Full administrative controls for platform management.",
    image: "/images/adminpaneloverview.png",
    category: "platform",
    level: "admin",
    kind: "pdf",
    views: 125,
    tags: ["admin", "internal", "training"],
    author: "Admin Operations",
    date: "Jan 10, 2025",
    relatedGuideIds: ["pdf-1", "pdf-2", "video-3"],
    sections: [
      {
        id: "section-1",
        title: "Dashboard Overview",
        content:
          "The admin dashboard provides a comprehensive view of all system activity and platform metrics. Use this dashboard to monitor the health of the platform and access administrative functions.\n\nThe main dashboard displays key metrics, active users, recent transactions, and system alerts. Customize your dashboard view to show the metrics most important to you.",
        subsections: [
          {
            title: "Navigation Menu",
            content:
              "The left navigation menu provides quick access to all admin functions organized by category. Customize which items appear for faster access.",
          },
          {
            title: "Quick Stats",
            content:
              "View key platform metrics at a glance: total users, active campaigns, revenue, and system status.",
          },
          {
            title: "Alerts and Notifications",
            content:
              "Important system alerts appear at the top of the dashboard. Configure notification preferences in settings.",
          },
        ],
      },
      {
        id: "section-2",
        title: "User Management",
        content:
          "Manage platform users, set permissions, and configure user roles from the admin panel. Proper user management is critical for platform security and organization.\n\nEach user can be assigned specific roles that determine what features they can access. Monitor user activity and manage account status for security.",
        subsections: [
          {
            title: "Creating Users",
            content:
              "Add new administrators through the user management panel. Set initial password and permissions during creation.",
          },
          {
            title: "Permission Levels",
            content:
              "Assign users to roles with different permission levels: Viewer (read-only), Editor (create and edit), and Admin (full access).",
          },
          {
            title: "User Activity Logs",
            content:
              "View detailed logs of all user actions for audit and compliance purposes. Filter logs by user, action, or date range.",
          },
        ],
      },
      {
        id: "section-3",
        title: "Content Moderation",
        content:
          "Review and moderate user-generated content and advertisements to ensure platform compliance. Use these tools to maintain platform quality and safety.\n\nContent review tools help you identify and manage non-compliant content. You can flag content, request changes, or remove content as needed.",
        subsections: [
          {
            title: "Ad Review Queue",
            content:
              "Manage the queue of ads waiting for review. Assign ads to reviewers and track review status.",
          },
          {
            title: "Violation Reports",
            content:
              "View reports of user-reported violations. Investigate and take appropriate action against violators.",
          },
          {
            title: "Content Removal",
            content:
              "Remove content that violates policies. Send notifications to users about why content was removed.",
          },
        ],
      },
    ],
  },
};
