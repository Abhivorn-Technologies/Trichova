import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Trichova",
  description: "Privacy Policy for Trichova Hair Studio. Read how we protect and use your personal information safely and securely.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero 
        title="Privacy Policy" 
        description="Our commitment to protecting your privacy and personal information."
        imageSrc="/images/clinic-interior.jpg"
      />
      <div className="section-container py-10 md:py-20">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gold/10">
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              Every effort will be made to keep the information provided by users in a safe manner; the information will be displayed on the website only after obtaining consent from the users. Any user browsing the site generally is not required to disclose his identity or provide any information about him/her; it is only at the time of enquiring about the listing you will be required to furnish the details in the form.
            </p>
            <p>
              A full user always has the option of not providing the information which is not mandatory. You are solely responsible for maintaining confidentiality of the User password and user identification and all activities and transmission performed by the User through his user identification and shall be solely responsible for carrying out any online or off-line transaction involving credit cards / debit cards or such other forms of instruments or documents for making such transactions and trichova Hair studio assumes no responsibility or liability for their improper use of information relating to such usage of credit cards / debit cards used by the subscriber online / off-line.
            </p>
            <p>
              You agree that trichova Hair studio may use personal information about you to improve its marketing and promotional efforts, to analyse site usage, improve the Site&apos;s content and product/service offerings, and customise the Site&apos;s content, layout, and services. These uses improve the Site and better tailor it to meet your needs, so as to provide you with a smooth, efficient, safe and customised experience while using the Site.
            </p>
            <p>
              You agree that trichova Hair studio may use your personal information to contact you and deliver information to you that, in some cases, are targeted to your interests, such as targeted banner advertisements, administrative notices, product offerings, and communications relevant to your use of the Site. By accepting the User Agreement and Privacy Policy, you expressly agree to receive this information. If you do not wish to receive these communications, we encourage you to opt out of the receipt of certain communications in your profile. You may make changes to your profile at any time by communicating the same through Email ID provided at the end of this page. It is the belief of trichova Hair studio that privacy of a person can be best guaranteed by working in conjunction with the Law enforcement authorities.
            </p>
            <p>
              Trichova Hair studio fully comply with all Indian Laws applicable. Trichova Hair Studio has always cooperated with all law enforcement inquires. Trichova Hair studio may disclose all or part of your personal details in response to a request from the law enforcement authorities or in a case of bonafide requirement to prevent an imminent breach of the law
            </p>
            <p>
              If you have any grievance relating to the processing/usage of information provided by you or Trichova Hair studio Privacy Policy, you may email at <a href="mailto:info@Trichovahair.com" className="text-gold hover:underline font-medium">info@Trichovahair.com</a> We may change this Privacy Policy at any time by posting a revised Privacy Policy on this page; such changes will be effective upon posting.
            </p>
            <p>
              The Service may provide links to third party websites. This Privacy Policy does not apply to any information you may provide while on such third-party websites. We encourage you to carefully read the privacy policies on those third-party websites before providing any of your information on such sites.
            </p>
            <p className="font-semibold text-navy-900 pt-4">
              In every respect, by using Trichova Hair studio you agree to be bound by terms of this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
