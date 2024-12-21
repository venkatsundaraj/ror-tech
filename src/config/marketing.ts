import { Icons } from "@/app/_components/icons";
import { EndToEndData, MainNavItems, SocialMediaIcons } from "@/types";

export const mainNavContents: MainNavItems = [
  {
    href: "#our-solution",
    title: "Solutions",
    subItems: [],
  },
  {
    href: "#end-to-end-services",
    title: "Services",
    subItems: [],
  },
  {
    href: "#resources",
    title: "Rosources",
    subItems: [],
  },
  {
    href: "#who-we-are",
    title: "Who We Are",
    subItems: [],
  },
];

export const artData: { title: string; icon: keyof typeof Icons }[] = [
  { title: "Search", icon: "Search" },
  { title: "Store", icon: "Database" },
  { title: "Compile and Consolidate", icon: "Merge" },
  { title: "Validate and Reconcile", icon: "FileCheck" },
  { title: "Analyse and Predict", icon: "ChartColumnIncreasing" },
  { title: "Upload and Update", icon: "CloudUpload" },
];
export const endToEndData: EndToEndData = [
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8Jo5nwI83ExjW1sDfG4KwEQHO6ueoI38FJlAm0V",
    title: "Advisory and Consulting",
    description:
      "Process Studies, ROI Calculation, Solution Roadmaps, Product Comparisions",
    link: "#",
  },
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8JoYjLwuxBK2udhgFkc9pfroZsCYNOQUvqaylij",
    title: "Development and Product Implementations",
    description:
      "Full life cycle development or implementation, customization, upgrades and migrations",
    link: "#",
  },
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8JoS6K0aEfD5btxVm4sdUgOiLWYcuMaIwpv8eSh",
    title: "Application Support and Maintenance",
    description:
      "Innovative support models to ensure you get best out of your digital investments",
    link: "#",
  },
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8Jo5nwI83ExjW1sDfG4KwEQHO6ueoI38FJlAm0V",
    title: "Managed Services",
    description:
      "Outsource your non-critical and expensive processes to be handled efficiently using next-gen technologies",
    link: "#",
  },
];

export const caseStudyData: EndToEndData = [
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8JoQlYBTwmLS8JoxDr3CQYdi4MUgWNHuAX51vqf",
    title: "Title",
    description: "Digital solution that help you to engage clients better",
    link: "#",
  },
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8JoQlYBTwmLS8JoxDr3CQYdi4MUgWNHuAX51vqf",
    title: "Title",
    description: "Digital solution that help you to engage clients better",
    link: "#",
  },
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8JoQlYBTwmLS8JoxDr3CQYdi4MUgWNHuAX51vqf",
    title: "Title",
    description: "Digital solution that help you to engage clients better",
    link: "#",
  },
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8JoQlYBTwmLS8JoxDr3CQYdi4MUgWNHuAX51vqf",
    title: "Title",
    description: "Digital solution that help you to engage clients better",
    link: "#",
  },
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8JoQlYBTwmLS8JoxDr3CQYdi4MUgWNHuAX51vqf",
    title: "Title",
    description: "Digital solution that help you to engage clients better",
    link: "#",
  },
];

export const socialMediaIcons: SocialMediaIcons = [
  {
    image: "Instagram",
    url: "#",
  },
  {
    image: "Facebook",
    url: "#",
  },
  {
    image: "Twitter",
    url: "#",
  },
  {
    image: "Youtube",
    url: "#",
  },
];

export const menuLinks = [
  {
    title: "Solutions",
    url: "#",
  },
  {
    title: "Resources",
    url: "#",
  },
  {
    title: "Services",
    url: "#",
  },
  {
    title: "About Us",
    url: "#",
  },
  {
    title: "Partnerships",
    url: "#",
  },
  {
    title: "Contact us",
    url: "#",
  },
];

export const heroSectionData: {
  title: string;
  description: string;
  subText: string;
}[] = [
  {
    title: "Raw Data",
    description: "Structured and Unstructured",
    subText: "Textual | Tabular | Voice | Pictures | Emails | Videos",
  },
  {
    title: "Information",
    description: "Organised and Interpreted Raw Data",
    subText: "Textual | Tabular | Voice | Pictures | Emails | Videos",
  },
  {
    title: "Intelligence",
    description: "Answers to WHAT Happened",
    subText: "Data Visualization | Descriptive Analysis",
  },
  {
    title: "Insights",
    description: "WHAT and also WHY it happened",
    subText: "Diagnotic Analysis",
  },
  {
    title: "Foresights",
    description: "WHAT might happen in the Future.",
    subText: "Predictive Analysis",
  },
];

export const transformationSolution = [
  {
    title: "Experience and Engage",
    id: "experience-and-engage",
    items: [
      "SmartCafe: Virtual Employee Hangout Place",
      "Marketplaces",
      "Portals",
      "Mobile App Development",
      "ChatBots",
      "Low Code",
      "GenAI",
    ],
  },
  {
    title: "Automate and Optimize",
    id: "automate-and-optimize",
    items: [
      "Insurance Claims Settlement Platform",
      " Automation Hub",
      "Automation Command and Control center",
      "RPA",
      "Intelligent",
      "Document Processing",
      "Process Mining",
      "Communications Mining",
      "Automated Testing",
    ],
  },
  {
    title: "Analyse and predict",
    id: "analyse-and-predict",
    items: [
      "SmartLytics HR: Pre-packaged HR Analytics",
      "Professional Services Analytics",
      "CFO Cockpit Data",
      "Engineering Data Science",
      "Data Visualization",
      "Enterprise Performance Management",
    ],
  },
  {
    title: "Scale , Secure and Test",
    id: "scale-secure-and-test",
    items: [
      "Guardian",
      "DevSecOps",
      "Cloud Engineering",
      "Platform",
      "Platform Engineering",
      "Cloud Engineering",
      "DevSecOps",
    ],
  },
];
