import { FeatureItem } from "./feature-item";
import { Icon } from "./icons";

const features: { title: string; description: string; icon: Icon }[] = [
  {
    title: "Customer-Centric Approach",
    icon: "WorldClassPartnerships",
    description:
      "We prioritize our clients' needs and work collaboratively to deliver tailored solutions that drive real business value. We engage with our clients more as partners than as vendors. We co-invest with them to solve their complex business challenges on a continuous basis.",
  },
  {
    title: "Global Reach",
    icon: "GlobalReach",
    description:
      "As a global player, we have a deep understanding of diverse markets and regulatory environments, enabling us to serve clients across different regions effectively.",
  },
  {
    title: "Proven Expertise",
    icon: "ProvenExpertise",
    description:
      "With years of experience in digital transformation, our team brings unparalleled expertise and insights to every project.",
  },
  {
    title: "World-Class Partnerships",
    icon: "WorldClassPartnerships",
    description:
      "We have partnerships with best in class technology and service delivery organizations to provide best in class solutions and services",
  },
  {
    title: "Innovative Solutions",
    icon: "InnovativeSolutions",
    description:
      "We are committed to staying at the forefront of technological innovation, continuously evolving our solutions to meet the changing needs of our clients.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-secondary_heading relative text-primary font-heading mb-12">
          Why Choose Us?
        </h2>

        <div className="grid gap-8">
          {/* Top row - 2 columns on desktop */}
          <div className="grid md:grid-cols-2 gap-8  pb-8">
            <FeatureItem
              key={0}
              value={0}
              title={features[0].title}
              description={features[0].description}
              icon={features[0].icon}
              className="border-r border-gray-200 pl-8"
            />
            <FeatureItem
              key={1}
              value={1}
              title={features[1].title}
              icon={features[1].icon}
              description={features[1].description}
            />
          </div>

          {/* Bottom row - 3 columns on desktop */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(2).map((feature, index) => (
              <FeatureItem
                key={index + 2}
                value={index + 2}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className={index !== 2 ? "border-r border-gray-200 pl-8" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
