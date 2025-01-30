import { FC } from "react";
import { privacyPolicyContent } from "@/config/marketing";

const page = function () {
  return (
    <section className="w-screen min-h-[100vh] md:min-h-[100vh] bg-transparent flex items-start justify-center relative py-6 md:py-36">
      <div className="container flex flex-col items-start justify-start">
        <h1 className="text-secondary_heading font-heading leading-tight text-primary mb-6">
          Privacy Policy
        </h1>
        <p className="text-popover font-paragraph text-paragraph_heading font-light mb-3">
          Welcome to www.rortechnologies.com (the “Site”). We understand that
          privacy online is important to users of our Site, especially when
          conducting business.
        </p>
        <p className="text-popover font-paragraph text-paragraph_heading font-light mb-5">
          This statement governs our privacy policies with respect to those
          users of the Site (“Visitors”) who visit without transacting business
          and Visitors who register to transact business on the Site and make
          use of the various services offered by www.rortechnologies.com/
          (collectively, “Services”) (“Authorized Customers”).
        </p>
        <ul className="flex flex-col items-start justify-center gap-5">
          {privacyPolicyContent.map((item, i) => (
            <li className="flex items-start flex-col justify-center gap-3">
              <h3 className="text-tertiary_heading font-heading leading-tight text-popover">
                {item.title}
              </h3>
              <p className="text-popover font-paragraph text-paragraph_heading font-light mb-3">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
