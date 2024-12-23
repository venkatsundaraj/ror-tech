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
  {
    href: "#partnerships",
    title: "Partnerships",
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
    description:
      "Development of Intelligent Security Review Application using Microsoft Power Platform for the leading Electricity and Water Authority organization in the Middle East.",
    link: "#",
  },
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8JoQlYBTwmLS8JoxDr3CQYdi4MUgWNHuAX51vqf",
    title: "Title",
    description:
      "Automation of end-to-end functional testing of an enterprise business application using Microsoft Power Automate for World's largest software house in the US",
    link: "#",
  },
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8JoQlYBTwmLS8JoxDr3CQYdi4MUgWNHuAX51vqf",
    title: "Title",
    description:
      "Automation of claims settlement process for a digitally native auto insurance company in South East Asia",
    link: "#",
  },
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8JoQlYBTwmLS8JoxDr3CQYdi4MUgWNHuAX51vqf",
    title: "Title",
    description:
      "Modular pre-packaged HR analytics solution for a leading software house in India",
    link: "#",
  },
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8JoQlYBTwmLS8JoxDr3CQYdi4MUgWNHuAX51vqf",
    title: "Title",
    description:
      "AI solution for validation of seal and signature from different embassies for Ministry of Foreign affairs in the Middle East",
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
      "Portals, Marketplaces, Web applictions",
      "Mobile Applications",
      "Low Code",
      "Application Platforms",
      "Digital Experience Management",
      "Chatbots",
      "GenAI",
    ],
    stackData:
      "Full stack | Java | .NET | Microsoft Power Platform | CoPilot | Liferay",
  },
  {
    title: "Automate and Optimize",
    id: "automate-and-optimize",
    items: [
      "Robotic Process Automation",
      " Intellignet Document Processing",
      "Process And Task Mining",
      "Business Applictions",
    ],
    stackData:
      "Microsoft Power Platform | AI Builder | CoPilot | UiPath | Abbyy | AiQoD",
  },
  {
    title: "Analyse and predict",
    id: "analyse-and-predict",
    items: [
      "Data Engineering",
      "Data Lake and Warehouses",
      "Data Science",
      "Data Visualization",
    ],
    stackData:
      "Microsoft Fabric | Azure Data Factory | Azure Synapse Analytics | Azure ML | PowerBI",
  },
  {
    title: "Scale , Secure and Test",
    id: "scale-secure-and-test",
    items: [
      "Cloud Engineering",
      "Platform Engineering",
      "DevSecOps",
      "Testing and Quality Assurance",
    ],
    stackData: "Azure DevOps | Azure SQL | Microsoft Sentinel | Guardian",
  },
];
