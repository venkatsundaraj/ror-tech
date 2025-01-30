import { Icons, Icon } from "@/app/_components/icons";
import { EndToEndData, MainNavItems, SocialMediaIcons } from "@/types";
import ExperienceAndEngage from "@/config/animated-svg/datamultilogo1.json";
import AutomateAndOptimise from "@/config/animated-svg/datarob-2.json";
import AnalyzeAndPredict from "@/config/animated-svg/databrianwire2.json";
import ScaleAndSecure from "@/config/animated-svg/datapiechart10.json";

export const mainNavContents: MainNavItems = [
  {
    href: "/our-solutions",
    title: "Solutions",
    subItems: [],
  },
  {
    href: "/our-services",
    title: "Services",
    subItems: [],
  },
  {
    href: "/partnerships",
    title: "Partnerships",
    subItems: [],
  },
  {
    href: "/case-studies",
    title: "Case Studies",
    subItems: [],
  },
  {
    href: "/about-us",
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
      "https://utfs.io/f/QRaE9TmLS8JoS6K0aEfD5btxVm4sdUgOiLWYcuMaIwpv8eSh",
    title: "Advisory and Consulting",
    description:
      "Process Studies, ROI Calculation, Solution Roadmaps, Product Comparisions",
    link: "#",
  },
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8Jo5nwI83ExjW1sDfG4KwEQHO6ueoI38FJlAm0V",
    title: "Development and Product Implementations",
    description:
      "Full life cycle development or implementation, customization, upgrades and migrations",
    link: "#",
  },
  {
    imageUrl:
      "https://utfs.io/f/QRaE9TmLS8JoYjLwuxBK2udhgFkc9pfroZsCYNOQUvqaylij",
    title: "Application Support and Maintenance",
    description:
      "Innovative support models to ensure you get best out of your digital investments",
    link: "#",
  },
  {
    imageUrl:
      "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoXBDsCtlcJVL4uK3WR8NaHQzE59h1P2ItADx7",
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
    image: "Twitter",
    url: "https://x.com/ror_tech",
  },
  {
    image: "Instagram",
    url: "https://www.instagram.com/ror.technologies/",
  },
  {
    image: "Linkedin",
    url: "https://www.linkedin.com/company/ror-technologies/?viewAsMember=true",
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
  "cash in the bank.",
  "movable and immovable assets.",
  "financial investments.",
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
    title: "Scale",
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
    title: "Secure",
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
    title: "Quality Assurance",
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
      "Setting up Centres of Excellence and Offshore development centres and Managed Services Portfolio",
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
        title: "Multi-skilled",
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
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoY1FvePBK2udhgFkc9pfroZsCYNOQUvqaylij",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jo5PRzPl4ExjW1sDfG4KwEQHO6ueoI38FJlAm0",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JovfAjGnUqGR1Lx8Biu7mtjMQKqYnfeNwV9rEU",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jo4Zk8FQDtOT2gNrQSweasDkMdxH1n6hmpyZPL",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoW8kuuzV93iJm0k54l8QjZnxIufGLthXdgERC",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Joc5xtDAviChW1Q34Jaq0rPl9vMtyISbNZBg8x",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JodASTJunTKYG3xD0yZ2H6r7WBSuNPQnmkpi4R",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoxwJDLhlGnmZE9koqNWJhMVpPCK4Xtj2rdFzB",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jo5OhdiRExjW1sDfG4KwEQHO6ueoI38FJlAm0V",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JolrHlJDIM3WqncHBhbASCXrkRtF4E87J1PweL",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jow7NwD19azNjsdfbS78XogvKc3YFTErMpmnAx",
  "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoScHEhefD5btxVm4sdUgOiLWYcuMaIwpv8eSh",
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

export const solutionsData = [
  {
    icon: ExperienceAndEngage,
    title: "Experience and Engage",
    description:
      "Digital solutions that help you to engage with your stakeholders better and provide superior experiences.",
    solutions: [
      "Portals, Marketplaces, Web applications",
      "Mobile Applications",
      "Low Code",
      "Application Platforms",
      "Digital Experience Management",
      "Chatbots",
      "GenAI",
    ],
    services:
      "Full stack | Java | .NET | Microsoft Power Platform | CoPilot | Liferay",
  },
  {
    icon: AutomateAndOptimise,
    title: "Automate and Optimize",
    description:
      "AI solutions that help you to automate your processes and optimize your efforts and cost",
    solutions: [
      "Robotic Process Automation",
      "Intelligent Document Processing",
      "Process And Task Mining",
      "Business Applications",
    ],
    services:
      "Insurance Claims Settlement Platform | Automation Hub: Automation Command and Control center | RPA | Intelligent Document Processing | Process Mining | Communications Mining | Automated Testing",
  },
  {
    icon: AnalyzeAndPredict,
    title: "Analyse and predict",
    description:
      "Cognitive solutions that help you look at the past and visualize the future",
    solutions: [
      "Data Engineering",
      "Data Lake and Warehouses",
      "Data Science",
      "Data Visualization",
    ],
    services:
      "Microsoft Fabric | Azure Data Factory | Azure Synapse Analytics | Azure ML | PowerBI",
  },

  {
    icon: ScaleAndSecure,
    title: "Scale , Secure and Test",
    description:
      "Solutions that help you scale your infrastructure and secure them at every level",
    solutions: [
      "Cloud Engineering",
      "Platform Engineering",
      "DevSecOps",
      "Testing and Quality Assurance",
    ],
    services: "Azure DevOps | Azure SQL | Microsoft Sentinel | Guardian",
  },
  ,
];

export const contentLists: MainNavItems = [
  {
    title: "Case Studies",
    href: "/dashboard/case-studies",
    subItems: [
      {
        title: "Add Case Study",
        href: "/dashboard/case-studies/",
        type: "button",
      },
      { title: "All Case Studies", href: "/dashboard/case-studies/" },
    ],
  },
];

export const contactUsData = [
  {
    title: "Clients and Partners",
    description:
      "Are you ready to unlock the full potential of your data and drive maximum value? Or perhaps you’re eager to explore impactful collaboration opportunities with ROR?",
    mailId: "info@rortechnologies.com",
    reachOutToUs: "Email Us Now",
  },
  {
    title: "Careers",
    description:
      "Are you ready to take your career to the next level? Join ROR Technologies and be part of a team that’s driving innovation and creating transformative solutions every day!",
    mailId: "careers@rortechnologies.com",
    reachOutToUs: "Reach Out Now",
  },
];

export const companyLocation = [
  {
    location: "Dubai HQ",
    address:
      "Suite 404 Al Moosa Tower 1, 505 Sheikh Zayed Rd (opp. Museum of Future), Trade Centre, Trade Centre 1, Dubai",
    tel: "(+971) 4 266 7879",
  },
  {
    location: "INDIA",
    address:
      "No 9, 2nd Floor, AB towers Karpaga Nagar 8th Street, Madurai - 625007",
    tel: "+91 6374055575",
  },
];

export const ourPartnershipTenets: { title: string; icon: Icon }[] = [
  {
    title: "Strategic than Operational",
    icon: "Strategic",
  },
  {
    title: "Trust and Transparency",
    icon: "TrustAndTransparency",
  },
  {
    title: "Mutually Rewarding",
    icon: "MutuallyRewarding",
  },
  {
    title: "Ecosystem Success",
    icon: "Ecosystem",
  },
];

export const typeOfPartnerships = [
  {
    title: "Technology Partnerships",
    description:
      "Strong association with globally recognized technology product vendors to build cutting edge solutions around them.",
  },
  {
    title: "Solution Partnerships",
    description:
      "Partnerships with specialized solution companies for completing the missing pieces of solution puzzle.",
  },
  {
    title: "Business Partnerships",
    description:
      "ROR’s global footprint expansion through business partnerships with reputed regional players and business influencers in different regions and verticals",
  },
  {
    title: "Campus Connects",
    description:
      "New products and solution enablement through mutually beneficial MOUs with leading campuses",
  },
];

export const technologyPartners = [
  {
    company: "Microsoft",
    companyWebsite: "https://www.microsoft.com/en-in/",
    image:
      "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoKvnv5zGFhz8TfXUsR9owmHPc3EAgSiNGMQ7t",
    description:
      "Ducont is Microsoft’s Gold Partner. This longstanding partnership supports competency building and drives the development of innovative solutions in hyperautomation, data analytics, and AI.",
  },
  {
    company: "Tungsten Automation",
    companyWebsite: "https://www.tungstenautomation.com/",
    image:
      "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoFFh4eFcTqXyUSnFKg8zQZkCAtrRxsJ2cDaiM",
    description:
      "Ducont is a trusted partner of Tungsten Automation, a global leader in intelligent workflow automation, delivering robust solutions to streamline and automate data-intensive business workflows.",
  },
  {
    company: "Ghangor Cloud",
    companyWebsite: "https://ghangorcloud.com/",
    image:
      "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JopexoBQ3cTLVPIyFzkuiaCOnK7jHv6DbBN1MR",
    description:
      "Ghangor Cloud is a leader in next-generation Information Security and Compliance solutions, specializing in advanced Data Loss Prevention. Their “Industry’s First and Only” solution addresses both malicious and inadvertent data theft across any channel, protocol, or web service. Ducont partners with Ghangor Cloud to bring these solutions to the Middle East market.",
  },
  {
    company: "AIQOD",
    companyWebsite: "https://aiqod.com/",
    image:
      "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoOMeMXEKaAN2xy7u8gkcnHmWrtVoJiaswfYqB",
    description:
      "AIQOD is an innovative organization offering a No-Code platform powered by advanced Generative AI, ML, NLP, and Analytics capabilities. ROR Technologies has a strong partnership with AIQOD to deliver next-gen AI solutions to organizations worldwide.",
  },
  {
    company: "Exequantum",
    companyWebsite: "http://exequantum.com/",
    image:
      "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jop8yR823cTLVPIyFzkuiaCOnK7jHv6DbBN1MR",
    description:
      "Exequantum is a leading player in Post-Quantum Cybersecurity. ROR Technologies collaborates with them to redefine security solutions for corporates and government agencies, preparing for the next technological wave of quantum computing.",
  },
];

export const solutionPartners = [
  {
    company: "Bootlabs",
    companyWebsite: "https://bootlabstech.com/",
    image:
      "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JodV3vUKbnTKYG3xD0yZ2H6r7WBSuNPQnmkpi4",
    description:
      "Bootlabs is a key player in Platform Engineering, Cloud Engineering, DevSecOps, and Generative AI solutions. ROR Technologies partners with them to deliver advanced security and observability solutions to its customers.",
  },
  {
    company: "Vishleshan",
    companyWebsite: "https://www.vishleshan.net/",
    image:
      "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JokV5fthT9fWpjiqn4FdXvS2etCZc8TIHVR1AM",
    description:
      "Visleshan is a digital transformation solutions provider with a strong focus on Design Thinking. ROR Technologies partners with them to deliver innovative digital experience solutions, from concept to execution, driven by extensive Design Thinking.",
  },
];

export const businessPartners = [
  {
    company: "Alpha Data",
    companyWebsite: "https://www.alpha.ae/",
    image:
      "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoZonefpY0xWQHDojuibp7I4r2hvgC9kTXdNFl",
    description:
      "A premier Digital Transformation provider in the Middle East since 1981, with longstanding partnerships with local and federal governments in the UAE, they have a strong presence in Dubai and Abu Dhabi, along with operations in Saudi Arabia and Qatar. ROR Technologies maintains a robust business relationship with them across these geographies.",
  },
  {
    company: "Meerana",
    companyWebsite: "https://meerana.ae/",
    image:
      "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JojOUcB7Jw8jHFuSTVfx07Pb2Z3B5N4iW16pCM",
    description:
      "Meerana, an Emirati-owned innovative organization, holds a strong presence in the UAE public sector. ROR Technologies collaborates closely with Meerana on various joint go-to-market initiatives",
  },
  {
    company: "Indus Novateur",
    companyWebsite: "https://www.indusnovateur.com",
    image:
      "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JodGO2u6nTKYG3xD0yZ2H6r7WBSuNPQnmkpi4R",
    description:
      "Indus Novateur is a leading IT services provider with operations spanning GCC countries, East Africa, and the United States. As SAP Gold Partners and a top systems integrator for Salesforce implementations worldwide, they bring extensive expertise to the table. ROR Technologies maintains a strategic partnership with Indus to address markets across the GCC. SAP Gold Partner in Chennai, Bangalore, Mumbai, USA, UAE, Oman, Qatar, Saudi Arabia, KSA, India﻿",
  },
  {
    company: "Huco",
    companyWebsite: "https://huco.co",
    image:
      "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JofGrv1iXHOZbh2CjGeXqfwlSxucmzViUyQR8F",
    description:
      "Huco is a leading tech consulting and services firm specializing in Hybrid Cloud, Cloud-Native, and DevOps solutions. They help global organizations build, run, manage, and secure applications for the multicloud economy. With a strong presence across the MENA region, ROR Technologies has a strategic business association with Huco to pursue joint opportunities. ",
  },
];
export const campusPartners = [
  {
    company: "Thiagarajar College of Engineering",
    companyWebsite: "https://www.tce.edu",
    image:
      "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoEAYwKKR3SVOvYsnBF5ut4o72mbMrehXAwgcx",
    description:
      "Thiagarajar College of Engineering (TCE), established in 1957 by philanthropist Karumuttu Thiagarajan Chettiar in Madurai, is a Government-Aided Autonomous Institution affiliated with Anna University and approved by AICTE. TCE offers diverse Undergraduate, Postgraduate, and Ph.D. programs in Engineering, Architecture, and Science. ROR has signed an MoU with TCE’s IT department for joint research and solution proof of concepts.",
  },
];

export const caseStudiesData = [
  {
    title: "Automation of Invoice Extraction and PO Reconciliation",
    benefitsData: [
      {
        title: "Processing Time",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoUOkameuKHfmtSCwOWL9lRFieaAxbyBP4sIGJ",
        description: "Reduced from 2 hours to 3 minutes",
      },
      {
        title: "Accuracy",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoOR8s5LaAN2xy7u8gkcnHmWrtVoJiaswfYqBK",
        description: "Drastically improved reconciliation",
      },
      {
        title: "Efficiency",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoBdDYBVpn9TX8jAg1KsG2erN3mS6aChv5qWU7",
        description: "Streamlined workflows and cut costs.",
      },
      {
        title: "Productivity",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoAKOoJG1HyxoZ8NhGk6rWw0vu3eISDROFpiAY",
        description: "Freed up resources for strategic tasks.",
      },
    ],
  },
  {
    title: "Simplifying Report Generation for Wealth Management Firms",
    benefitsData: [
      {
        title: "Time Efficiency",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoYbn08fBK2udhgFkc9pfroZsCYNOQUvqaylij",
        description:
          "Reduced report generation time from 6–7 hours to just 30 mins.",
      },
      {
        title: "Error Elimination",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoOR8s5LaAN2xy7u8gkcnHmWrtVoJiaswfYqBK",
        description:
          "Minimized manual errors in data extraction and formatting.",
      },
      {
        title: "Enhanced Productivity",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoBdDYBVpn9TX8jAg1KsG2erN3mS6aChv5qWU7",
        description: "Freed up employees for higher-value tasks.",
      },
      {
        title: "Customer Satisfaction",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoZFM6LFY0xWQHDojuibp7I4r2hvgC9kTXdNFl",
        description: "Consistent and timely report delivery boosted trust.",
      },
    ],
  },
  {
    title: "Optimizing Deal Management Testing with Automation",
    benefitsData: [
      {
        title: "Time Efficiency",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoYbn08fBK2udhgFkc9pfroZsCYNOQUvqaylij",
        description:
          "Reduced transaction testing time from 120 minutes to 7-9 minutes",
      },
      {
        title: "Error Elimination",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoOR8s5LaAN2xy7u8gkcnHmWrtVoJiaswfYqBK",
        description:
          "Standardized testing across applications, eliminating manual errors.",
      },
      {
        title: "Process Optimization",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoyrriU4dUGDbyzcPt5aIElLJ6SxmBdQChFqfv",
        description: "Improved consistency and workflow management.",
      },
      {
        title: "Scalability",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoY3ic5JKBK2udhgFkc9pfroZsCYNOQUvqayli",
        description:
          "Supported multi-country, multi-currency complexities with ease.",
      },
    ],
  },
  {
    title: "Transforming Risk Review Processes for a Govt. Organisation",
    benefitsData: [
      {
        title: "Centralized Management",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JocYCreKviChW1Q34Jaq0rPl9vMtyISbNZBg8x",
        description:
          "Unified platform for tracking and managing requests end-to-end.",
      },
      {
        title: "Improved Efficiency",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoQJzFUOmLS8JoxDr3CQYdi4MUgWNHuAX51vqf",
        description:
          "Automated workflows reduced delays and manual dependencies.",
      },
      {
        title: "Enhanced Collaboration",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoBQMrRd3pn9TX8jAg1KsG2erN3mS6aChv5qWU",
        description:
          "Integrated communication channels for seamless interaction.",
      },
      {
        title: "Performance Monitoring",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jo3ltR5jQi8vcObFlrT7w14X6SLdI0jJUfZom3",
        description:
          "Advanced data reporting and analytics for actionable insights.",
      },
    ],
  },
  {
    title: "Accelerating Claims Processing for Next-Gen Motor Insurance",
    benefitsData: [
      {
        title: "Faster Processing",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jonjh0MlowYUd8PNaxkbQMZDjCOh9TreziRGso",
        description:
          "Reduced time for processing and settling claims by automating manual workflows.",
      },
      {
        title: "Part-Level Data",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Jo1ddtmr70qbOPj8Tsk5mVUfgcHQGxF92ZJAln",
        description:
          "Enabled precise part-level data extraction and AI-based recommendations, improving decision-making.",
      },
      {
        title: "Error Reduction",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoKxAPC1Fhz8TfXUsR9owmHPc3EAgSiNGMQ7tB",
        description:
          "Eliminated manual data entry errors, ensuring accurate claim processing.",
      },
      {
        title: "Streamlined Operations",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoExMaBoR3SVOvYsnBF5ut4o72mbMrehXAwgcx",
        description:
          "Centralized document classification and storage, creating a seamless end-to-end digitization process.",
      },
    ],
  },
  {
    title: "Automating Stamp Validation for MOFA with AI and LLM Technology",
    benefitsData: [
      {
        title: "Efficiency",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8Joy8lovdUGDbyzcPt5aIElLJ6SxmBdQChFqfvn",
        description:
          "Handles large volumes of documents with seamless API integrations.",
      },
      {
        title: "Accuracy",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JooiPOCBVT8rIHWv7BJMYazNZbEA2phydeqPVU",
        description:
          "Improved precision in detecting and validating stamps and signatures.",
      },
      {
        title: "Scalability",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JodXMdjanTKYG3xD0yZ2H6r7WBSuNPQnmkpi4R",
        description:
          "Reduced time for stamp validation with automated workflows.",
      },
      {
        title: "Comprehensive Control",
        image:
          "https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoplYMJz3cTLVPIyFzkuiaCOnK7jHv6DbBN1MR",
        description:
          "Centralized validation rules and reporting for better compliance.",
      },
    ],
  },
];

export const privacyPolicyContent = [
  {
    title: "Personally Identifiable Information",
    description:
      "Refers to any information that identifies or can be used to identify, contact, or locate the person to whom such information pertains, including, but not limited to, name, address, phone number, fax number, email address, financial profiles, social security number, and credit card information. Personally Identifiable Information does not include information that is collected anonymously (that is, without identification of the individual user) or demographic information not connected to an identified individual.",
  },
  {
    title: "What Personally Identifiable Information is collected?",
    description:
      "We may collect basic user profile information from all of our Visitors. We collect the following additional information from our Authorized Customers: the names, addresses, phone numbers and email addresses of Authorized Customers, the nature and size of the business, and the nature and size of the advertising inventory that the Authorized Customer intends to purchase or sell.",
  },
  {
    title: "What organizations are collecting the information?",
    description:
      "In addition to our direct collection of information, our third party service vendors (such as credit card companies, clearinghouses and banks) who may provide such services as credit, insurance, and escrow services may collect this information from our Visitors and Authorized Customers. We do not control how these third parties use such information, but we do ask them to disclose how they use personal information provided to them from Visitors and Authorized Customers. Some of these third parties may be intermediaries that act solely as links in the distribution chain, and do not store, retain, or use the information given to them.",
  },
  {
    title: "How does the Site use Personally Identifiable Information?",
    description:
      "We use Personally Identifiable Information to customize the Site, to make appropriate service offerings, and to fulfill buying and selling requests on the Site. We may email Visitors and Authorized Customers about research or purchase and selling opportunities on the Site or information related to the subject matter of the Site. We may also use Personally Identifiable Information to contact Visitors and Authorized Customers in response to specific inquiries, or to provide requested information.",
  },
  {
    title: "With whom may the information may be shared?",
    description:
      "Personally Identifiable Information about Authorized Customers may be shared with other Authorized Customers who wish to evaluate potential transactions with other Authorized Customers. We may share aggregated information about our Visitors, including the demographics of our Visitors and Authorized Customers, with our affiliated agencies and third party vendors. We also offer the opportunity to “opt out” of receiving information or being contacted by us or by any agency acting on our behalf.",
  },
  {
    title: "How is Personally Identifiable Information stored?",
    description:
      "ersonally Identifiable Information collected by www.rortechnologies.com is securely stored and is not accessible to third parties or employees of www.rortechnologies.com except for use as indicated above.",
  },
  {
    title:
      "What choices are available to Visitors regarding collection, use and distribution of the information?",
    description:
      "Visitors and Authorized Customers may opt out of receiving unsolicited information from or being contacted by us and/or our vendors and affiliated agencies by responding to emails as instructed, or by contacting us at info@rortechnologies.com",
  },
  {
    title: "Are Cookies Used on the Site?",
    description:
      "Cookies are used for a variety of reasons. We use Cookies to obtain information about the preferences of our Visitors and the services they select. We also use Cookies for security purposes to protect our Authorized Customers. For example, if an Authorized Customer is logged on and the site is unused for more than 10 minutes, we will automatically log the Authorized Customer off.",
  },
  {
    title: "How does www.rortechnologies.com use login information?",
    description:
      "www.rortechnologies.com uses login information, including, but not limited to, IP addresses, ISPs, and browser types, to analyze trends, administer the Site, track a user’s movement and use, and gather broad demographic information.",
  },
  {
    title:
      "What partners or service providers have access to Personally Identifiable Information from Visitors and/or Authorized Customers on the Site?",
    description:
      "www.rortechnologies.com has entered into and will continue to enter into partnerships and other affiliations with a number of vendors. Such vendors may have access to certain Personally Identifiable Information on a need to know basis for evaluating Authorized Customers for service eligibility.",
  },
  {
    title:
      "Our privacy policy does not cover their collection or use of this information.",
    description:
      "Disclosure of Personally Identifiable Information to comply with law. We will disclose Personally Identifiable Information in order to comply with a court order or subpoena or a request from a law enforcement agency to release information. We will also disclose Personally Identifiable Information when reasonably necessary to protect the safety of our Visitors and Authorized Customers.",
  },
  {
    title: "How does the Site keep Personally Identifiable Information secure?",
    description:
      "All of our employees are familiar with our security policy and practices. The Personally Identifiable Information of our Visitors and Authorized Customers is only accessible to a limited number of qualified employees who are given a password in order to gain access to the information. We audit our security systems and processes on a regular basis. Sensitive information, such as credit card numbers or social security numbers, is protected by encryption protocols, in place to protect information sent over the Internet. While we take commercially reasonable measures to maintain a secure site, electronic communications and databases are subject to errors, tampering and break-ins, and we cannot guarantee or warrant that such events will not take place and we will not be liable to Visitors or Authorized Customers for any such occurrences.",
  },
  {
    title:
      "How can Visitors correct any inaccuracies in Personally Identifiable Information?",
    description:
      "Visitors and Authorized Customers may contact us to update Personally Identifiable Information about them or to correct any inaccuracies by emailing us at info@rortechnologies.com",
  },
  {
    title:
      "Can a Visitor delete or deactivate Personally Identifiable Information collected by the Site?",
    description:
      "We provide Visitors and Authorized Customers with a mechanism to delete/deactivate Personally Identifiable Information from the Site’s database by contacting info@rortechnologies.com. However, because of backups and records of deletions, it may be impossible to delete a Visitor’s entry without retaining some residual information. An individual who requests to have Personally Identifiable Information deactivated will have this information functionally deleted, and we will not sell, transfer, or use Personally Identifiable Information relating to that individual in any way moving forward.",
  },
  {
    title: "What happens if the Privacy Policy Changes?",
    description:
      "We will let our Visitors and Authorized Customers know about changes to our privacy policy by posting such changes on the Site. However, if we are changing our privacy policy in a manner that might cause disclosure of Personally Identifiable Information that a Visitor or Authorized Customer has previously requested not be disclosed, we will contact such Visitor or Authorized Customer to allow such Visitor or Authorized Customer to prevent such disclosure.",
  },
  {
    title: "Links:",
    description:
      "This web site contains links to other web sites. Please note that when you click on one of these links, you are moving to another web site. We encourage you to read the privacy statements of these linked sites as their privacy policies may differ from ours.",
  },
];
