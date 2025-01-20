import { Icons, Icon } from "@/app/_components/icons";
import { EndToEndData, MainNavItems, SocialMediaIcons } from "@/types";
import { title } from "process";

export const mainNavContents: MainNavItems = [
  {
    href: "/#our-solution",
    title: "Solutions",
    subItems: [],
  },
  {
    href: "/#end-to-end-services",
    title: "Services",
    subItems: [],
  },
  {
    href: "/#partnerships",
    title: "Partnerships",
    subItems: [],
  },
  {
    href: "/#resources",
    title: "Resources",
    subItems: [],
  },
  {
    href: "/#who-we-are",
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
export const ourDifferentiatorContent: { title: string; imgPath: string }[] = [
  {
    title: "Insights centered strategy",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVS7N3l6RkTnuUMoapyhGFmg9lwIYORcVixtW1",
  },
  {
    title: "Hero actions",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
  },
  {
    title: "360 deg co-creation",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVerDO2THzKF8PVfhHaR7CmudUQywI1cWtxBk2",
  },
  {
    title: "Only senior consultants",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVKD9il6ILRN7EY2f498lBm1DhqtyXeHvZVid5",
  },
  {
    title: "500+ years, 70% practitioners",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVWFoOmX2uX31TIjKoHYR0aPnSbMcFkhvmy76G",
  },
  {
    title: "Tremendous diversity",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVcGmgyCFL0cRPUsJHtd7pnFIgDZAmaLNfuQi6",
  },
  {
    title: "End to end Accountability",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVih5Fmu12L9SrhBkonyJq4Z8l0ANjKH7a5euM",
  },
  {
    title: "Bespoke approach",
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVgAnj0u8GZmO7D95FyjUwVrPNpCBfxz4KHMWX",
  },
];
export const insightCenteredContent: string[] = [
  "Insights",
  "Imperatives",
  "Strategy: Hero actions - Font Back",
  "Obj. | Goals | Metrics",
  "Mission | Purpose | Vision | Definition",
  "Star Shifts : Start | Stop | Continue",
  "PoC & Execution Oversight",
  "Assured Success",
];
export const tailSectionData: { title: string; palette: string }[] = [
  {
    title: "A multi billion dollar, emerging markets, FMCG conglomerate",
    palette: "bg-tail-a",
  },
  { title: "A global telecom giant", palette: "bg-tail-b" },
  {
    title: "An Indian premium fashion boutique",
    palette: "bg-tail-c",
  },
  {
    title: "An Indian FMCG snacking startup",
    palette: "bg-tail-d",
  },
  {
    title: "An Indian amusement parks leader",
    palette: "bg-tail-e",
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
      "Portals, Marketplaces, Web applications",
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
      "Intelligent Document Processing",
      "Process And Task Mining",
      "Business Applications",
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
    title: "Scale, Secure and Test",
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

export const ourProfileContentForStickySlider: { title: string; icon: Icon }[] =
  [
    {
      title:
        "Businesses exist for growth and they often require help in unlocking it especially when the markets are complex. At the heart of all such problems & opportunities lies a core business insight, a market value driver, around which spirals a specific growth construct.",
      icon: "Snail",
    },
    {
      title:
        "Uncovering the right insight & having the entire business strategy and model revolve around it is the beginning of sustained growth advantage. This advantage often leads to new ways of expanding business & portfolio.",
      icon: "Pencil",
    },
    {
      title:
        "Realising the advantage lies in the design of precise programs at the front-end on brand, innovation, customer engagement helped by a specific, enabling people & operations perspective.",
      icon: "Moon",
    },
    {
      title:
        " To give customised advice on making this happen requires intense collaboration, shared accountability, personal involvement by a sound blend of global practitioner + consulting experience at the core with a network of best in class program experts.",
      icon: "X",
    },
    {
      title:
        "Uncovering the right insight & having the entire business strategy and model revolve around it is the beginning of sustained growth advantage. This advantage often leads to new ways of expanding business & portfolio.",
      icon: "Laptop",
    },
    {
      title:
        "Realising the advantage lies in the design of precise programs at the front-end on brand, innovation, customer engagement helped by a specific, enabling people & operations perspective.",
      icon: "MapPin",
    },
    {
      title:
        " To give customised advice on making this happen requires intense collaboration, shared accountability, personal involvement by a sound blend of global practitioner + consulting experience at the core with a network of best in class program experts.",
      icon: "Play",
    },
    {
      title:
        " To give customised advice on making this happen requires intense collaboration, shared accountability, personal involvement by a sound blend of global practitioner + consulting experience at the core with a network of best in class program experts.",
      icon: "Plus",
    },
  ];

export const tileContent = [
  "the cash in your bank.",
  "your assets.",
  "your resources.",
];

export const solutionImpactData = [
  "Scalable cloud infrastructure using Microsoft Azure to ensure seamless growth and high availability.",
  "Secure data management with Microsoft Defender, Azure Security Center, and encryption technologies.",
  "QA automation and testing using Azure DevOps and Selenium for consistent quality.",
  "Scalable application performance with Azure Kubernetes Service (AKS) and Azure Load Balancer.",
  "Secure access management with Azure Active Directory (AAD) and role-based access control (RBAC).",
  "QA performance optimization using Azure Load Testing and Azure Monitor for proactive issue detection",
];

export const experiencetAndEngageData = [
  "Customer Experience Management Solutions using Microsoft .NET and Full stack platforms",
  "Enterprise Applications development using Microsoft Power Apps",
  "Enterprise Content Management Solutions using SharePoint",
  "Document Management solutions using SharePoint Premium",
  "Unified Digital Platform solutions using Liferay to governmental organizations",
  "Employee Engagement Mobile Application using Open-Source Platforms",
  "ChatBot and GenAI solutions for customer service",
  "Enterprise collaboration using Microsoft Teams",
];

export const automateAndOptimiseData = [
  "Accounts Payable automation using Microsoft Power Automate and Power Apps",
  "Insurance Claims Settlement Automation using Microsoft Power Automate, PowerApps, Microsoft AI Builder",
  "Invoice, PO and GRN, 3-way matching automation using UiPath RPA and Abbyy Flexicapture",
  "Information Security Clearance workflow application and automation using Microsoft Power Platform",
  "Payroll input data preparation and payroll data variance report generation using Microsoft Power Platform",
  "Document Digitalization for various functions using Kofax RPA and Kofax Total Agility Solutions",
  "Functional Test automation using Microsoft Power Automate",
  "Automated meeting scheduling and minutes of meeting generation using Microsoft CoPilot and OpenAI",
];

export const scaleSecureAndTest = [
  "Prebuilt HR Analytics solution using Microsoft Power BI, Microsoft SSRS and MS SQl Database",
  "CEO Cockpit solution using Microsoft Power BI",
  "Inventory & Supply chain optimization for Accurate Prediction of Demand Using AI/ML for retail establishments",
  "Pro-active Media Monitoring and Insights for Mis information and Disinformation using Microsoft AI platforms",
  "Resume parsing and skill analytics for leading IT firm",
];

export const analizeVisualPredictData: {
  title: string;
  icon: Icon;
  description: string;
}[] = [
  {
    title: "Data Engineering",
    icon: "DataEngineering",
    description:
      "Solutions and technologies that help in designing and building systems for the aggregation, storage and analysis of data at scale.",
  },
  {
    title: "Data Science",
    icon: "DataScience",
    description:
      "Solutions and technologies that help in to uncover actionable insights hidden in an organization’s data.",
  },
  {
    title: "Data Visualization",
    icon: "DataVisualization",
    description:
      "Data visualization is the graphical representation of data by using visual elements like charts, graphs and maps,",
  },
];

export const whyChooseUsImageData = [
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoOMCdTEKaAN2xy7u8gkcnHmWrtVoJiaswfYqB",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JojgsvF1Jw8jHFuSTVfx07Pb2Z3B5N4iW16pCM",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JojgsvF1Jw8jHFuSTVfx07Pb2Z3B5N4iW16pCM",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jodybf1LnTKYG3xD0yZ2H6r7WBSuNPQnmkpi4R",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JocS67T5AviChW1Q34Jaq0rPl9vMtyISbNZBg8",
];

export const scaleAndSecureTechIcon: {
  title: string;
  icons: { icon: string; name: string }[];
}[] = [
  {
    title: "Data Engineering",
    icons: [
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JondIF1NowYUd8PNaxkbQMZDjCOh9TreziRGso",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoBQrBGzIpn9TX8jAg1KsG2erN3mS6aChv5qWU",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JonZV7JVOowYUd8PNaxkbQMZDjCOh9TreziRGs",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jo31q57KQi8vcObFlrT7w14X6SLdI0jJUfZom3",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jov8L894qGR1Lx8Biu7mtjMQKqYnfeNwV9rEUO",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoAyuqhpk1HyxoZ8NhGk6rWw0vu3eISDROFpiA",
        name: "Microsoft Power Tools",
      },
    ],
  },
  {
    title: "Data Science",
    icons: [
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Joxk7HslGnmZE9koqNWJhMVpPCK4Xtj2rdFzBw",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jo2b9FRUzOC09YKoOtyHUM2NAp57SnheZFfEQT",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JohTObsRwSd5EuiPRzV1oqnyO0TkMNLcrlYKIs",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoGCc5ewhX0PcgUquWvdSoLC1z2Hy4sKApBrhQ",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JomWlXJOgzZqrCjMOHKx9kJIUvNaQ58eGYD2Fp",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JocWmjF6viChW1Q34Jaq0rPl9vMtyISbNZBg8x",
        name: "Microsoft Power Tools",
      },
    ],
  },
  {
    title: "Data Visualization",
    icons: [
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JohpbtbGwSd5EuiPRzV1oqnyO0TkMNLcrlYKIs",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoVLkhcwZ3rS4qt7Wg80DQnNCd2ihuvs9b6BLy",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoK2obVUFhz8TfXUsR9owmHPc3EAgSiNGMQ7tB",
        name: "Microsoft Power Tools",
      },
    ],
  },
];

export const dataVisualizeTool: {
  title: string;
  icons: { icon: string; name: string }[];
}[] = [
  {
    title: "Data Engineering",
    icons: [
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JornNY7OiSyxDL6AsiGq9Ko2Vg7kzfI5EceXtb",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoiXJWww49RIzCkG6rwMe7Nh1yW3EF2sYjAat0",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jo0pQALFyPaUgdn3GVS8D7yrwzvTR1ZB5tKL4q",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoJwBVoG5PeQZ1iSX9RGOdE2YBjfuJb380V6tL",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JokQNNoLT9fWpjiqn4FdXvS2etCZc8TIHVR1AM",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JogLtpAG0U0SRx7ke5iucGIHoOqf9BhNJpYZWD",
        name: "Microsoft Power Tools",
      },
    ],
  },
  {
    title: "Data Science",
    icons: [
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoE0Wkt1R3SVOvYsnBF5ut4o72mbMrehXAwgcx",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoR1ng6RPeXnUPIxt6SpQRTBM8jmFquiJc75dO",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoZpBR63NY0xWQHDojuibp7I4r2hvgC9kTXdNF",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JocuHAaDviChW1Q34Jaq0rPl9vMtyISbNZBg8x",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoDbb0Zz2pbawQson9Ci2jXZFSM57Rhcl4YgeI",
        name: "Microsoft Power Tools",
      },
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Joxw54TWNGnmZE9koqNWJhMVpPCK4Xtj2rdFzB",
        name: "Microsoft Power Tools",
      },
    ],
  },
  {
    title: "Data Visualization",
    icons: [
      {
        icon: "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoLarfVv83ATws25PVk7MyaeE9bm0Ntjxgnou1",
        name: "Microsoft Power Tools",
      },
    ],
  },
];

export const searchItems: { title: string; icon: Icon }[] = [
  { title: "Search", icon: "SearchDuplicate" },
  { title: "Understand", icon: "Understand" },
  { title: "Update", icon: "Update" },
  { title: "Validate", icon: "Validate" },
  { title: "Consolidate", icon: "Consolidate" },
  { title: "Compile", icon: "Compile" },
  { title: "Scale", icon: "ScaleDuplicate" },
  { title: "Reconcile", icon: "Reconcile" },
  { title: "Cleanse", icon: "Cleanse" },
  { title: "Secure", icon: "Secure" },
  { title: "Store", icon: "Store" },
];

export const endToEndServicesData = [
  {
    title: "Consulting and Advisory",
    subText: "Digital Strategies and advisory for",
    services: [
      {
        title: "Efficiency improvement and cost optimization",
      },
      {
        title: "Compliance enhancement",
      },
      {
        title: "Quality Assurance",
      },
      {
        title: "Compliance Enhancement",
      },
      {
        title: "Information Security and Controls",
      },
      {
        title: "Application rationalization",
      },
      {
        title: "Real-time Insights and Foresights about Operations",
      },
      {
        title: "Improved Stakeholder Engagement and Experiences",
      },
    ],
  },
  {
    title: "Implementation and Development",
    subText: "",
    services: [
      {
        title: "Custom Application Development",
      },
      {
        title: "Platform Implementation",
      },
      {
        title: "Version Upgrades and Migration",
      },
      {
        title: "Enterprise Application Customization",
      },
    ],
  },
  {
    title: "Testing and Quality Assurance",
    subText: "",
    services: [
      {
        title: "Functional and Non-functional testing",
      },
    ],
  },
  {
    title: "Application Support and Maintenance",
    subText: "",
    services: [
      {
        title: "Hypercare Support",
      },
      {
        title: "Breakdown Fixes",
      },
      {
        title: "Ongoing Application Maintenance",
      },
      {
        title: "Application Revamp",
      },
    ],
  },
  {
    title: "Offshoring and Managed Services",
    subText:
      "Setting up Centres of Excellence and Offshore development centres Managed Services Portfolio",
    services: [
      {
        title: "Automation as a Service",
      },
      {
        title: "Analytics as a service",
      },
      {
        title: "Data Security as a Service",
      },
      {
        title: "Quality assurance and Testing as a Service",
      },
    ],
  },
  {
    title: "Staff Augmentation and Resourcing",
    subText: "",
    services: [
      {
        title: "Elements",
      },
    ],
  },
];

export const ExperienceAndEngagementUsersIcon: Icon[] = [
  "CustomerExperience",
  "EnterpriseApplications",
  "ContentManagement",
  "DocumentManagement",
  "UnifiedPlatform",
  "EmployeeEngagement",
  "GenAIChat",
  "EnterpriseColloboration",
];

export const experienceAndEngageTechIcons = [
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Joi2MVCOb49RIzCkG6rwMe7Nh1yW3EF2sYjAat",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoiW6E5Z49RIzCkG6rwMe7Nh1yW3EF2sYjAat0",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JomSUmaXgzZqrCjMOHKx9kJIUvNaQ58eGYD2Fp",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JomSUmaXgzZqrCjMOHKx9kJIUvNaQ58eGYD2Fp",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoY1FvePBK2udhgFkc9pfroZsCYNOQUvqaylij",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jo5PRzPl4ExjW1sDfG4KwEQHO6ueoI38FJlAm0",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JovfAjGnUqGR1Lx8Biu7mtjMQKqYnfeNwV9rEU",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jo4Zk8FQDtOT2gNrQSweasDkMdxH1n6hmpyZPL",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoW8kuuzV93iJm0k54l8QjZnxIufGLthXdgERC",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Joc5xtDAviChW1Q34Jaq0rPl9vMtyISbNZBg8x",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JodASTJunTKYG3xD0yZ2H6r7WBSuNPQnmkpi4R",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoxwJDLhlGnmZE9koqNWJhMVpPCK4Xtj2rdFzB",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jo5OhdiRExjW1sDfG4KwEQHO6ueoI38FJlAm0V",
];

export const AutomateAndOptimizeUsersIcon: Icon[] = [
  "AccountsPayableAutomation",
  "InsuranceClaimSettlement",
  "InvoiceAutomation",
  "Workflow",
  "PayrollInput",
  "DocumentAndDigitalization",
  "FunctionalTest",
  "AutomatedMeetings",
];

export const scaleAndSecureUsersIcon: Icon[] = [
  "HrAnalytics",
  "CeoCockpit",
  "InventorySupplychain",
  "MediaMonitoring",
  "ResumeParsing",
];

export const AutomateAndOptimizeTechIcons = [
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JodUGSUCnTKYG3xD0yZ2H6r7WBSuNPQnmkpi4R",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Johdr2XZwSd5EuiPRzV1oqnyO0TkMNLcrlYKIs",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoLyFLP683ATws25PVk7MyaeE9bm0Ntjxgnou1",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jod2NINunTKYG3xD0yZ2H6r7WBSuNPQnmkpi4R",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jo2ye8gDOC09YKoOtyHUM2NAp57SnheZFfEQT8",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JofdNEeFXHOZbh2CjGeXqfwlSxucmzViUyQR8F",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JourrbdzNLOwjFV5iNZr1aLG9o7MqTk8AQHbBC",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JozJfFVi9NXxdUlywiDTJ1qQKVY5zWoc4R6bB9",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jow1Gg4R9azNjsdfbS78XogvKc3YFTErMpmnAx",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoyJJ0qUdUGDbyzcPt5aIElLJ6SxmBdQChFqfv",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoWP5ZaYzV93iJm0k54l8QjZnxIufGLthXdgER",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoP2Tcw0Kj6Opsn1uPzRZy4cUX0oD37gNBif8w",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoA6wHs01HyxoZ8NhGk6rWw0vu3eISDROFpiAY",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoGyEJ8PhX0PcgUquWvdSoLC1z2Hy4sKApBrhQ",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoidlwT949RIzCkG6rwMe7Nh1yW3EF2sYjAat0",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoYOPhrdBK2udhgFkc9pfroZsCYNOQUvqaylij",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoYOPhrdBK2udhgFkc9pfroZsCYNOQUvqaylij",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoDIg0kD2pbawQson9Ci2jXZFSM57Rhcl4YgeI",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JonZ4TNf1owYUd8PNaxkbQMZDjCOh9TreziRGs",
];

export const scaleIcons = [
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JondIF1NowYUd8PNaxkbQMZDjCOh9TreziRGso",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoBQrBGzIpn9TX8jAg1KsG2erN3mS6aChv5qWU",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JonZV7JVOowYUd8PNaxkbQMZDjCOh9TreziRGs",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jo31q57KQi8vcObFlrT7w14X6SLdI0jJUfZom3",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jov8L894qGR1Lx8Biu7mtjMQKqYnfeNwV9rEUO",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoAyuqhpk1HyxoZ8NhGk6rWw0vu3eISDROFpiA",
];

export const secureIcons = [
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Joxk7HslGnmZE9koqNWJhMVpPCK4Xtj2rdFzBw",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jo2b9FRUzOC09YKoOtyHUM2NAp57SnheZFfEQT",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JohTObsRwSd5EuiPRzV1oqnyO0TkMNLcrlYKIs",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoGCc5ewhX0PcgUquWvdSoLC1z2Hy4sKApBrhQ",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JomWlXJOgzZqrCjMOHKx9kJIUvNaQ58eGYD2Fp",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JocWmjF6viChW1Q34Jaq0rPl9vMtyISbNZBg8x",
];

export const qualityAssurance = [
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JohpbtbGwSd5EuiPRzV1oqnyO0TkMNLcrlYKIs",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoVLkhcwZ3rS4qt7Wg80DQnNCd2ihuvs9b6BLy",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoK2obVUFhz8TfXUsR9owmHPc3EAgSiNGMQ7tB",
];
