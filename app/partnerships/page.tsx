"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { CircularProgress } from '@mui/material';

type PartnerIconType = 'technology' | 'agency' | 'investor';

type PartnerCategory = {
  title: string;
  description: string;
  benefits: string[];
  icon: PartnerIconType;
};

const partnerCategories: PartnerCategory[] = [
  {
    title: 'Technology Partners',
    description:
      'CRM, Sales Engagement, AI, and Data platforms integrating into modern outbound infrastructure.',
    benefits: [
      'Native integrations',
      'Joint go-to-market strategy',
      'Co-branded campaigns',
      'Revenue-sharing models',
    ],
    icon: 'technology',
  },
  {
    title: 'Agencies & Consultants',
    description:
      'Sales trainers, RevOps consultants, GTM strategists, and marketing agencies scaling outbound.',
    benefits: [
      'White-label SDR teams',
      'Referral commissions',
      'Joint enterprise deals',
      'Expanded service offerings',
    ],
    icon: 'agency',
  },
  {
    title: 'Investors & VCs',
    description:
      'Venture Capital & Private Equity firms accelerating portfolio growth across regions.',
    benefits: [
      'Portfolio-wide deployment',
      'Preferential pricing',
      'Growth performance dashboards',
      'Rapid SDR onboarding',
    ],
    icon: 'investor',
  },
];

// Removed unused whyPartnerFeatures variable

/* ----------------------- */
/* Layout Helpers          */
/* ----------------------- */

function Container({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={`mx-auto max-w-7xl px-6 lg:px-8 ${className ?? ''}`}
      {...props}
    />
  );
}

function Section({ className, ...props }: ComponentProps<'section'>) {
  return <section className={className} {...props} />;
}

/* ----------------------- */
/* Icon System             */
/* ----------------------- */

function CategoryIcon({ type }: { type: PartnerIconType }) {
  const colors = {
    technology: 'bg-blue-50 text-[#0055ae]',
    agency: 'bg-purple-50 text-purple-600',
    investor: 'bg-green-50 text-green-600',
  };

  return (
    <div
      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${colors[type]}`}
    >
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {type === 'technology' && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L6 20.75M14.25 17L18 20.75M8 5h8a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2z"
          />
        )}
        {type === 'agency' && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 12a3 3 0 100-6 3 3 0 000 6zm10 0a3 3 0 100-6 3 3 0 000 6zM4 20a5 5 0 015-5h1a5 5 0 015 5M10 15h4"
          />
        )}
        {type === 'investor' && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 19h16M6 16V8m4 8V5m4 11v-6m4 6V7"
          />
        )}
      </svg>
    </div>
  );
}

/* ----------------------- */
/* Main Page               */
/* ----------------------- */

export default function Partnerships() {
  const [companyName, setCompanyName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [linkedinProfile, setLinkedinProfile] = useState<string>("");
  const [partnershipIdea, setPartnershipIdea] = useState<string>("");
  const [partnershipType, setPartnershipType] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});


  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!companyName.trim()) newErrors.companyName = "Company Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!name.trim()) newErrors.name = "Name is required";
    if (!partnershipIdea.trim()) newErrors.partnershipIdea = "Partnership Idea is required";
    if (!partnershipType.trim()) newErrors.partnershipType = "Partnership Type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePartnershipFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const body = { companyName, name, email, linkedinProfile, partnershipIdea, partnershipType };
    setLoading(true);
    axios
    .post("/api/submit/partnership", body)
    .then((response) => {
        toast.success("Request submitted successfully!");
        setCompanyName("");
        setName("");
        setEmail("");
        setPartnershipIdea("");
        setPartnershipType("");
        setLinkedinProfile("");
        setErrors({});
        console.log(response.data);
      })
      .catch(() => {        
        toast.error("There was an error submitting your request. Please try again later.");
      }).finally(() => {
        setLoading(false);
      });
  
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">

      {/* ================= HERO ================= */}
      <Section className="relative min-h-[75vh] overflow-hidden text-white">
        <Image
          src="/partnership1.jpg"
          alt="Global partnership collaboration"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <Container className="relative z-10 flex min-h-[75vh] flex-col items-center justify-center text-center">
          <p className="mb-6 text-sm uppercase tracking-widest text-blue-200">
            Africa-Powered Strategic Partnerships
          </p>

          <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
            Build the Future of
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sales Development
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-200">
            Partner with Africa&apos;s leading SDR organization trusted by high-growth 
            startups, enterprise teams, and international investors.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#partnership-form"
              className="rounded-xl bg-[#0055ae] px-8 py-4 text-lg font-semibold transition hover:bg-blue-700 shadow-lg shadow-blue-900/20"
            >
              Become a Partner
            </Link>
          </div>
        </Container>
      </Section>

      {/* ================= PARTNER TYPES ================= */}
      <Section className="bg-gray-50 py-24">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Partnership Opportunities
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Designed for organizations serious about scaling revenue globally.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {partnerCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <CategoryIcon type={category.icon} />
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
                <p className="mb-6 text-gray-600">{category.description}</p>
                <ul className="space-y-3 text-gray-500">
                  {category.benefits.map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ================= WHY PARTNER ================= */}
      {/* <Section className="bg-white py-24">
        <Container>
           <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Why Partner with SDR Global?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              We don't just provide leads; we build sustainable revenue engines.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {whyPartnerFeatures.map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section> */}

      {/* Contact Form Section */}
      <section id="partnership-form" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Join Our Partner Ecosystem
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Whether you&apos;re a technology provider, an agency, or an investor, let&apos;s create value together. Fill out the form to explore partnership opportunities.
              </p>
              <ul className="space-y-4">
                {[
                  'Expand your service offering with white-label SDRs',
                  'Integrate your tech into our global sales stack',
                  'Accelerate portfolio growth for your investments',
                  'Access exclusive partner resources and revenue share'
                ].map(item => (
                  <li key={item} className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Partnership Form */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Partnerships
              </h3>

              <form className="space-y-6" onSubmit={handlePartnershipFormSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none ${
                      errors.companyName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your organization name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>


                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@organization.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Partnership Type
                  </label>
                  <select 
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none ${
                      errors.partnershipType ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={partnershipType}
                    onChange={(e) => setPartnershipType(e.target.value)}
                  >
                    <option value="">Select partnership type</option>
                    <option value="Technology Partnership">Technology Partnership</option>
                    <option value="Referral Partnership">Agencies & Consultants</option>
                    <option value="Co-Marketing">Investors & VCs</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.partnershipType && (
                    <p className="text-red-500 text-sm mt-1">{errors.partnershipType}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none ${
                      errors.linkedinProfile ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="LinkedIn URL (e.g., https://www.linkedin.com/in/yourprofile)"
                    value={linkedinProfile}
                    onChange={(e) => setLinkedinProfile(e.target.value)}
                  />
                  {errors.linkedinProfile && (
                    <p className="text-red-500 text-sm mt-1">{errors.linkedinProfile}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your partnership idea
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                    placeholder="Describe your partnership proposal and how we can work together..."
                    value={partnershipIdea}
                    onChange={(e) => setPartnershipIdea(e.target.value)}
                  ></textarea>
                </div>

                {loading ? (
                  <button
                    type="submit"
                    className="w-full bg-[#0055ae] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0055ae] transition-colors"
                    disabled
                  >
                    <CircularProgress color="inherit" size={24} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-[#0055ae] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0055ae] transition-colors"
                  >
                    Submit Request
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <Section className="bg-[#0055ae] py-24 text-white">
        <Container className="text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Let&apos;s Scale Revenue with Africa&apos;s Best
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-xl text-blue-100">
            If you&apos;re serious about expanding market reach and leveraging 
            Africa&apos;s premier sales talent to deliver measurable growth,
            let’s build something exceptional together.
          </p>

          <Link
            href="#partnership-form"
            className="rounded-xl bg-white px-10 py-5 text-lg font-semibold text-[#0055ae] transition hover:bg-blue-50 shadow-xl"
          >
            Start the Partnership Conversation
          </Link>
        </Container>
      </Section>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
